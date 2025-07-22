import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{padding:0}}>
      <img
        src="/Mahindra-University.webp"
        alt="Mahindra University"
        style={{ width: '100%', height: 'auto', cursor: 'pointer', display: 'block' }}
        onClick={() => window.location.href = '/admissions'}
      />
    </section>
  );
};

export default Hero; 