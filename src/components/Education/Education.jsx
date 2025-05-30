// src/components/Education/Education.jsx
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education-container" id="education">
      <h1 className="education-heading">
        My <span className="highlight-education">Education</span>
      </h1>

      <div className="education-list">
        <div className="education-item">
          <h3>Integrated M.Tech in Computer Science</h3>
          <p>VIT-AP University, 2023 - 2028</p>
          <p>Pursuing integrated master's with focus on emerging technologies.</p>
        </div>
        <div className="education-item">
          <h3>Intermediate Education (MPC Stream)</h3>
          <p>Sri Chaitanya College, Gudavalli, Vijayawada, 2021 - 2023</p>
          <p>Completed coursework in Mathematics, Physics, and Chemistry.</p>
        </div>
        <div className="education-item">
          <h3>Secondary School (10th Grade)</h3>
          <p>Sri Chaitanya School, Martur, Prakasam District</p>
          <p>Completed SSC with strong foundation in science and mathematics.</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
