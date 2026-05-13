import { useEffect } from 'react';

export default function useSwapFavicon(href, type = 'image/svg+xml') {
  useEffect(() => {
    let favicon = document.getElementById('favicon') || document.querySelector("link[rel~='icon']");
    let created = false;
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
      created = true;
    }
    const prevHref = favicon.href;
    const prevType = favicon.type;
    favicon.type = type;
    favicon.href = href;
    return () => {
      if (created) {
        favicon.remove();
      } else {
        favicon.href = prevHref;
        favicon.type = prevType;
      }
    };
  }, [href, type]);
}
