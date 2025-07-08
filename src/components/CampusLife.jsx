import React from 'react';
import { Home, Users, Trophy, Music, Camera, MapPin } from 'lucide-react';

const CampusLife = () => {
  const facilities = [
    // ... existing code ...
  ];

  const campusHighlights = [
    // ... existing code ...
  ];

  return (
    <section id="campus-life" className="campus-section">
      <div className="campus-container">
        <div className="campus-header">
          <h2 className="campus-title">
            Campus Life
          </h2>
          <p className="campus-desc">
            Experience a vibrant campus community where learning extends beyond the classroom. 
            Discover opportunities to grow, connect, and create lasting memories.
          </p>
        </div>

        {/* Hero Image */}
        <div className="campus-hero-img-wrap">
          <img
            src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
            alt="Campus Life"
            className="campus-hero-img"
          />
          <div className="campus-hero-img-overlay">
            <div className="campus-hero-content">
              <h3 className="campus-hero-title">Your Home Away From Home</h3>
              <p className="campus-hero-desc">
                Join a diverse community of students from around the world in an environment 
                that nurtures personal growth and academic excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Campus Facilities */}
        <div className="campus-facilities-list">
          {facilities.map((facility, index) => (
            <div key={index} className="campus-facility-card">
              <div className="campus-facility-img-wrap">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="campus-facility-img"
                />
                <div className="campus-facility-img-overlay"></div>
                <div className="campus-facility-icon-wrap">
                  <div className="campus-facility-icon">
                    <facility.icon className="campus-facility-icon-img" />
                  </div>
                </div>
              </div>
              <h3 className="campus-facility-title">{facility.title}</h3>
              <p className="campus-facility-desc">{facility.description}</p>
            </div>
          ))}
        </div>

        {/* Campus Highlights */}
        <div className="campus-highlights-wrap">
          <div>
            <h3 className="campus-highlights-title">
              Why Students Love Our Campus
            </h3>
            <div className="campus-highlights-list">
              {campusHighlights.map((highlight, index) => (
                <div key={index} className="campus-highlight-item">
                  <div className="campus-highlight-dot"></div>
                  <span className="campus-highlight-text">{highlight}</span>
                </div>
              ))}
            </div>
            <div className="campus-highlights-btns">
              <button className="campus-tour-btn">
                <Camera className="campus-tour-icon" />
                Virtual Campus Tour
              </button>
              <button className="campus-visit-btn">
                <MapPin className="campus-visit-icon" />
                Visit Campus
              </button>
            </div>
          </div>
          <div className="campus-highlights-img-wrap">
            <img
              src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
              alt="Students on campus"
              className="campus-highlights-img"
            />
            <div className="campus-highlights-img-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife; 