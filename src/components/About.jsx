import React from 'react';
import './About.css';

const About = () => {
  const capabilities = [
    { name: 'React', level: 'Expert', category: 'Frontend' },
    { name: 'Next.js', level: 'Expert', category: 'Frontend / FullStack' },
    { name: 'React Native', level: 'Advanced', category: 'Mobile' },
    { name: 'Flutter', level: 'Advanced', category: 'Mobile' },
    { name: 'TypeScript', level: 'Expert', category: 'Language' },
    { name: 'Node.js', level: 'Advanced', category: 'Backend' },
    { name: 'Nest.js', level: 'Advanced', category: 'Backend' },
    { name: 'Python', level: 'Advanced', category: 'Backend / AI' },
    { name: 'FastAPI', level: 'Advanced', category: 'Backend / AI APIs' },
    { name: 'Laravel', level: 'Expert', category: 'Backend' },
    { name: 'PostgreSQL', level: 'Advanced', category: 'Database' },
    { name: 'MongoDB', level: 'Advanced', category: 'Database' },
    { name: 'Docker', level: 'Intermediate', category: 'DevOps' }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        
        <div className="about-content">
          <p>
            I am a specialized Full Stack Developer building at the cutting edge where robust enterprise web applications meet Applied Artificial Intelligence. 
            My engineering philosophy centers around constructing highly performant, type-safe, and containerized systems. Whether I am fine-tuning Vision-Language 
            Models (VLMs) or optimizing database indexing layout structures, I focus on system efficiency and fluid user experiences.
          </p>
          <p>
            With professional experience spanning React frontends, robust Laravel RESTful backends, and modular Python microservices, 
            I bridge the gap between AI research pipelines and user-ready production platforms.
          </p>
        </div>

        <h3 className="matrix-title">Capability Matrix</h3>
        <div className="capability-matrix">
          {capabilities.map((tech) => (
            <div key={tech.name} className="capability-card">
              <div className="capability-header">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-category">{tech.category}</span>
              </div>
              <div className="capability-bar-wrapper">
                <div className="capability-bar" data-level={tech.level}></div>
              </div>
              <span className="tech-level">{tech.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
