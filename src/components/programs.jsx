import React from 'react';

const departments = [
  {
    id: 'aiml',
    name: 'Artificial Intelligence & Machine Learning',
    syllabus: 'https://mallareddyuniversity.ac.in/syllabus/aiml.pdf',
    dean: {
      name: 'Dr. S. Anitha',
      profile: 'https://mallareddyuniversity.ac.in/faculty/aiml/anitha'
    },
    achievements: [
      'MoUs with IBM, Cisco, Microsoft',
      'AI Bootcamps & Workshops',
      'Student research papers published in IEEE'
    ]
  },
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    syllabus: 'https://mallareddyuniversity.ac.in/syllabus/cse.pdf',
    dean: {
      name: 'Dr. R. Sridhar',
      profile: 'https://mallareddyuniversity.ac.in/faculty/cse/sridhar'
    },
    achievements: [
      'Hackathon winners at Smart India Hackathon',
      'Placed in Google, TCS, Infosys',
      'Annual TechFest with 2K+ participants'
    ]
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    syllabus: 'https://mallareddyuniversity.ac.in/syllabus/ece.pdf',
    dean: {
      name: 'Dr. P. Latha',
      profile: 'https://mallareddyuniversity.ac.in/faculty/ece/latha'
    },
    achievements: [
      'VLSI research lab collaboration',
      'Smart drone innovation project',
      'Top ranks in GATE exam'
    ]
  },
  {
    id: 'mech',
    name: 'Mechanical Engineering',
    syllabus: 'https://mallareddyuniversity.ac.in/syllabus/mech.pdf',
    dean: {
      name: 'Dr. A. Mahesh',
      profile: 'https://mallareddyuniversity.ac.in/faculty/mech/mahesh'
    },
    achievements: [
      'Formula SAE car design team',
      '3D printing workshops',
      'Industry training with BHEL'
    ]
  },
];

const cardStyle = {
  border: '1px solid #e0e0e0',
  borderRadius: '10px',
  padding: '1.5rem',
  backgroundColor: '#fff',
  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
  transition: 'all 0.3s ease',
};

const Programs = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>B.Tech Departments</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
      }}>
        {departments.map((dept) => (
          <div key={dept.id} style={cardStyle}>
            <h2 style={{ color: '#007BFF' }}>{dept.name}</h2>
            <p><strong>Syllabus:</strong>{' '}
              <a href={dept.syllabus} target="_blank" rel="noreferrer">Download PDF</a>
            </p>
            <p><strong>Dean:</strong>{' '}
              <a href={dept.dean.profile} target="_blank" rel="noreferrer">
                {dept.dean.name}
              </a>
            </p>
            <div>
              <strong>Achievements:</strong>
              <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                {dept.achievements.map((item, i) => (
                  <li key={i}>✅ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
