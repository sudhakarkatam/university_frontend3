import React from 'react';
import ImageSlider from './ImageSlider';

const sliderImages = [
  '/hero-1.jpeg',
  '/hero-2.jpeg',
  '/hero-3.jpeg',
  '/hero-4.jpeg',
];

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section relative"
      style={{
        backgroundImage: "url('/background_img.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px',
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="relative z-10 flex items-center justify-center min-h-[400px] py-8">
        <ImageSlider images={sliderImages} interval={5000} />
      </div>
    </section>
  );
};

export default Hero; 