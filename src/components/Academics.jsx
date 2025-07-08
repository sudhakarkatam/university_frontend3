import React from 'react';
import { GraduationCap, Microscope, Calculator, Palette, Gavel, Heart } from 'lucide-react';

const Academics = () => {
  const schools = [
    // ... existing code ...
  ];

  return (
    <section id="academics" className="academics-section">
      <div className="academics-container">
        <div className="academics-header">
          <h2 className="academics-title">
            Academic Excellence
          </h2>
          <p className="academics-desc">
            Discover our comprehensive range of academic programs designed to prepare you for success 
            in your chosen field and beyond.
          </p>
        </div>

        <div className="academics-list">
          {schools.map((school, index) => (
            <div key={index} className="academics-card">
              <div className="academics-card-img-wrap">
                <img
                  src={school.image}
                  alt={school.name}
                  className="academics-card-img"
                />
                <div className="academics-card-img-overlay"></div>
                <div className="academics-card-icon-wrap">
                  <div className="academics-card-icon">
                    <school.icon className="academics-card-icon-img" />
                  </div>
                </div>
              </div>
              <div className="academics-card-content">
                <h3 className="academics-card-title">{school.name}</h3>
                <p className="academics-card-desc">{school.description}</p>
                <div className="academics-card-programs">
                  <h4 className="academics-card-programs-title">Popular Programs:</h4>
                  <div className="academics-card-programs-list">
                    {school.programs.map((program, idx) => (
                      <span key={idx} className="academics-card-program">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="academics-card-btn">
                  Explore Programs →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="academics-btn-wrap">
          <button className="academics-btn">
            View All Academic Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Academics; 