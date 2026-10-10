// Returns live read counts for blog posts.
//
// GoatCounter's public /counter/*.json endpoint is cached on their side for a
// long time, so this Worker reads from the authenticated stats API instead and
// keeps the API key out of the browser.
//
//   GET /?path=/blog/get-up  ->  {"count": 12}

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

async function fetchCount(path, token) {
  const url = new URL(API);
  url.searchParams.set('start', START);
  url.searchParams.set('end', endOfHour());
  url.searchParams.set('path_by_name', 'true');
  url.searchParams.set('include_paths', path);
  url.searchParams.set('limit', '1');

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) throw new Error(`GoatCounter ${res.status}`);

  const data = await res.json();
  const hit = (data.hits || []).find(h => h.path === path);
  return hit ? hit.count : 0;
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(request) });
    }

    const path = new URL(request.url).searchParams.get('path') || '';
    if (!/^\/blog\/[a-z0-9-]+$/.test(path)) {
      return json(request, { error: 'invalid path' }, 400);
    }

    const cache = caches.default;
    const cacheKey = new Request(`https://read-count.cache/${path}`);
    let count;
    const cached = await cache.match(cacheKey);
    if (cached) {
      ({ count } = await cached.json());
    } else {
      try {
        count = await fetchCount(path, env.GOATCOUNTER_TOKEN);
      } catch (err) {
        return json(request, { error: err.message }, 502);
      }
      ctx.waitUntil(
        cache.put(
          cacheKey,
          new Response(JSON.stringify({ count }), {
            headers: { 'Cache-Control': `max-age=${CACHE_SECONDS}` },
          }),
        ),
      );
    }

    return json(request, { count }, 200, { 'Cache-Control': 'no-store' });
  },
};
