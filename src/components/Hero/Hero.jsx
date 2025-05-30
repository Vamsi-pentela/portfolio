// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';
import logo from '../../assets/sas.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-socials-vertical">
          <a href="https://linkedin.com/in/vamsipentela" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/Vamsi-pentela" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.instagram.com/vamsi.pentela/?igsh=a3V5azc1ZjRya25h#" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FVamsi_pentela" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.facebook.com/vamsi.pentela.2025/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
        </div>

        <div className="hero-content">
          <div className="hero-image">
            <img src={logo} alt="Vamsi Pentela" />
          </div>

          <h1 className="hero-title">
            <span className="gradient-text">I'm</span>{' '}
            <span className="purple-text">Vamsi Pentela</span>,{' '}
            <span className="white-bold">Iam Software<br /> developer</span> based in{' '}
            <span className="white-text">India.</span>
          </h1>

          <p className="hero-description">
            I’m a 3rd-year computer science student with a strong interest in web development. I work with the MERN stack for full-stack projects and also have experience with Python, Java, SQL, and fundamentals of AI/ML.
          </p>

          <div className="hero-actions">
            <a
              href="/resume.pdf"
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>My resume</span>
              <i className="bi bi-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
