// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/log.jpg';
import menuOpenIcon from '../../assets/menu_open.svg';
import menuCloseIcon from '../../assets/menu_close.svg';

const NAV_ITEMS = ['Home', 'About Me', 'Education', 'Services', 'Projects', 'Contact'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        {/* Nav links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {NAV_ITEMS.map(item => (
            <li key={item} onClick={closeMenu}>
              <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Connect With Me Button */}
        <a href="#contact" className="connect-btn" onClick={closeMenu}>
          Connect With Me
        </a>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <img
            src={menuOpen ? menuCloseIcon : menuOpenIcon}
            alt="Menu Icon"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
