// src/components/Projects/Projects.jsx
import React from 'react';
import './Projects.css';
import project1 from '../../assets/project_1.jpg';
import project2 from '../../assets/rg.jpg';
import project3 from '../../assets/drum.jpg';
import project4 from '../../assets/ai.jpg';  
import project5 from '../../assets/news.jpg';
import project6 from '../../assets/login.jpg';
import project7 from '../../assets/random.jpg';
import project8 from '../../assets/poke.jpg';
import project9 from '../../assets/email.jpg';

const projectData = [
  {
    image: project1,
    title: 'My Portfolio',
    desc: 'A personal portfolio website built with React showcasing projects, skills, and contact details.',
    link: 'https://github.com/yourname/project1',
  },
  {
    image: project2,
    title: 'Resume Generator',
    desc: 'A web app to generate professional resumes by entering user information into customizable templates.',
    link: 'https://github.com/Vamsi-pentela/resume-generator-',
  },
  {
    image: project3,
    title: 'DrumStick Player',
    desc: 'A fun web-based drum kit that plays different drum sounds on keypress or click.',
    link: 'https://github.com/Vamsi-pentela/drumstick-player',
  },
  {
    image: project7,
    title: 'Random Image Search Engine',
    desc: 'Search and display random images using an external image API with keyword-based queries.',
    link: 'https://github.com/Vamsi-pentela/random-image-search-engine',
  },
  {
    image: project4,
    title: 'AI Image Generator',
    desc: 'Generates AI-created images based on text prompts using DALL·E or a similar model.',
    link: 'https://github.com/Vamsi-pentela/Ai_image_generator',
  },
  {
    image: project5,
    title: 'Instant News',
    desc: 'Real-time news app that fetches the latest headlines from a news API based on selected categories.',
    link: 'https://github.com/Vamsi-pentela/instant_news',
  },
  {
    image: project6,
    title: 'Login Authentication',
    desc: 'Secure login system built with Html&css and backend integration for authentication and authorization.',
    link: 'https://github.com/Vamsi-pentela/login-authentication',
  },
  {
    image: project9,
    title: 'Email Sender Using API',
    desc: 'Send emails from a web app using a third-party email API like EmailJS or Nodemailer.',
    link: 'https://github.com/Vamsi-pentela/email-sender-using-api',
  },
  {
    image: project8,
    title: 'Pokemon Image Generator',
    desc: 'Fetch and display random Pokémon images using the Pokémon API.',
    link: 'https://github.com/Vamsi-pentela/pokemon-image-generator',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="projects-heading">
          My latest <span className="highlight-projects">work</span>
        </h2>

        <div className="projects-grid">
          {projectData.map((proj, i) => (
            <div className="project-card" key={i}>
              <img src={proj.image} alt={`Project ${i + 1}`} />
              <div className="project-overlay">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-description">{proj.desc}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/Vamsi-pentela?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="show-more"
        >
          Show More <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
