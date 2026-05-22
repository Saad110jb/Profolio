import React from 'react';
import './HeroSection.css';
import myImage from '../assets/images/myimage.jpg';
import resume from '../assets/Muhammad.pdf';

import {
  FaGithub,
  FaLinkedinIn,
  FaDownload,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="profile-img-container">
          <img
            src={myImage}
            alt="Muhammad Saad - Full Stack & Applied AI Engineer"
            className="profile-img"
            loading="lazy"
          />
        </div>
      </div>

      <div className="hero-right">
        <div className="badge">APPLIED AI & FULL STACK ENGINEER</div>
        <h1 className="hero-title">
          I’m <span className="highlight">Muhammad Saad</span>
        </h1>

        <p className="hero-about">
          Building at the cutting edge where robust enterprise web applications meet Applied Artificial Intelligence. 
          Specialized in fine-tuning VLMs, orchestrating autonomous agentic frameworks, implementing high-performance RAG networks, 
          and deploying computer vision microservices.
        </p>

        <div className="contact-info">
          <p>
            <FaPhoneAlt className="info-icon" /> 
            <span>+92 318 9663004</span>
          </p>
          <p>
            <FaEnvelope className="info-icon" /> 
            <a href="mailto:ms0574203@gmail.com">ms0574203@gmail.com</a>
          </p>
          <p>
            <FaMapMarkerAlt className="info-icon" /> 
            <span>Faisalabad, Pakistan</span>
          </p>
        </div>

        <div className="buttons-row">
          <a href={resume} className="btn-primary" download>
            <FaDownload /> Download Resume
          </a>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/muhammad-saad-535a9126b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="tech-stack-section">
          <h3>Core Technical Architecture</h3>
          <div className="tech-tags">
            <span className="tech-tag">React / Next.js</span>
            <span className="tech-tag">React Native</span>
            <span className="tech-tag">Flutter</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Node.js / Nest.js</span>
            <span className="tech-tag">Python / FastAPI</span>
            <span className="tech-tag">Laravel</span>
            <span className="tech-tag">PostgreSQL / MongoDB</span>
            <span className="tech-tag">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
