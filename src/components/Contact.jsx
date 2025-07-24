import React, { useRef } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Users } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['040 67135100', '+919618592999', '+919100938473']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@mallareddyuniversity.ac.in']
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Maisammaguda, Dulapally, Hyderabad, Telangana 500100']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM']
    }
  ];

  const departments = [
    {
      name: 'School of Law',
      phone: '+917306799802',
      email: '',
      hours: ''
    },
    {
      name: 'B.Tech Admissions (South & West)',
      phone: '+919618592999, +919100938473',
      email: '',
      hours: ''
    },
    {
      name: 'BBA/ B.A Admissions (South & West)',
      phone: '919553433789',
      email: '',
      hours: ''
    },
    {
      name: 'BBA/ B.A Admissions (North & East)',
      phone: '+917318551441, +919811346373',
      email: '',
      hours: ''
    },
    {
      name: 'Executive Education',
      phone: '9059538001',
      email: 'executive.education@mallareddyuniversity.ac.in',
      hours: ''
    },
    {
      name: 'MBA',
      phone: '9963427036 / 9963476964',
        email: 'mba.admissions@mallareddyuniversity.ac.in',
      hours: ''
    }
  ];

  // Add mailto handler
  const handleMailtoSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const firstName = form["firstName"].value;
    const lastName = form["lastName"].value;
    const email = form["email"].value;
    const phone = form["phone"].value;
    const subject = form["subject"].value;
    const message = form["message"].value;
    const mailto = `mailto:sudhakarkatam77@gmail.com?subject=${encodeURIComponent(subject + ' from ' + firstName + ' ' + lastName)}&body=${encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Contact Us
          </h2>
          <p className="contact-desc">
            We're here to help answer your questions and provide the information you need. 
            Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Location and Legal Note */}
        <div className="contact-location-note" style={{textAlign: 'center', marginBottom: '2rem'}}>
          <div style={{fontWeight: 'bold', fontSize: '1.1rem'}}>Location</div>
          <img src="/MRU-Logo2.png" alt="MRU Logo" style={{maxWidth: '120px', margin: '0.5rem auto'}} />
          <div style={{fontSize: '0.95rem', marginTop: '0.5rem'}}>
            (As per Telangana State Private Universities Act No.13 of 2020 and <br />
            G.O.Ms.No.14, Higher Education (UE) Department)
          </div>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrap">
            <div className="contact-form-box">
              <div className="contact-form-header">
                <MessageSquare className="contact-form-icon" />
                <h3 className="contact-form-title">Send us a Message</h3>
              </div>
              
              <form className="contact-form" ref={formRef} onSubmit={handleMailtoSubmit}>
                <div className="contact-form-row">
                  <div>
                    <label htmlFor="firstName" className="contact-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="contact-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="contact-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="contact-input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="contact-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact-input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="contact-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="contact-input"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="contact-label">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="contact-input"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="academics">Academic Programs</option>
                    <option value="financial-aid">Financial Aid</option>
                    <option value="campus-visit">Campus Visit</option>
                    <option value="international">International Students</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="contact-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="contact-input contact-textarea"
                    placeholder="Please provide details about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info-list">
            {/* General Contact Info */}
            <div className="contact-info-box">
              <h3 className="contact-info-title">Get in Touch</h3>
              <div className="contact-info-items">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-info-icon-wrap">
                      <info.icon className="contact-info-icon" />
                    </div>
                    <div>
                      <h4 className="contact-info-label">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="contact-info-detail">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Contacts */}
            <div className="contact-dept-box">
              <div className="contact-dept-header">
                <Users className="contact-dept-icon" />
                <h3 className="contact-dept-title">Department Contacts</h3>
              </div>
              <div className="contact-dept-list">
                {departments.map((dept, index) => (
                  <div key={index} className="contact-dept-item">
                    <h4 className="contact-dept-label">{dept.name}</h4>
                    <div className="contact-dept-details">
                      <div>{dept.phone}</div>
                      <div>{dept.email}</div>
                      <div>{dept.hours}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 