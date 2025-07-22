import React from 'react';
import { Award, BookOpen, Users, Globe, Star, Briefcase } from 'lucide-react';

const stats = [
  { icon: Users, value: '200+', label: 'Faculty Members' },
  { icon: Award, value: '90%', label: 'With PhDs' },
  { icon: BookOpen, value: '15:1', label: 'Student-Faculty Ratio' },
  { icon: Globe, value: '30+', label: 'International Collaborations' },
];

const featuredFaculty = [
  {
    name: 'Dr. S. Anitha',
    title: 'Dean, School of Engineering & Technology',
    department: 'Artificial Intelligence & Machine Learning',
    specialization: 'AI, Machine Learning, Data Science',
    image: 'https://www.mahindrauniversity.edu.in/wp-content/uploads/2022/07/Dr.-S.-Anitha.jpg',
    achievements: [
      'Published 50+ research papers',
      'Recipient of National Research Award',
      'Mentor for Smart India Hackathon winners',
    ],
  },
  {
    name: 'Dr. R. Sridhar',
    title: 'Professor, Computer Science & Engineering',
    department: 'Computer Science & Engineering',
    specialization: 'Cybersecurity, Data Science',
    image: 'https://www.mahindrauniversity.edu.in/wp-content/uploads/2022/07/Dr.-R.-Sridhar.jpg',
    achievements: [
      'Authored 3 books on Cybersecurity',
      'IEEE Senior Member',
      'Consultant for Fortune 500 companies',
    ],
  },
  {
    name: 'Dr. P. Latha',
    title: 'Professor, Electronics & Communication',
    department: 'Electronics & Communication Engineering',
    specialization: 'VLSI, Embedded Systems',
    image: 'https://www.mahindrauniversity.edu.in/wp-content/uploads/2022/07/Dr.-P.-Latha.jpg',
    achievements: [
      'Patent holder in VLSI design',
      'Invited speaker at international conferences',
      'Guided 10+ PhD students',
    ],
  },
];

const Faculty = () => {
  return (
    <section id="faculty" className="faculty-section" style={{ background: 'linear-gradient(120deg, #f9fafb 0%, #e0e7ff 100%)' }}>
      <div className="faculty-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Hero Banner */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="faculty-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1d4ed8' }}>
            Meet Our World-Class Faculty
          </h2>
          <p className="faculty-desc" style={{ fontSize: '1.25rem', color: '#374151', maxWidth: 700, margin: '1rem auto' }}>
            Our faculty comprises renowned scholars, researchers, and industry leaders from top institutions in India and abroad. With a strong focus on research and innovation, our professors mentor students to achieve academic and professional excellence.
          </p>
        </div>

        {/* Faculty Stats */}
        <div className="faculty-stats" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {stats.map((stat, index) => (
            <div key={index} className="faculty-stat-item" style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '1.5rem 2rem', minWidth: 180, textAlign: 'center' }}>
              <div className="faculty-stat-icon" style={{ marginBottom: 8 }}>
                <stat.icon className="faculty-stat-icon-img" style={{ width: 32, height: 32, color: '#d4af37' }} />
              </div>
              <div className="faculty-stat-value" style={{ fontWeight: 700, fontSize: '1.5rem', color: '#1d4ed8' }}>{stat.value}</div>
              <div className="faculty-stat-label" style={{ color: '#374151', fontSize: '1rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Faculty */}
        <div className="faculty-featured" style={{ marginBottom: '2.5rem' }}>
          <h3 className="faculty-featured-title" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1d4ed8', marginBottom: 24 }}>
            Featured Faculty
          </h3>
          <div className="faculty-featured-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {featuredFaculty.map((faculty, index) => (
              <div key={index} className="faculty-card" style={{ background: '#fff', borderRadius: '1.25rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 420 }}>
                <div className="faculty-card-img-wrap" style={{ height: 180, background: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="faculty-card-img"
                    style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: '50%', border: '4px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                  />
                </div>
                <div className="faculty-card-content" style={{ flex: 1, padding: '1.5rem' }}>
                  <h4 className="faculty-card-name" style={{ fontWeight: 700, fontSize: '1.15rem', color: '#22223b', marginBottom: 4 }}>{faculty.name}</h4>
                  <p className="faculty-card-title" style={{ color: '#1d4ed8', fontWeight: 600, marginBottom: 2 }}>{faculty.title}</p>
                  <p className="faculty-card-dept" style={{ color: '#374151', fontSize: '0.98rem', marginBottom: 2 }}>{faculty.department}</p>
                  <p className="faculty-card-spec" style={{ color: '#4b5563', fontSize: '0.98rem', marginBottom: 8 }}>
                    <span className="faculty-card-spec-label" style={{ fontWeight: 600 }}>Specialization:</span> {faculty.specialization}
                  </p>
                  <div>
                    <p className="faculty-card-achieve-label" style={{ fontWeight: 600, marginBottom: 4 }}>Key Achievements:</p>
                    <ul className="faculty-card-achieve-list" style={{ paddingLeft: 18, margin: 0 }}>
                      {faculty.achievements.map((achievement, idx) => (
                        <li key={idx} className="faculty-card-achieve-item" style={{ color: '#22223b', fontSize: '0.97rem', marginBottom: 2, listStyle: 'disc' }}>
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

        {/* Research & Innovation */}
        <div style={{ background: '#fff', borderRadius: '1.25rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '2rem 1.5rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1d4ed8', marginBottom: 16 }}>Research & Innovation</h3>
          <div style={{ color: '#374151', fontSize: '1.08rem' }}>
            Our faculty are at the forefront of research and innovation, leading major projects in AI, Robotics, Sustainable Energy, and more. Mahindra University is home to state-of-the-art labs and research centers, fostering a culture of discovery and entrepreneurship.
          </div>
        </div>

        <div className="faculty-btn-wrap" style={{ textAlign: 'center' }}>
          <button className="faculty-btn" style={{ background: '#d4af37', color: '#fff', border: 'none', borderRadius: 8, padding: '0.85rem 2.5rem', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer' }}>
            View All Faculty
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faculty; 