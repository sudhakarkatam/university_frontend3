import React from 'react';
import { Microscope, Lightbulb, Globe, TrendingUp } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    // ... existing code ...
  ];

  const achievements = [
    // ... existing code ...
  ];

  return (
    <section id="research" className="research-section">
      <div className="research-container">
        <div className="research-header">
          <h2 className="research-title">
            Research & Innovation
          </h2>
          <p className="research-desc">
            Pushing the boundaries of knowledge through groundbreaking research that addresses 
            the world's most pressing challenges and creates solutions for a better tomorrow.
          </p>
        </div>

        {/* Research Stats */}
        <div className="research-stats">
          {achievements.map((achievement, index) => (
            <div key={index} className="research-stat-item">
              <div className="research-stat-value">{achievement.number}</div>
              <div className="research-stat-label">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Research Areas */}
        <div className="research-areas-list">
          {researchAreas.map((area, index) => (
            <div key={index} className="research-area-card">
              <div className="research-area-img-wrap">
                <img
                  src={area.image}
                  alt={area.title}
                  className="research-area-img"
                />
                <div className="research-area-img-overlay"></div>
                <div className="research-area-icon-wrap">
                  <div className="research-area-icon">
                    <area.icon className="research-area-icon-img" />
                  </div>
                </div>
                <div className="research-area-funding">
                  {area.funding} Funding
                </div>
              </div>
              <div className="research-area-content">
                <h3 className="research-area-title">{area.title}</h3>
                <p className="research-area-desc">{area.description}</p>
                <div className="research-area-projects">
                  <h4 className="research-area-projects-title">Current Projects:</h4>
                  <ul className="research-area-projects-list">
                    {area.projects.map((project, idx) => (
                      <li key={idx} className="research-area-project-item">
                        <div className="research-area-project-dot"></div>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="research-area-btn">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="research-cta">
          <h3 className="research-cta-title">Join Our Research Community</h3>
          <p className="research-cta-desc">
            Whether you're a prospective graduate student, researcher, or industry partner, 
            there are many ways to get involved in our cutting-edge research initiatives.
          </p>
          <div className="research-cta-btns">
            <button className="research-cta-btn-main">
              Graduate Programs
            </button>
            <button className="research-cta-btn-secondary">
              Industry Partnerships
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research; 