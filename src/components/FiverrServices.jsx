import React from 'react';
import './FiverrServices.css';
import { 
  FaRobot, 
  FaLaptopCode, 
  FaCogs, 
  FaExternalLinkAlt 
} from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const FiverrServices = () => {
  const gigs = [
    {
      id: 'agentic-ai',
      title: 'Agentic AI & Workflow Automation',
      subtitle: 'AI Agent Fleets & RAG Systems',
      description: 'Custom AI agent fleets, advanced RAG systems, and visual drag-and-drop workflow interfaces wrapped in scalable full-stack architectures.',
      bullets: [
        'Custom AI agent fleets (CrewAI, LangGraph)',
        'Advanced RAG & semantic search networks',
        'Visual drag-and-drop workflow canvases',
        'Production-grade full-stack architectures'
      ],
      link: 'http://www.fiverr.com/s/akrRbeW',
      icon: <FaRobot className="gig-icon-graphic" />,
      tags: ['AI Agents', 'RAG', 'FastAPI', 'LangGraph', 'Vector DBs']
    },
    {
      id: 'applied-ai-stack',
      title: 'Applied AI & Full-Stack Web Apps',
      subtitle: 'React, Next.js, Laravel & AI Workflows',
      description: 'Bridging the gap between advanced AI (workflows, RAG, custom transformers) and scalable, production-ready web applications.',
      bullets: [
        'Interactive React & Next.js web applications',
        'Robust enterprise Laravel & NestJS backends',
        'Custom Transformer & LLM API integrations',
        'Seamless database indexing & caching architectures'
      ],
      link: 'https://www.fiverr.com/s/BRQ5WYW',
      icon: <FaLaptopCode className="gig-icon-graphic" />,
      tags: ['Next.js', 'Laravel', 'React', 'Transformers', 'APIs']
    },
    {
      id: 'enterprise-automation',
      title: 'Enterprise Platforms & Automation Pipelines',
      subtitle: 'Custom Pipelines & Smart Systems',
      description: 'Enterprise-grade web platforms, custom automation pipelines, and smart AI integrations built to automate operational bottlenecks.',
      bullets: [
        'Custom automation & operational pipelines',
        'Smart AI integration & cognitive workflow automation',
        'Secure multi-tenant SaaS application engines',
        'Zero-downtime containerized deployments'
      ],
      link: 'https://www.fiverr.com/s/Gz7EXRd',
      icon: <FaCogs className="gig-icon-graphic" />,
      tags: ['SaaS', 'Docker', 'Automation', 'Webhooks', 'Clustering']
    }
  ];

  return (
    <section className="fiverr-services" id="fiverr-gigs">
      <div className="fiverr-container">
        <div className="section-header">
          <h2>Fiverr Services</h2>
          <p className="subtitle">Hire me on Fiverr for production-ready AI systems and full-stack applications</p>
        </div>

        <div className="gigs-grid">
          {gigs.map((gig) => (
            <div key={gig.id} className="gig-card">
              <div className="gig-card-glow"></div>
              <div className="gig-badge">
                <SiFiverr className="fiverr-badge-icon" /> Gig Link
              </div>
              <div className="gig-header">
                <div className="gig-icon-wrapper">
                  {gig.icon}
                </div>
                <h3>{gig.title}</h3>
                <span className="gig-subtitle">{gig.subtitle}</span>
              </div>
              <p className="gig-description">{gig.description}</p>
              
              <ul className="gig-bullets">
                {gig.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              <div className="gig-footer">
                <div className="gig-tags">
                  {gig.tags.map((tag) => (
                    <span key={tag} className="gig-tag">{tag}</span>
                  ))}
                </div>
                <a 
                  href={gig.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gig-btn"
                >
                  Order Gig <FaExternalLinkAlt className="btn-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FiverrServices;
