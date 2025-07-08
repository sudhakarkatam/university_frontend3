import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    // ... existing code ...
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Faculty Members' },
    { icon: Award, value: '95%', label: 'With PhDs' },
    { icon: BookOpen, value: '15:1', label: 'Student-Faculty Ratio' },
  ];

  return (
    <section id="faculty" className="faculty-section">
      <div className="faculty-container">
        <div className="faculty-header">
          <h2 className="faculty-title">
            World-Class Faculty
          </h2>
          <p className="faculty-desc">
            Learn from distinguished scholars, researchers, and industry leaders who are at the 
            forefront of their fields and dedicated to your success.
          </p>
        </div>

        {/* Faculty Stats */}
        <div className="faculty-stats">
          {stats.map((stat, index) => (
            <div key={index} className="faculty-stat-item">
              <div className="faculty-stat-icon">
                <stat.icon className="faculty-stat-icon-img" />
              </div>
              <div className="faculty-stat-value">{stat.value}</div>
              <div className="faculty-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Faculty */}
        <div className="faculty-featured">
          <h3 className="faculty-featured-title">
            Meet Our Distinguished Faculty
          </h3>
          <div className="faculty-featured-list">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="faculty-card">
                <div className="faculty-card-img-wrap">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="faculty-card-img"
                  />
                </div>
                <div className="faculty-card-content">
                  <h4 className="faculty-card-name">{faculty.name}</h4>
                  <p className="faculty-card-title">{faculty.title}</p>
                  <p className="faculty-card-dept">{faculty.department}</p>
                  <p className="faculty-card-spec">
                    <span className="faculty-card-spec-label">Specialization:</span> {faculty.specialization}
                  </p>
                  <div>
                    <p className="faculty-card-achieve-label">Key Achievements:</p>
                    <ul className="faculty-card-achieve-list">
                      {faculty.achievements.map((achievement, idx) => (
                        <li key={idx} className="faculty-card-achieve-item">
                          <div className="faculty-card-achieve-dot"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="faculty-btn-wrap">
          <button className="faculty-btn">
            View All Faculty
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faculty; 