import React from 'react';
import { Users, Award, BookOpen, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '25,000+', label: 'Students' },
    { icon: Award, value: '500+', label: 'Faculty Members' },
    { icon: BookOpen, value: '200+', label: 'Programs' },
    { icon: Globe, value: '80+', label: 'Countries' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            About Mahindra University
          </h2>
          <p className="about-desc">
            Mahindra University is at the forefront of education, research, and innovation, shaping leaders who make a difference in the world.
          </p>
        </div>

        <div className="about-main">
          <div>
            <h3 className="about-main-title">
              Leading Innovation in Higher Education
            </h3>
            <p className="about-main-desc">
              Our university stands as a beacon of academic excellence, fostering critical thinking, 
              creativity, and leadership. We provide a transformative educational experience that 
              prepares students for the challenges of tomorrow.
            </p>
            <p className="about-main-desc">
              With state-of-the-art facilities, world-renowned faculty, and a diverse community of 
              learners from around the globe, we create an environment where innovation thrives and 
              knowledge flourishes.
            </p>
            <button className="about-btn">
              Learn More About Our History
            </button>
          </div>
          <div className="about-img-wrap">
            <img
              src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="University Campus"
              className="about-img"
            />
            <div className="about-img-overlay"></div>
          </div>
        </div>

        {/* Statistics */}
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="about-stat-item">
              <div className="about-stat-icon">
                <stat.icon className="about-stat-icon-img" />
              </div>
              <div className="about-stat-value">{stat.value}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 