import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin as LinkedIn, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="mru-footer">
      <div className="mru-footer-main">
        <div className="mru-footer-grid">
          {/* University Info */}
          <div className="mru-footer-info">
            <img src="/mru_logo.png" alt="Malla Reddy University Logo" className="mru-footer-logo" />
            <div className="mru-footer-address">
              <div><b>MALLA REDDY UNIVERSITY</b></div>
              <div>(As per Telangana State Private Universities<br/>Act No.13 of 2020 and G.O.Ms.No.14, Higher<br/>Education (UE) Department)</div>
              <div>Maisammaguda, Dulapally,<br/>Hyderabad, Telangana 500100</div>
              <div>Phone: 94971-94971, 91778-78365</div>
              <div>info@mallareddyuniversity.ac.in<br/>admissions@mallareddyuniversity.ac.in</div>
            </div>
          </div>
          {/* About */}
          <div className="mru-footer-col">
            <div className="mru-footer-col-title">ABOUT</div>
            <ul className="mru-footer-col-list">
              <li>Home</li>
              <li>University</li>
              <li>Management</li>
              <li>Advisory Body</li>
              <li>MRGI</li>
              <li>Statutory Authorities</li>
              <li>Statutory Bodies</li>
              <li>Evaluations</li>
              <li>Placements</li>
            </ul>
          </div>
          {/* Campus Life */}
          <div className="mru-footer-col">
            <div className="mru-footer-col-title">CAMPUS LIFE</div>
            <ul className="mru-footer-col-list">
              <li>Hostel</li>
              <li>Knowledge Resource Centre</li>
              <li>Cafeteria</li>
              <li>Laboratories</li>
              <li>Sports</li>
              <li>Transport</li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="mru-footer-col">
            <div className="mru-footer-col-title">QUICK LINKS</div>
            <ul className="mru-footer-col-list">
              <li>UGC Application</li>
              <li>Conferences</li>
              <li>MOU's and Collaborations</li>
              <li>Contact Us</li>
              <li>Student Corner</li>
              <li>Quality Assurance</li>
            </ul>
          </div>
          {/* Academics */}
          <div className="mru-footer-col">
            <div className="mru-footer-col-title">ACADEMICS</div>
            <ul className="mru-footer-col-list">
              <li>School of Engineering</li>
              <li>School of Agriculture</li>
              <li>School of Allied Healthcare Sciences</li>
              <li>School of Management / Commerce</li>
              <li>School of Sciences</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mru-footer-bottom">
        <div className="mru-footer-bottom-content">
          <div>© Copyright 2025 by Malla Reddy University. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 