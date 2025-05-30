// src/components/Services/Service.jsx
import React from 'react';
import './Service.css';

const services = [
  {
    title: 'Web Development',
    description: 'Designing and developing responsive websites using modern frameworks like React and React.js.'
  },
  {
    title: 'Stock Marketing',
    description: 'Understanding stock market fundamentals and trading strategies for smart investments.'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Exploring machine learning models and AI concepts to solve real-world problems.'
  },
  {
    title: 'Python Programming',
    description: 'Proficient in Python including core concepts and Object-Oriented Programming (OOPs).'
  },
  {
    title: 'Java Development',
    description: 'Skilled in Java fundamentals and building applications with OOP concepts.'
  },
  {
    title: 'Video Editing',
    description: 'Creating and editing videos using tools like Adobe Premiere Pro and CapCut for YouTube, reels, and presentations.'
  }
];

const Service = () => {
  return (
    <section className="service-container" id="services">
      <h1 className="service-heading">
        My<span className="highlight-service"> Services</span>
      </h1>

      <div className="service-content">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
