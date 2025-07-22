import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    setRole(localStorage.getItem('role'));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '/admissions', isRoute: true },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Research', href: '#research' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  // Role-based dashboard links
  const dashboardLinks = [];
  if (role === 'ADMIN') dashboardLinks.push(<li key="admin"><a href="/admin/dashboard" className="hover:text-black font-semibold">Admin Dashboard</a></li>);
  if (role === 'HOD') dashboardLinks.push(<li key="hod"><a href="/hod/dashboard" className="hover:text-cyan-600 font-semibold">HOD Dashboard</a></li>);
  // Removed Faculty Dashboard link
  if (role === 'STUDENT') dashboardLinks.push(<li key="student"><a href="/student/dashboard" className="hover:text-blue-600 font-semibold">Student Dashboard</a></li>);

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
      <div className="navbar-container">
        <div className="navbar-flex">
        <div className="navbar-logo-wrap">
          <img src="/Mahindra-University-Logo.svg" alt="Mahindra University Logo" className="navbar-logo-icon" style={{ height: '2.5rem', width: 'auto' }} />
        </div>

          {/* Desktop Navigation */}
          <div className="navbar-links">
  <div className="navbar-nav-items">
    {navItems.map((item) => (
      item.isRoute ? (
        <Link key={item.name} to={item.href} className="navbar-link">
          {item.name}
        </Link>
      ) : (
        <a key={item.name} href={item.href} className="navbar-link">
          {item.name}
        </a>
      )
    ))}
    {dashboardLinks}
  </div>
  <div className="navbar-auth-buttons">
    {!isLoggedIn && <a href="/login" className="navbar-btn signin">Sign In</a>}
    {!isLoggedIn && <a href="/register" className="navbar-btn register">Register</a>}
    {/* Removed logout button */}
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
              {dashboardLinks}
              <div className="navbar-mobile-auth-buttons">
  {!isLoggedIn && <a href="/login" className="navbar-btn signin">Sign In</a>}
  {!isLoggedIn && <a href="/register" className="navbar-btn register">Register</a>}
  {/* Removed logout button */}
</div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 