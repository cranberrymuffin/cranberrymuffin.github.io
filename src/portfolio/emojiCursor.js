// Renders an emoji as an SVG data URL so it can be used as a CSS cursor.
export function emojiCursor(emoji) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="26">${emoji}</text></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 16 16, auto`;
}
