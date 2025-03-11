import { useState } from 'react';

export default function HoverImage({ defaultSrc, hoverSrc, alt }) {
  const [imgSrc, setImgSrc] = useState(defaultSrc);

  const handleMouseOver = () => {
    setImgSrc(hoverSrc);
  };

  const handleMouseLeave = () => {
    setImgSrc(defaultSrc);
  };

  return (
    <img
      alt={alt || 'hover-image'}
      src={imgSrc}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onError={() => setImgSrc(defaultSrc)}
    />
  );
}
