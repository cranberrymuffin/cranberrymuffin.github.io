import React, { useState, useRef, useEffect } from 'react';

const Carousel = ({ children, scrollAmount = 300 + 16 }) => {
  const carouselRef = useRef(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  const checkScrollable = () => {
    if (carouselRef.current) {
      const hasHorizontalScroll =
        carouselRef.current.scrollWidth > carouselRef.current.clientWidth;
      setShowScrollButtons(hasHorizontalScroll);
    }
  };

  useEffect(() => {
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, [children]); // Recheck when children change

  const scrollLeft = () => {
    if (carouselRef.current) {
      const newScrollLeft = Math.max(
        carouselRef.current.scrollLeft - scrollAmount,
        0,
      );
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const maxScrollLeft =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const newScrollLeft = Math.min(
        carouselRef.current.scrollLeft + scrollAmount,
        maxScrollLeft,
      );
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="carousel-container">
      {showScrollButtons && (
        <button className="carousel-btn prev" onClick={scrollLeft}>
          &lt;
        </button>
      )}
      <div className="carousel" ref={carouselRef}>
        {children}
      </div>
      {showScrollButtons && (
        <button className="carousel-btn next" onClick={scrollRight}>
          &gt;
        </button>
      )}
    </div>
  );
};

export default Carousel;
