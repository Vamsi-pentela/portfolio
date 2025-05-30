// src/components/About/About.jsx
import React from 'react';
import './About.css';
import profileImage from '../../assets/gojo.jpg';

const About = () => {
  return (
    <section className="about-container" id="about-me">
      <h1 className="about-heading">
        About<span className="highlight-about">Me</span>
      </h1>

      <div className="about-content">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>

        <div className="about-text">
          <p>
            I'm a MERN Stack Developer with a strong interest in building responsive and user-friendly web applications. I enjoy developing clean, functional interfaces and learning new technologies that enhance the user experience.
          </p>
          <p>
            I specialize in frontend technologies like React, HTML, and CSS, and have a good understanding of backend tools such as Node.js, Express, and MongoDB, with around 60% proficiency in backend development. I'm always exploring ways to improve my skills and build modern, efficient web solutions.
          </p>

          <div className="skills">
            <div className="skill">
              <span>HTML & CSS &</span>
              <div className="bar html"></div>
            </div>
            <div className="skill">
              <span>React JS</span>
              <div className="bar react"></div>
            </div>
            <div className="skill">
              <span>Node & Express </span>
              <div className="bar js"></div>
            </div>
            <div className="skill">
              <span>Mongo DB</span>
              <div className="bar next"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="stat-item">
          <h2><span>2+</span></h2>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr className="divider" />
        <div className="stat-item">
          <h2><span>15+</span></h2>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr className="divider" />
        <div className="stat-item">
          <h2><span>1+</span></h2>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </section>
  );
};

export default About;
