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

export function ReadCount() {
  const { pathname: path } = useLocation();
  const [count, setCount] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const encoded = encodeURIComponent(normalizePath(path));
    fetch(`${GOATCOUNTER_URL}/counter/${encoded}.json`)
      .then(res => {
        // 404 means the page has no recorded visits yet.
        if (res.status === 404) return { count: '0' };
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(data => !cancelled && setCount(data.count))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [path]);

  if (count === null) return null;
  return <> · {count === '1' ? '1 read' : `${count} reads`}</>;
}
