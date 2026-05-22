import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const lastScrollY = useRef(0);

  const handleToggle = () => setIsOpen(prev => !prev);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Find offset to account for navbar height
      const yOffset = -70; 
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Auto-hide when scrolling down past 80px, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${hideNavbar ? 'navbar--hidden' : ''}`}>
      <div className="logo" onClick={() => scrollToSection('home')}>Saad.Dev</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('services')}>Services</button>
      </div>
      <div className="hamburger" onClick={handleToggle} aria-label="Toggle navigation">
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
      </div>
    </nav>
  );
};

export default Navbar;
