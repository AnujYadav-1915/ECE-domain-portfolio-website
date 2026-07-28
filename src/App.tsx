import React from 'react';
import { 
  Code2, 
  Cpu, 
  ShieldCheck, 
  BookOpen, 
  Award, 
  ExternalLink, 
  Terminal,
  Globe
} from 'lucide-react';
import { PROFILE, SKILL_CATEGORIES, PROJECTS, EXPERIENCES, CERTIFICATIONS } from './data';

export const App: React.FC = () => {
  return (
    <div className="container">
      {/* Hero Header */}
      <header className="hero">
        <h1 className="hero-name">{PROFILE.name}</h1>
        <div className="hero-role">{PROFILE.title}</div>
        <p className="hero-summary">{PROFILE.summary}</p>

        <div className="hero-links">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="link-pill">
            <Globe size={16} />
            <span>GitHub Profile</span>
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="link-pill">
            <Globe size={16} />
            <span>LinkedIn</span>
          </a>
          <a href={PROFILE.leetcode} target="_blank" rel="noopener noreferrer" className="link-pill">
            <Code2 size={16} />
            <span>LeetCode</span>
          </a>
        </div>
      </header>

      {/* Technical Skills */}
      <section>
        <h2 className="section-title">
          <Cpu size={20} />
          <span>Technical Skills</span>
        </h2>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-category">{cat.category}</div>
              <div className="skill-tags">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formal Verification & Digital Design Projects */}
      <section>
        <h2 className="section-title">
          <ShieldCheck size={20} />
          <span>Featured Projects — Formal Verification & Digital Design</span>
        </h2>
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-pill">
                <Globe size={14} />
                <span>Repository</span>
                <ExternalLink size={12} />
              </a>
            </div>
            <div className="skill-tags" style={{ marginBottom: '1rem' }}>
              {project.tools.map((tool, tIdx) => (
                <span key={tIdx} className="tag">{tool}</span>
              ))}
            </div>
            <ul className="project-bullets">
              {project.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section>
        <h2 className="section-title">
          <Terminal size={20} />
          <span>Engineering Experience</span>
        </h2>
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-header">
              <div>
                <span className="timeline-role">{exp.role}</span>
                <span style={{ margin: '0 0.5rem', color: 'var(--text-subtle)' }}>•</span>
                <span className="timeline-company">{exp.company}</span>
              </div>
              <span className="timeline-date">{exp.period}</span>
            </div>
            <ul className="project-bullets">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <h2 className="section-title">
          <BookOpen size={20} />
          <span>Education</span>
        </h2>
        <div className="timeline-item">
          <div className="timeline-header">
            <div>
              <span className="timeline-role">{PROFILE.degree}</span>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                {PROFILE.institution}
              </div>
            </div>
            <span className="timeline-date">{PROFILE.gpa}</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            <strong>Relevant Coursework:</strong> Embedded Systems, Microprocessors, Computer Architecture, Operating Systems, Digital Signal Processing (DSP), System Design.
          </p>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section>
        <h2 className="section-title">
          <Award size={20} />
          <span>Certifications & Achievements</span>
        </h2>
        <div className="timeline-item">
          <ul className="project-bullets">
            {CERTIFICATIONS.map((cert, idx) => (
              <li key={idx}>
                <strong>{cert.title}</strong> — <span style={{ color: 'var(--text-muted)' }}>{cert.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Anuj Kumar — Electronics & Communication Engineering Portfolio</p>
      </footer>
    </div>
  );
};
