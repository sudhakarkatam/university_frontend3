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

        {/* Virtual Campus Tour */}
        <div style={{ margin: '2.5rem 0', background: '#fff', borderRadius: '1.25rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '2rem 1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1d4ed8', marginBottom: 16 }}>Virtual Campus Tour</h3>
          <iframe
            src="https://www.mahindrauniversity.edu.in/sites/virtual-tour-of-mu-campus.html"
            title="Mahindra University Virtual Tour"
            width="100%"
            height="480"
            style={{ border: 'none', borderRadius: '1rem' }}
            allowFullScreen
          ></iframe>
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <a
              href="https://www.mahindrauniversity.edu.in/sites/virtual-tour-of-mu-campus.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#d4af37', color: '#fff', border: 'none', borderRadius: 8, padding: '0.75rem 2rem', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block', marginTop: 8 }}
            >
              Open Fullscreen Virtual Tour
            </a>
          </div>
        </div>

        {/* Visit Campus */}
        <div style={{ margin: '2.5rem 0', background: '#fff', borderRadius: '1.25rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '2rem 1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1d4ed8', marginBottom: 16 }}>Visit Our Campus</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.282393698736!2d78.3654236!3d17.5688021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f06a86f0315%3A0x2f80d6e75d32cc14!2sMahindra%20University!5e0!3m2!1sen!2sin!4v1689940000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 'none', borderRadius: '1rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mahindra University Location"
          ></iframe>
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <a
              href="https://www.google.com/maps/place/Mahindra+University/@17.5688021,78.3654236,13z/data=!4m6!3m5!1s0x3bcb8f06a86f0315:0x2f80d6e75d32cc14!8m2!3d17.5685526!4d78.4357555!16s%2Fg%2F11llx155lq?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#1d4ed8', color: '#fff', border: 'none', borderRadius: 8, padding: '0.75rem 2rem', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block', marginTop: 8 }}
            >
              Open in Google Maps
            </a>
          </div>
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
            <div style={{ margin: '2rem 0', fontSize: '1.15rem', color: '#374151', maxWidth: 500 }}>
              Mahindra University offers a vibrant and inclusive campus experience, where students from diverse backgrounds come together to learn, innovate, and grow. From world-class facilities and active student clubs to cultural festivals and sports, our campus is designed to inspire excellence and lifelong friendships.
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