import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const GOATCOUNTER_URL = 'https://cranberrymuffin.goatcounter.com';

// The site uses HashRouter, so GoatCounter can't see the route on its own.
// Normalize to the part after "#" (lowercased so /blog/Snowstorm and
// /blog/snowstorm share one counter).
function normalizePath(pathname) {
  return pathname.toLowerCase().replace(/\/+$/, '') || '/';
}

function whenGoatCounterReady(callback) {
  if (window.goatcounter?.count) {
    callback();
    return;
  }
  const script = document.getElementById('goatcounter-script');
  script?.addEventListener('load', callback, { once: true });
}

export function PageViewTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = normalizePath(pathname);
    whenGoatCounterReady(() => window.goatcounter.count({ path }));
  }, [pathname]);

  return null;
}

// Cloudflare Worker (workers/read-count) that serves live counts from the
// GoatCounter API. The public counter below is a fallback; it's heavily cached.
const READ_COUNT_URL = 'https://read-count.aparnalovestocode.workers.dev';

async function fetchLiveCount(path) {
  if (!READ_COUNT_URL) throw new Error('read-count worker not configured');
  const res = await fetch(
    `${READ_COUNT_URL}/?path=${encodeURIComponent(path)}`,
  );
  if (!res.ok) throw new Error(res.statusText);
  const { count } = await res.json();
  return count.toLocaleString('en-US');
}

async function fetchCachedCount(path) {
  const res = await fetch(
    `${GOATCOUNTER_URL}/counter/${encodeURIComponent(path)}.json`,
  );
  // 404 means the page has no recorded visits yet.
  if (res.status === 404) return '0';
  if (!res.ok) throw new Error(res.statusText);
  return (await res.json()).count;
}

export function ReadCount() {
  const { pathname } = useLocation();
  const [count, setCount] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const path = normalizePath(pathname);
    fetchLiveCount(path)
      .catch(() => fetchCachedCount(path))
      .then(c => !cancelled && setCount(c))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  if (count === null) return null;
  return <> · {count === '1' ? '1 read' : `${count} reads`}</>;
}
