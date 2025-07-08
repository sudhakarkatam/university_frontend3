import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin as LinkedIn, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const academicLinks = [
    'Undergraduate Programs',
    'Graduate Programs',
    'Online Learning',
    'Continuing Education',
    'Academic Calendar',
    'Course Catalog'
  ];

  const studentLinks = [
    'Student Portal',
    'Library Services',
    'Career Services',
    'Campus Housing',
    'Student Organizations',
    'Health Services'
  ];

  const aboutLinks = [
    'University History',
    'Leadership',
    'Mission & Vision',
    'Accreditation',
    'Campus Map',
    'News & Events'
  ];

  const quickLinks = [
    'Apply Now',
    'Visit Campus',
    'Financial Aid',
    'International Students',
    'Alumni',
    'Employment'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: LinkedIn, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-grid">
          {/* University Info */}
          <div className="footer-info">
            <div className="footer-logo-wrap">
              <GraduationCap className="footer-logo-icon" />
              <span className="footer-logo-text">Excellence University</span>
            </div>
            <p className="footer-desc">
              Empowering minds, inspiring innovation, and shaping the leaders of tomorrow. 
              Join our community of scholars and discover your potential.
            </p>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>123 University Avenue, Excellence City, EC 12345</span>
              </div>
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span>info@excellenceuniversity.edu</span>
              </div>
            </div>
          </div>

          {/* Academics */}
          <div className="footer-col">
            <h3 className="footer-col-title">Academics</h3>
            <ul className="footer-col-list">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Life */}
          <div className="footer-col">
            <h3 className="footer-col-title">Student Life</h3>
            <ul className="footer-col-list">
              {studentLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="footer-col">
            <h3 className="footer-col-title">About</h3>
            <ul className="footer-col-list">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-col-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <div className="footer-newsletter-content">
            <h3 className="footer-newsletter-title">Stay Connected</h3>
            <p className="footer-newsletter-desc">
              Subscribe to our newsletter for the latest news, events, and updates from Excellence University.
            </p>
          </div>
          <div className="footer-newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="footer-newsletter-input"
            />
            <button className="footer-newsletter-btn">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <div className="footer-social-list">
            <h3 className="footer-social-title">Follow Us</h3>
            <div className="footer-social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  <social.icon className="footer-social-icon" />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-social-info">
            <p className="footer-social-accredit">Accredited by the Higher Learning Commission</p>
            <div className="footer-social-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Use</a>
              <a href="#" className="footer-link">Accessibility</a>
              <a href="#" className="footer-link">Title IX</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div>
            © 2024 Excellence University. All rights reserved.
          </div>
          <div className="footer-bottom-equal">
            An equal opportunity/affirmative action institution.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 