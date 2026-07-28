import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  ShieldCheck, 
  BookOpen, 
  Award, 
  ExternalLink, 
  Terminal,
  Globe,
  FileText,
  Send,
  CheckCircle2,
  Mail,
  Phone,
  Sparkles,
  Layers,
  Zap
} from 'lucide-react';
import { PROFILE, SKILL_CATEGORIES, PROJECTS, EXPERIENCES, CERTIFICATIONS } from './data';

export const App: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="container">
      {/* Hero Header */}
      <header className="hero">
        <h1 className="hero-name">{PROFILE.name}</h1>
        <div className="hero-role">{PROFILE.title}</div>
        <p className="hero-summary">{PROFILE.summary}</p>

        <div className="hero-links">
          {/* Action Buttons: Resume & Certifications */}
          <a 
            href={PROFILE.resumeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-pill link-pill-accent"
          >
            <FileText size={16} />
            <span>View Updated Resume</span>
            <ExternalLink size={14} />
          </a>

          <a 
            href="#certifications" 
            className="link-pill"
          >
            <Award size={16} />
            <span>View Certifications</span>
          </a>

          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="link-pill">
            <Globe size={16} />
            <span>GitHub</span>
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

      {/* Quick Verification Specs Highlights */}
      <section>
        <div className="skills-grid" style={{ marginBottom: '1.5rem' }}>
          <div className="skill-card" style={{ borderLeft: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
              <Zap size={16} color="var(--accent)" />
              <span>Formal Proofs Proved</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              150+ SystemVerilog Assertions (SVA) proved in Cadence JasperGold & Synopsys VC Formal.
            </p>
          </div>

          <div className="skill-card" style={{ borderLeft: '3px solid var(--success)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
              <Layers size={16} color="var(--success)" />
              <span>Pipelined Datapath Verification</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              5-Stage RV32I Core, GPU Tensor Core MAC Unit, and Dual-Core MESI L2 Cache Coherence.
            </p>
          </div>
        </div>
      </section>

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

            {/* Architecture Diagram / Project Image if available */}
            {project.image && (
              <img 
                src={project.image} 
                alt={`${project.title} Architecture Diagram`} 
                className="project-img" 
              />
            )}

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
      <section id="certifications">
        <h2 className="section-title">
          <Award size={20} />
          <span>Certifications & Achievements</span>
        </h2>
        <div className="timeline-item">
          <ul className="project-bullets">
            {CERTIFICATIONS.map((cert, idx) => (
              <li key={idx} style={{ marginBottom: '0.75rem' }}>
                <strong>{cert.title}</strong> — <span style={{ color: 'var(--text-muted)' }}>{cert.issuer}</span>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ marginLeft: '0.5rem', fontSize: '0.825rem' }}
                  >
                    [View Certificate PDF]
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Let's Connect Form */}
      <section id="contact">
        <h2 className="section-title">
          <Mail size={20} />
          <span>Let's Connect</span>
        </h2>
        <div className="contact-card">
          {formSubmitted ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0', color: 'var(--success)' }}>
              <CheckCircle2 size={36} style={{ marginBottom: '0.5rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Message Received!</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                Thank you for reaching out. I will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="form-input"
                    placeholder="e.g. John Doe" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="form-input"
                    placeholder="e.g. john@company.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="form-input"
                  placeholder="e.g. ASIC Formal Verification / SoC Role Opportunity" 
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Recruiter Eye-Catcher Footer Banner */}
      <div className="recruiter-banner">
        <div className="recruiter-title">
          <Sparkles size={18} />
          <span>Why Hire Anuj Kumar for Formal Verification & Silicon Roles?</span>
        </div>
        <p className="recruiter-text">
          I bridge the gap between <strong>RTL Hardware Architecture</strong> and <strong>Formal Temporal Logic (SVA)</strong>. With proven experience eliminating pipeline stalls, deadlock conditions, and data races across 5-stage RISC-V cores and GPU L2 MESI cache clusters using <strong>Cadence JasperGold</strong> and <strong>Synopsys VC Formal</strong>, I am ready to bring zero-defect silicon verification standards to your engineering team.
        </p>
      </div>

      {/* Footer with Contact Info */}
      <footer>
        <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', color: 'var(--text-muted)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Mail size={14} color="var(--accent)" />
            {PROFILE.email}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Phone size={14} color="var(--accent)" />
            {PROFILE.phone}
          </span>
        </div>
        <p>© {new Date().getFullYear()} Anuj Kumar — Electronics & Communication Engineering Portfolio</p>
      </footer>
    </div>
  );
};
