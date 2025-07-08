import React from 'react';
import { Calendar, FileText, Users, CheckCircle } from 'lucide-react';

const Admissions = () => {
  const admissionSteps = [
    // ... existing code ...
  ];

  const requirements = [
    // ... existing code ...
  ];

  return (
    <section id="admissions" className="admissions-section">
      <div className="admissions-container">
        <div className="admissions-header">
          <h2 className="admissions-title">
            Admissions
          </h2>
          <p className="admissions-desc">
            Begin your journey toward academic excellence. We're here to guide you through 
            every step of the admission process.
          </p>
        </div>

        <div className="admissions-main">
          <div>
            <h3 className="admissions-main-title">
              Your Path to Excellence Starts Here
            </h3>
            <p className="admissions-main-desc">
              We believe in holistic admissions that look beyond grades to understand who you are 
              as a person. Our admission process is designed to identify students who will thrive 
              in our academic community and contribute to our diverse campus culture.
            </p>
            <div className="admissions-main-highlights">
              <div className="admissions-main-highlight">
                <CheckCircle className="admissions-main-highlight-icon" />
                <span className="admissions-main-highlight-text">Rolling admissions available</span>
              </div>
              <div className="admissions-main-highlight">
                <CheckCircle className="admissions-main-highlight-icon" />
                <span className="admissions-main-highlight-text">Need-based financial aid</span>
              </div>
              <div className="admissions-main-highlight">
                <CheckCircle className="admissions-main-highlight-icon" />
                <span className="admissions-main-highlight-text">Merit scholarships available</span>
              </div>
            </div>
          </div>
          <div className="admissions-img-wrap">
            <img
              src="https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Students on Campus"
              className="admissions-img"
            />
            <div className="admissions-img-overlay"></div>
          </div>
        </div>

        {/* Admission Process */}
        <div className="admissions-process">
          <h3 className="admissions-process-title">
            Simple Application Process
          </h3>
          <div className="admissions-process-list">
            {admissionSteps.map((step, index) => (
              <div key={index} className="admissions-process-item">
                <div className="admissions-process-icon">
                  <step.icon className="admissions-process-icon-img" />
                </div>
                <div className="admissions-process-step">{index + 1}</div>
                <h4 className="admissions-process-step-title">{step.title}</h4>
                <p className="admissions-process-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements and Important Dates */}
        <div className="admissions-bottom">
          <div className="admissions-req-box">
            <h3 className="admissions-req-title">Admission Requirements</h3>
            <ul className="admissions-req-list">
              {requirements.map((requirement, index) => (
                <li key={index} className="admissions-req-item">
                  <CheckCircle className="admissions-req-icon" />
                  <span className="admissions-req-text">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="admissions-dates-box">
            <h3 className="admissions-dates-title">Important Dates</h3>
            <div className="admissions-dates-list">
              <div className="admissions-dates-item">
                <span className="admissions-dates-label">Early Decision Deadline</span>
                <span className="admissions-dates-value">November 15</span>
              </div>
              <div className="admissions-dates-item">
                <span className="admissions-dates-label">Regular Decision Deadline</span>
                <span className="admissions-dates-value">January 15</span>
              </div>
              <div className="admissions-dates-item">
                <span className="admissions-dates-label">Financial Aid Deadline</span>
                <span className="admissions-dates-value">February 1</span>
              </div>
              <div className="admissions-dates-item">
                <span className="admissions-dates-label">Enrollment Deadline</span>
                <span className="admissions-dates-value">May 1</span>
              </div>
            </div>
            <button className="admissions-dates-btn">
              Start Your Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions; 