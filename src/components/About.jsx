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

  const achievements = [
    {
      title: 'Bronze Rank — Devpost',
      subtitle: 'X Hackathons Level 1',
      description: 'Earned by submitting 3+ eligible projects to separate hackathons.',
      badge: '🥉 Bronze Rank',
      icon: '🏆'
    },
    {
      title: 'First In-Person Hackathon',
      subtitle: 'Smart City Hackathon Lahore 2026',
      description: 'Submitted DocuCity Lahore under the City Intelligence track (Sponsored by Code for Pakistan & Canva).',
      badge: '📍 In-Person',
      icon: '🏙️'
    },
    {
      title: 'Generalist Achiever',
      subtitle: 'Cross-Domain Themes',
      description: 'Earned by submitting to 3 hackathons with diverse technological themes.',
      badge: '🌟 Generalist',
      icon: '⚡'
    }
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

        {/* Hackathon Achievements */}
        <h3 className="matrix-title">Hackathon & Devpost Achievements</h3>
        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div key={idx} className="achievement-card">
              <div className="achievement-header">
                <span className="achievement-icon">{item.icon}</span>
                <span className="achievement-badge">{item.badge}</span>
              </div>
              <h4 className="achievement-title">{item.title}</h4>
              <span className="achievement-subtitle">{item.subtitle}</span>
              <p className="achievement-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <h3 className="matrix-title" style={{ marginTop: '3rem' }}>Capability Matrix</h3>
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
