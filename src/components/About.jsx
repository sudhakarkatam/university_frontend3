import React from 'react';
import '../css/campuslife.css';

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-logo-wrap">
          <img src="/mru_logo.png" alt="Malla Reddy University Logo" className="about-logo" />
        </div>
        <div className="about-content">
          <h2 className="about-title">ABOUT MRU</h2>
          <p className="about-desc">
            <strong>Malla Reddy University, Hyderabad</strong> (As per Telangana State Private Universities Act No.13 of 2020, Higher Education (UE) Department dt. 15.6.2020) was established in the year 2020 through the State Legislature Council of Telangana, Govt. of Telangana. It is offering industry-focused specialised Undergraduate and Postgraduate courses with the aim of providing Quality Higher Education on par with International standards. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis.
          </p>
          <Link to="/about-us" className="about-readmore-btn">More Details</Link>
        </div>
      </div>
    </section>
  );
};

export default About; 