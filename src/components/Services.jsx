import React from 'react';
import './Services.css';
import {
  FaTerminal,
  FaBrain,
  FaCalendarAlt
} from 'react-icons/fa';

const Services = () => {
  const projects = [
    {
      id: 'docucity-lahore',
      title: 'DocuCity Lahore — AI Municipal Document & Geospatial Policy Platform',
      role: 'Lead AI & Geospatial Systems Architect',
      hackathon: 'Smart City Hackathon Lahore',
      description: (
        <>
          <p>
            An AI-powered municipal document intelligence and geospatial policy mapping platform that transforms static, unstructured government records (LDA, WASA, MCL, Punjab Urban Unit) into an intelligent, searchable, and interactive system.
          </p>
          <ul className="project-bullet-list">
            <li>
              <strong>Multimodal Ingestion & Bilingual OCR:</strong> Processes scanned gazettes and multi-page PDFs using PaddleOCR and PyMuPDF to extract structured text, tables, and layouts in English and Urdu.
            </li>
            <li>
              <strong>Entity Extraction & Spatial Resolution:</strong> Automatically extracts regulatory entities (FAR, building heights, setback rules, gazette IDs) and resolves spatial boundaries into OpenStreetMap GeoJSON layers.
            </li>
            <li>
              <strong>Interactive GIS Policy Explorer:</strong> Integrated Leaflet.js interactive map enabling users to explore color-coded zoning overlays and inspect regulatory bylaws per municipal zone.
            </li>
            <li>
              <strong>Grounded RAG Policy Assistant:</strong> Utilizes ChromaDB vector storage and Google Gemini API for natural language queries with exact page, section, and clause citations to eliminate hallucinations.
            </li>
            <li>
              <strong>Verification & Security Studio:</strong> Reviewer workflow for authorized officials to verify OCR extractions side-by-side with automated PII/CNIC redaction and role-based access control (RBAC).
            </li>
          </ul>
          <p className="project-footer-note">
            Developed for Smart City Hackathon Lahore to accelerate municipal policy discovery and foster inter-departmental collaboration across urban governance agencies.
          </p>
        </>
      ),
      stack: ['Google Gemini API', 'ChromaDB', 'PaddleOCR', 'PyMuPDF', 'Leaflet.js', 'OpenStreetMap', 'FastAPI', 'Python', 'React']
    },
    {
      id: 'bazarboost',
      title: 'BazarBoost — Enterprise Multi-Vendor Platform',
      role: 'Lead Architect',
      description: (
        <>
          <p>
            An enterprise-grade, multi-vendor e-commerce platform engineered for high scalability, 
            strict tenant isolation, and automated financial workflows. It features real-time, interactive 
            price negotiations between shoppers and vendors, and a fully automated merchant micro-financing system.
          </p>
          <ul className="project-bullet-list">
            <li>
              <strong>Atomic Discount Orchestration:</strong> Eliminates state race conditions during checkout via a 
              bounded loyalty engine that safely stacks vendor coupons with rolling shopper rewards.
            </li>
            <li>
              <strong>High-Frequency Negotiation Rig:</strong> Powered by a bidirectional Socket.io framework utilizing 
              functional state updaters, clustered via PM2, Docker, and Nginx to handle intense traffic.
            </li>
            <li>
              <strong>Automated Loan Repayments:</strong> Intercepts order completion events using ACID-safe Mongoose 
              transactions, automatically deducting outstanding loan balances before routing the net payout to the vendor's wallet.
            </li>
          </ul>
          <p className="project-footer-note">
            Built for zero-downtime performance, verified by a 20-probe Jest end-to-end integration test suite (under 15ms WebSocket sync time).
          </p>
        </>
      ),
      stack: ['Socket.io', 'Mongoose', 'Docker', 'PM2', 'Nginx', 'Jest', 'Node.js']
    },
    {
      id: 'apa',
      title: 'Agentic Project Architect (APA)',
      role: 'Core Systems Architect',
      description: 'An autonomous development acceleration engine engineered to eliminate "Developer\'s Block". Translates high-level technical skill matrices directly into fully structured production ideations, customized repository architectural roadmaps, and explicit boilerplate requirements.',
      stack: ['Python', 'Agentic Frameworks', 'LLM APIs', 'Streamlit / React', 'Git Automation']
    },
    {
      id: 'nexcareer',
      title: 'NexCareer — AI-Driven Career Recommendation Engine',
      role: 'Lead Developer',
      description: 'An intelligent career mapping and counseling ecosystem powered by custom behavioral and algorithmic predictive models, featuring a fully interactive skill pathway builder and real-time skills gap diagnostics.',
      stack: ['Next.js', 'React.js', 'Python', 'FastAPI', 'MongoDB', 'Tailwind CSS']
    },
    {
      id: 'regent',
      title: 'Regent AI — Cricket Biomechanics & Performance Infrastructure',
      role: 'Core AI Architect',
      description: 'A high-performance computer vision analytics system deployed as a modular microservices architecture. Extracts granular biometric motion patterns, full-body skeleton estimation structures, and real-time pitch/ball flight metrics from raw match video.',
      stack: ['FastAPI', 'Python', 'Computer Vision', 'MongoDB Atlas', 'Docker', 'JavaScript']
    },
    {
      id: 'visionmark',
      title: 'VisionMark — Intelligent Document & Layout Parser',
      role: 'VLM Training Engineer',
      description: 'A document intelligence pipeline utilizing advanced Vision Language Models (Qwen2-VL) fine-tuned via QLoRA. Automatically recovers structurally dense multi-column pages, nested tables, and raw schematic diagrams, parsing them instantly to native Markdown.',
      stack: ['Qwen2-VL', 'QLoRA', 'Python', 'PyTorch', 'Hugging Face', 'Jupyter Notebook']
    },
    {
      id: 'stora',
      title: 'Stora — Multi-Tenant B2B SaaS Platform',
      role: 'Full Stack Developer',
      description: 'A production-grade multi-tenant enterprise software architecture with rigorous logical database isolation, dynamic Role-Based Access Control (RBAC), multi-store configurations, background billing queues, and algorithmic fraud detection layers.',
      stack: ['Next.js', 'Node.js', 'Laravel', 'MySQL', 'Redis', 'WebSockets']
    },
    {
      id: 'hmms',
      title: 'HMMS — Enterprise Hospital Operations Platform',
      role: 'Backend Developer',
      description: 'A mission-critical hospital operation control deck coordinating real-time patient charts, automated e-prescriptions, interconnected pharmacy inventory states, blood registry networks, and active laboratory workflows.',
      stack: ['Next.js', 'Node.js', 'Laravel REST API', 'MySQL', 'State Engines']
    }
  ];

  const experiences = [
    {
      role: 'Full Stack Developer / Remote Systems Engineer',
      company: 'Tigrac IT Limited',
      duration: 'April 2025 – Present',
      location: 'Remote',
      bullets: [
        'Developing highly optimized full-stack components and scalable microservice architectures under agile sprint tracking.',
        'Optimizing database indexing layouts to minimize query times.'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'AllZone Technologies',
      duration: 'February 2025 – April 2025',
      location: 'Lahore (On-site / Hybrid)',
      bullets: [
        'Engineering interactive features within specialized MERN ecosystems, managing modular state updates, and constructing highly performant application logic.'
      ]
    },
    {
      role: 'Web Developer Associate',
      company: 'Innvoy Tech',
      duration: 'June 2024 – February 2025',
      location: 'Faisalabad (On-site)',
      bullets: [
        'Building responsive front-facing blocks and custom user flows with React.js and modern styling systems.',
        'Connecting RESTful endpoints and troubleshooting cross-origin resource strategies.'
      ]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        {/* Core Capabilities */}
        <h2>Focus Areas</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaBrain className="service-icon" />
            <h3>Applied AI Systems</h3>
            <p>Developing agentic architectures, computer vision pipelines, and custom fine-tuned VLM integrations.</p>
          </div>
          <div className="service-card">
            <FaTerminal className="service-icon" />
            <h3>Enterprise Full Stack</h3>
            <p>Constructing scalable multi-tenant SaaS solutions, optimized backends, and responsive React modules.</p>
          </div>
        </div>

        {/* Flagship Projects */}
        <div className="section-header">
          <h2>Flagship Projects</h2>
          <p className="subtitle">Scrubbed of basic layouts. Built for production scale.</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <span className="role-badge">{project.role}</span>
                {project.hackathon && (
                  <span className="hackathon-badge">🏆 {project.hackathon}</span>
                )}
              </div>
              <h3>{project.title}</h3>
              <div className="project-description">
                {typeof project.description === 'string' ? (
                  <p>{project.description}</p>
                ) : (
                  project.description
                )}
              </div>
              <div className="project-tech-badges">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Timeline */}
        <div className="section-header timeline-header">
          <h2>Professional History</h2>
          <p className="subtitle">Chronological progression of enterprise and systems experience.</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-duration">
                    <FaCalendarAlt /> {exp.duration}
                  </span>
                  <span className="timeline-location">{exp.location}</span>
                </div>
                <h3 className="timeline-role">
                  {exp.role} <span className="timeline-company">@ {exp.company}</span>
                </h3>
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
