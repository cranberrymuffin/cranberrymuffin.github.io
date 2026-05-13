import React, { useRef, useState, useEffect } from 'react';

const Carousel = ({ children }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      observer.disconnect();
    };
  }, [children]);

  const scroll = direction => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 320, behavior: 'smooth' });
  };

  return (
    <div className="carousel-container">
      {canScrollLeft && (
        <button className="carousel-btn prev" onClick={() => scroll(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="16" height="16">
            <path d="M11 1 6.39 8 11 15H8.61L4 8l4.61-7z"/>
          </svg>
        </button>
      )}
      <div className="carousel" ref={carouselRef}>
        {children}
      </div>
      {canScrollRight && (
        <button className="carousel-btn next" onClick={() => scroll(1)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="16" height="16">
            <path d="m5 15 4.61-7L5 1h2.39L12 8l-4.61 7z"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Carousel;
