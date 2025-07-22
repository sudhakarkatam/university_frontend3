import React from 'react';

const announcements = [
  'Department of Physiotherapy Organising "Emerging Scholar\'s Symposium on Knee Osteoarthritis" Tuesday, 28th Jan 2025.',
  'Second National Conference on Viksit Bharat @2047 January 25, 2025.',
  'Department of Physiotherapy Organising a one day workshop on "Measuring Health and Disability with ICF Model"',
];

function AnnouncementsCard() {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
      border: '4px solid #ff9800',
      maxWidth: 400,
      margin: '2rem auto',
      padding: 0,
      overflow: 'hidden'
    }}>
      <div style={{
        background: '#ff9800',
        color: '#fff',
        fontWeight: 700,
        fontSize: '1.25rem',
        textAlign: 'center',
        padding: '1rem 0'
      }}>
        Announcements
      </div>
      <div style={{ padding: '1.25rem 1rem' }}>
        {announcements.map((text, idx) => (
          <div key={idx} style={{ marginBottom: idx < announcements.length - 1 ? 16 : 0 }}>
            <div style={{ color: '#22223b', fontSize: '1.05rem', textAlign: 'center' }}>{text}</div>
            {idx < announcements.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #ff9800', margin: '1rem 0' }} />
            )}
          </div>
        ))}
      </div>
      <button style={{
        width: '100%',
        background: '#ffd600',
        color: '#22223b',
        fontWeight: 700,
        fontSize: '1.1rem',
        border: 'none',
        borderRadius: 0,
        padding: '1rem 0',
        cursor: 'pointer'
      }}>
        View All
      </button>
    </div>
  );
}

const News = () => {
  return (
    <section id="news" className="news-section">
      <div className="news-container">
        <AnnouncementsCard />
      </div>
    </section>
  );
};

export default News; 