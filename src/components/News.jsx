import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    // ... existing code ...
  ];

  const upcomingEvents = [
    // ... existing code ...
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Research: 'cat-research',
      Campus: 'cat-campus',
      Rankings: 'cat-rank',
      International: 'cat-intl',
      Alumni: 'cat-alumni',
      Medicine: 'cat-medicine'
    };
    return colors[category] || 'cat-default';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="news-section">
      <div className="news-container">
        <div className="news-header">
          <h2 className="news-title">
            News & Events
          </h2>
          <p className="news-desc">
            Stay updated with the latest developments, achievements, and upcoming events 
            from our university community.
          </p>
        </div>

        <div className="news-grid">
          {/* Main News Section */}
          <div className="news-main">
            <div className="news-main-header">
              <h3 className="news-main-title">Latest News</h3>
              <button className="news-main-btn">
                View All News →
              </button>
            </div>
            
            <div className="news-list">
              {newsItems.map((item, index) => (
                <article key={index} className="news-card">
                  <div className="news-card-flex">
                    <div className="news-card-img-wrap">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="news-card-img"
                      />
                    </div>
                    <div className="news-card-content">
                      <div className="news-card-meta">
                        <span className={`news-cat ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                        <div className="news-date">
                          <Calendar className="icon-date" />
                          {formatDate(item.date)}
                        </div>
                        <div className="news-time">
                          <Clock className="icon-time" />
                          {item.readTime}
                        </div>
                      </div>
                      <h4 className="news-card-title">
                        {item.title}
                      </h4>
                      <p className="news-card-desc">{item.excerpt}</p>
                      <button className="news-card-btn">
                        Read More
                        <ArrowRight className="icon-arrow" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="news-sidebar">
            {/* Upcoming Events */}
            <div className="news-events">
              <h3 className="news-events-title">Upcoming Events</h3>
              <div className="news-events-list">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="news-event-item">
                    <h4 className="news-event-title">{event.title}</h4>
                    <div className="news-event-details">
                      <div className="news-event-date">
                        <Calendar className="icon-date" />
                        {formatDate(event.date)}
                      </div>
                      <div className="news-event-time">
                        <Clock className="icon-time" />
                        {event.time}
                      </div>
                      <div>{event.location}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="news-events-btn">
                View All Events
              </button>
            </div>

            {/* Newsletter Signup */}
            <div className="news-newsletter">
              <h3 className="news-newsletter-title">Stay Informed</h3>
              <p className="news-newsletter-desc">Subscribe to our newsletter for the latest updates and announcements.</p>
              <div className="news-newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="news-newsletter-input"
                />
                <button className="news-newsletter-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News; 