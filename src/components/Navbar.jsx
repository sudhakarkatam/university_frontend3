import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../css/NavbarModern.css';

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
    // About: scroll to #about-mru on home page
    { name: 'About', href: '/about-us' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '/admissions', isRoute: true },
    { name: 'Research', href: '#research' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Contact', href: '#contact' },
  ];

  // Role-based dashboard links
  const dashboardLinks = [];
  if (role === 'ADMIN') dashboardLinks.push(<li key="admin"><a href="/admin/dashboard" className="navbar-dashboard-link">Admin Dashboard</a></li>);
  if (role === 'HOD') dashboardLinks.push(<li key="hod"><a href="/hod/dashboard" className="navbar-dashboard-link">HOD Dashboard</a></li>);
  if (role === 'STUDENT') dashboardLinks.push(<li key="student"><a href="/student/dashboard" className="navbar-dashboard-link">Student Dashboard</a></li>);

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav className={`navbar-modern ${isScrolled ? 'navbar-scrolled' : ''}`}> 
      <div className="w-full overflow-hidden">
        <div className="flex flex-nowrap justify-between items-center min-h-[96px] w-full px-8 py-4">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0 pr-8">
            <img src="/MRU-Logo2.png" alt="Malla Reddy University Logo" className="h-16 w-auto object-contain block" style={{flexShrink:0}} />
          </div>
          {/* Center: Nav Items */}
          <div className="flex-1 flex justify-center items-center min-w-0">
            <ul className="flex flex-nowrap items-center gap-8 whitespace-nowrap m-0 p-0 list-none">
              {navItems.map((item) =>
                item.isRoute ? (
                  <li key={item.name}>
                    <Link to={item.href} className="navbar-modern-link">{item.name}</Link>
                  </li>
                ) : (
                  <li key={item.name}>
                    <a href={item.href} className="navbar-modern-link">{item.name}</a>
                  </li>
                )
              )}
              {dashboardLinks}
            </ul>
            <div className="navbar-modern-auth-buttons ml-6">
              {!isLoggedIn && <a href="/login" className="navbar-modern-btn signin">Sign In</a>}
              {!isLoggedIn && <a href="/register" className="navbar-modern-btn register">Register</a>}
            </div>
          </div>
          {/* Right: CTA Button */}
          <div className="flex items-center flex-shrink-0 pl-6">
            <Link to="/admissions" className="navbar-modern-apply-btn whitespace-nowrap">APPLY NOW</Link>
          </div>
          {/* Mobile menu button */}
          <div className="navbar-modern-mobile-btn-wrap ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-modern-mobile-btn"
              style={{ background: 'none', border: 'none', color: '#fff' }}
            >
              {isOpen ? <X className="navbar-modern-mobile-icon" /> : <Menu className="navbar-modern-mobile-icon" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="navbar-modern-mobile-menu">
            <div className="navbar-modern-mobile-links">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="navbar-modern-mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {dashboardLinks}
              <div className="navbar-modern-mobile-auth-buttons">
                {!isLoggedIn && <a href="/login" className="navbar-modern-btn signin">Sign In</a>}
                {!isLoggedIn && <a href="/register" className="navbar-modern-btn register">Register</a>}
              </div>
              <Link to="/admissions" className="navbar-modern-apply-btn mt-4">APPLY NOW</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 