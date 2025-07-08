import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },

    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Research', href: '#research' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
      <div className="navbar-container">
        <div className="navbar-flex">
        <div className="navbar-logo-wrap">
  <GraduationCap className="navbar-logo-icon" />
  <Link to="/" className="navbar-logo-text">Excellence University</Link>
</div>

          {/* Desktop Navigation */}
          <div className="navbar-links">
  <div className="navbar-nav-items">
    {navItems.map((item) => (
      <a key={item.name} href={item.href} className="navbar-link">
        {item.name}
      </a>
    ))}
  </div>
  <div className="navbar-auth-buttons">
    <a href="/login" className="navbar-btn signin">Sign In</a>
    <a href="/register" className="navbar-btn register">Register</a>
  </div>
</div>
          
          {/* Mobile menu button */}
          <div className="navbar-mobile-btn-wrap">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-mobile-btn"
            >
              {isOpen ? <X className="navbar-mobile-icon" /> : <Menu className="navbar-mobile-icon" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="navbar-mobile-menu">
            <div className="navbar-mobile-links">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="navbar-mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="navbar-mobile-auth-buttons">
  <a href="/login" className="navbar-btn signin">Sign In</a>
  <a href="/register" className="navbar-btn register">Register</a>
</div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 