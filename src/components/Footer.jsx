import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Muhammad Saad. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/muhammad-saad-535a9126b/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:ms0574203@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
