import React, { useEffect, useState, useRef } from "react";
import "./index.scss";

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel = ({ children }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width >= 1920) setItemsPerSlide(4);
    else if (width >= 1280) setItemsPerSlide(3);
    else if (width >= 760) setItemsPerSlide(2);
    else setItemsPerSlide(1);
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(children.length / itemsPerSlide);

  const goToSlide = (index: number) => {
    if (index < 0) {
      setCurrentSlide(totalSlides - 1); // go to last
    } else if (index >= totalSlides) {
      setCurrentSlide(0); // go to first
    } else {
      setCurrentSlide(index);
    }
  };

  const getSlideItems = () => {
    const slides: React.ReactNode[][] = [];
    for (let i = 0; i < children.length; i += itemsPerSlide) {
      slides.push(children.slice(i, i + itemsPerSlide));
    }
    return slides;
  };

  const slides = getSlideItems();

  return (
    <div className="carousel-container" ref={containerRef}>
      {totalSlides > 1 && (
        <button
          className={`carousel-button prev-button`}
          onClick={() => goToSlide(currentSlide - 1)}
          aria-label="Previous slide"
        >
          &lt;
        </button>
        //   <button className="carousel-arrow carousel-left" onClick={() => goToSlide(currentSlide - 1)}>
        //   &#10094;
        // </button>
      )}

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${(100 / slides.length) * currentSlide}%)`,
          }}
        >
          {slides.map((group, index) => (
            <div
              className="carousel-slide"
              key={index}
              style={{ width: `${100 / slides.length}%` }}
            >
              {group.map((item, idx) => (
                <div className="carousel-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        // <button className="carousel-arrow carousel-right" onClick={() => goToSlide(currentSlide + 1)}>
        //   &#10095;
        // </button>

        <button
          className={`carousel-button next-button`}
          onClick={() => goToSlide(currentSlide + 1)}
          aria-label="Next slide"
        >
          &gt;
        </button>
      )}

      {totalSlides > 1 && (
        <div className="carousel-dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`carousel-dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
