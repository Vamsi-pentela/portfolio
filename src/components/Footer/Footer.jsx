import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bottom-footer">
      <hr className="footer-divider" />
      <div className="footer-bottom-content">
        <p className="footer-left">
          &copy; {new Date().getFullYear()} Vamsi . All rights reserved.
        </p>
        <div className="footer-right">
          <a href="#terms">Term of Services</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#connect">Connect with me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
