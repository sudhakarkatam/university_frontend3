import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background Image */}
      <div 
        className="hero-bg"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-center">
          <h1 className="hero-title">
            Shape Your
            <span className="hero-highlight">Future Today</span>
          </h1>
          <p className="hero-desc">
            Join a community of innovators, researchers, and leaders. Discover world-class education 
            that prepares you for tomorrow's challenges.
          </p>
          <div className="hero-actions">
          <a 
  href="http://localhost:5173/programs" 
  className="hero-btn-main" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Explore Programs
  <ArrowRight className="icon-arrow" />
</a>


            <button className="hero-btn-secondary">
              <Play className="icon-play" />
              Watch Virtual Tour
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 