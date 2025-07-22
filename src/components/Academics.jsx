import React from 'react';
import { GraduationCap, Microscope, Calculator, Palette, Gavel, Heart, Globe, Users, BookOpen } from 'lucide-react';

const schools = [
  {
    name: 'School of Engineering & Technology',
    icon: GraduationCap,
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&w=600&h=300&fit=crop',
    description: 'Cutting-edge programs in Computer Science, AI & ML, Electronics, Mechanical, and more. Focus on research, innovation, and industry collaboration.',
    programs: ['B.Tech', 'M.Tech', 'PhD'],
  },
  {
    name: 'School of Management',
    icon: Calculator,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=600&h=300&fit=crop',
    description: 'Developing future business leaders with programs in Business Administration, Finance, Marketing, and Entrepreneurship.',
    programs: ['BBA', 'MBA', 'PhD'],
  },
  {
    name: 'School of Law',
    icon: Gavel,
    image: 'https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&w=600&h=300&fit=crop',
    description: 'Comprehensive legal education with a focus on global perspectives, research, and practical training.',
    programs: ['BA LLB', 'LLM'],
  },
  {
    name: 'School of Sciences',
    icon: Microscope,
    image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&w=600&h=300&fit=crop',
    description: 'Programs in Physics, Chemistry, Mathematics, and interdisciplinary sciences. Emphasis on research and innovation.',
    programs: ['BSc', 'MSc', 'PhD'],
  },
];

const highlights = [
  {
    icon: Globe,
    title: 'Global Curriculum',
    desc: 'International collaborations and exchange programs with top universities.'
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    desc: 'Learn from renowned professors, researchers, and industry leaders.'
  },
  {
    icon: BookOpen,
    title: 'Research Driven',
    desc: 'State-of-the-art labs and research centers for hands-on learning.'
  },
  {
    icon: Heart,
    title: 'Holistic Development',
    desc: 'Focus on leadership, ethics, and personal growth.'
  },
];

const Academics = () => {
  return (
    <section id="academics" className="academics-section" style={{ background: 'linear-gradient(120deg, #f9fafb 0%, #e0e7ff 100%)' }}>
      <div className="academics-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Hero Banner */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="academics-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1d4ed8' }}>
            Empowering Future Innovators
          </h2>
          <p className="academics-desc" style={{ fontSize: '1.25rem', color: '#374151', maxWidth: 700, margin: '1rem auto' }}>
            At Mahindra University, our academic programs are designed to foster critical thinking, creativity, and leadership. We offer a diverse range of undergraduate, postgraduate, and doctoral programs across Engineering, Management, Law, and Sciences.
          </p>
        </div>

        {/* Schools Grid */}
        <div className="academics-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {schools.map((school, index) => (
            <div key={index} className="academics-card" style={{ background: '#fff', borderRadius: '1.25rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 420 }}>
              <div className="academics-card-img-wrap" style={{ position: 'relative', height: 140, background: '#e0e7ff' }}>
                <img
                  src={school.image}
                  alt={school.name}
                  className="academics-card-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="academics-card-icon-wrap" style={{ position: 'absolute', top: 16, left: 16, background: '#fff', borderRadius: '50%', padding: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <school.icon className="academics-card-icon-img" style={{ width: 32, height: 32, color: '#1d4ed8' }} />
                </div>
              </div>
              <div className="academics-card-content" style={{ flex: 1, padding: '1.5rem' }}>
                <h3 className="academics-card-title" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#22223b', marginBottom: 8 }}>{school.name}</h3>
                <p className="academics-card-desc" style={{ color: '#4b5563', marginBottom: 12 }}>{school.description}</p>
                <div className="academics-card-programs">
                  <h4 className="academics-card-programs-title" style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 4 }}>Popular Programs:</h4>
                  <div className="academics-card-programs-list" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {school.programs.map((program, idx) => (
                      <span key={idx} className="academics-card-program" style={{ background: '#e0e7ff', color: '#1d4ed8', borderRadius: 8, padding: '4px 12px', fontSize: '0.98rem', fontWeight: 500 }}>{program}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Study at Mahindra University */}
        <div style={{ background: '#fff', borderRadius: '1.25rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '2rem 1.5rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1d4ed8', marginBottom: 16 }}>Why Study at Mahindra University?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {highlights.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <item.icon style={{ width: 32, height: 32, color: '#d4af37', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.08rem', color: '#22223b' }}>{item.title}</div>
                  <div style={{ color: '#4b5563', fontSize: '0.98rem' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="academics-btn-wrap" style={{ textAlign: 'center' }}>
          <button className="academics-btn" style={{ background: '#d4af37', color: '#fff', border: 'none', borderRadius: 8, padding: '0.85rem 2.5rem', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer' }}>
            View All Academic Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Academics; 