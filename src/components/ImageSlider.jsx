import React, { useState, useEffect, useRef } from 'react';
import '../css/ImageSlider.css';

const sliderImages = [
  '/hero-1.jpeg',
  '/hero-2.jpeg',
  '/hero-3.jpeg',
  '/hero-4.jpeg',
];
 
const ImageSlider = ({ images = [], interval = 4000 }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);
  const numImages = images.length;

  // Autoplay logic
  useEffect(() => {
    if (paused || numImages <= 1) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % numImages);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [current, paused, interval, numImages]);

  // Navigation handlers
  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + numImages) % numImages);
  const next = () => setCurrent((prev) => (prev + 1) % numImages);

  // Pause on hover handlers
  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  // Placeholder if no images
  if (!Array.isArray(images) || numImages === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg">
        <span className="text-gray-500">No images to display</span>
      </div>
    );
  }

  return (
    <div
      className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg image-slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Images */}
      <div className="w-full h-64 sm:h-80 md:h-96 flex transition-all duration-700 ease-in-out">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            draggable={false}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className="slider-arrow slider-arrow-left"
        onClick={prev}
        aria-label="Previous slide"
      >
        &lt;
      </button>
      {/* Right Arrow */}
      <button
        className="slider-arrow slider-arrow-right"
        onClick={next}
        aria-label="Next slide"
      >
        &gt;
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border border-white transition-all duration-200 ${
              idx === current ? 'bg-white' : 'bg-gray-400/60'
            }`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 