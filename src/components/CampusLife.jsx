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
        <div className="campus-section-block">
          <h3 className="campus-section-title">Virtual Campus Tour</h3>
          <iframe
            src="http://zeal360.co.in/360/mallareddyuniversity2/mallareddyuniversity.html"
            title="mallarreddy university Virtual Tour"
            width="100%"
            height="480"
            className="campus-tour-iframe"
            allowFullScreen
          ></iframe>
          <div className="campus-tour-btn-wrap">
            <a
              href="http://zeal360.co.in/360/mallareddyuniversity2/mallareddyuniversity.html"
              target="_blank"
              rel="noopener noreferrer"
              className="campus-gallery-btn"
            >
              Open Fullscreen Virtual Tour
            </a>
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="campus-section-block">
          <h3 className="campus-section-title">STUDENT TESTIMONIALS</h3>
          <div className="campus-videos-row">
            <iframe width="360" height="215" src="https://www.youtube.com/embed/RIGC_gfX4Uo?si=jv70ZRnTQtNSgMrV" title="Student Testimonial 1" frameBorder="0" allowFullScreen></iframe>
            <iframe width="360" height="215" src="https://www.youtube.com/embed/R4-27suScdY?si=e-pq12yQt2jBw2sf" title="Student Testimonial 2" frameBorder="0" allowFullScreen></iframe>
            <iframe width="360" height="215" src="https://www.youtube.com/embed/0hB1NsHsWso?si=kVM3xGlPj69FRiN2" title="Student Testimonial 3" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

        {/* Video Gallery */}
        <div className="campus-section-block">
          <h3 className="campus-section-title">VIDEO GALLERY</h3>
          <div className="campus-videos-row">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jVKlDt4bSsk?si=ZIBVd45ahytbaUcB" title="Video Gallery" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <button className="campus-gallery-btn">Video Gallery</button>
          </div>
        </div>

        {/* Media */}
        <div className="campus-section-block">
          <h3 className="campus-section-title">MEDIA</h3>
          <div className="campus-videos-row">
            <iframe width="360" height="215" src="https://www.youtube.com/embed/yqNVU2uLdHc?si=ZaGBAXxslCs0tpHV" title="Media 1" frameBorder="0" allowFullScreen></iframe>
            <iframe width="360" height="215" src="https://www.youtube.com/embed/7FbeLGB6lr0?si=Mp2B_kK2e0RmFMiv" title="Media 2" frameBorder="0" allowFullScreen></iframe>
            <iframe width="360" height="215" src="https://www.youtube.com/embed/qqZKZWnWlv0?si=XZ4hT9mtz-xl4ZIs" title="Media 3" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <button className="campus-gallery-btn">Load More Media</button>
          </div>
        </div>

        {/* Events at MRUH */}
        <div className="campus-section-block">
          <h3 className="campus-section-title">EVENTS AT MRUH</h3>
          <div className="campus-videos-row">
            <iframe width="360" height="215" src="https://www.youtube.com/embed/IavWWjlUG5k?si=KKH_L5DvY1LcaLoK" title="Event 1" frameBorder="0" allowFullScreen></iframe>
            <iframe width="360" height="215" src="https://www.youtube.com/embed/lRRXz6LAxjo?si=honAcdlseSbvWkNo" title="Event 2" frameBorder="0" allowFullScreen></iframe>
            <iframe width="360" height="215" src="https://www.youtube.com/embed/IttuDOPIojA?si=BQYrjsCws7xoLGpS" title="Event 3" frameBorder="0" allowFullScreen></iframe>
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
              Mallareddy University offers a vibrant and inclusive campus experience, where students from diverse backgrounds come together to learn, innovate, and grow. From world-class facilities and active student clubs to cultural festivals and sports, our campus is designed to inspire excellence and lifelong friendships.
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