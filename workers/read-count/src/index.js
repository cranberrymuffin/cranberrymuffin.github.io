// Returns live read counts for blog posts.
//
// GoatCounter's public /counter/*.json endpoint is cached on their side for a
// long time, so this Worker reads from the authenticated stats API instead and
// keeps the API key out of the browser.
//
//   GET /?path=/blog/get-up  ->  {"count": 12}
//   GET /?all                ->  {"counts": {"/blog/get-up": 12, ...}}

const API = 'https://cranberrymuffin.goatcounter.com/api/v0/stats/hits';
// Analytics started after this, so it covers every hit.
const START = '2026-10-01T00:00:00Z';
// Short edge cache so a burst of readers doesn't hit GoatCounter's rate limit.
const CACHE_SECONDS = 10;

const ALLOWED_ORIGINS = ['https://cranberrymuffin.io', 'http://localhost:5173'];

function corsHeaders(request) {
  const origin = request.headers.get('Origin');
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin)
      ? origin
      : ALLOWED_ORIGINS[0],
    Vary: 'Origin',
  };
}

function json(request, body, status = 200, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(request),
      ...extra,
    },
  });
}

// End of the current hour; the API wants hour-rounded times.
function endOfHour() {
  const d = new Date();
  d.setUTCMinutes(0, 0, 0);
  d.setUTCHours(d.getUTCHours() + 1);
  return d.toISOString().replace('.000Z', 'Z');
}

async function fetchHits(token, params) {
  const url = new URL(API);
  url.searchParams.set('start', START);
  url.searchParams.set('end', endOfHour());
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) throw new Error(`GoatCounter ${res.status}`);
  return (await res.json()).hits || [];
}

async function fetchCount(path, token) {
  const hits = await fetchHits(token, {
    path_by_name: 'true',
    include_paths: path,
    limit: '1',
  });
  const hit = hits.find(h => h.path === path);
  return { count: hit ? hit.count : 0 };
}

// One API call for every blog post, for the Writing page list.
async function fetchAllCounts(token) {
  const hits = await fetchHits(token, { limit: '100' });
  const counts = {};
  for (const h of hits) {
    if (h.path.startsWith('/blog/')) counts[h.path] = h.count;
  }
  return { counts };
}

async function cached(ctx, key, load) {
  const cache = caches.default;
  const cacheKey = new Request(`https://read-count.cache/${key}`);
  const hit = await cache.match(cacheKey);
  if (hit) return hit.json();

  const body = await load();
  ctx.waitUntil(
    cache.put(
      cacheKey,
      new Response(JSON.stringify(body), {
        headers: { 'Cache-Control': `max-age=${CACHE_SECONDS}` },
      }),
    ),
  );
  return body;
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(request) });
    }

    const params = new URL(request.url).searchParams;
    const token = env.GOATCOUNTER_TOKEN;
    let key, load;
    if (params.has('all')) {
      key = 'all';
      load = () => fetchAllCounts(token);
    } else {
      const path = params.get('path') || '';
      if (!/^\/blog\/[a-z0-9-]+$/.test(path)) {
        return json(request, { error: 'invalid path' }, 400);
      }
      key = path;
      load = () => fetchCount(path, token);
    }

    try {
      const body = await cached(ctx, key, load);
      return json(request, body, 200, { 'Cache-Control': 'no-store' });
    } catch (err) {
      return json(request, { error: err.message }, 502);
    }
  },
};
