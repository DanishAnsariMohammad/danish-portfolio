import { useState } from 'react';
import './About.css';

export default function About() {
  const [showFallbackAvatar, setShowFallbackAvatar] = useState(false);

  return (
    <section id="about" className="section about">
      <div className="container">
        <span className="badge">About Me</span>
        <h2 className="section-title">Who I Am</h2>
        <p className="section-subtitle">Passionate mobile developer crafting apps that matter</p>

        <div className="about-grid">
          {/* Left: Avatar + quick info */}
          <div className="about-left">
            <div className="avatar-wrapper">
              {/* <div className="avatar-ring" /> */}
              <div className="avatar-placeholder">
                {!showFallbackAvatar ? (
                  <img
                    className="avatar-photo"
                    src="/profile.png"
                    alt="Mohammad Danish Ansari"
                    onError={() => setShowFallbackAvatar(true)}
                  />
                ) : (
                  <span className="avatar-initials">DA</span>
                )}
              </div>
              <div className="avatar-badge">
                <span>📱</span>
                <span>Mobile Dev</span>
              </div>
            </div>

            <div className="info-cards">
              <div className="info-card">
                <span className="info-icon">📍</span>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">India</span>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">💼</span>
                <div>
                  <span className="info-label">Status</span>
                  <span className="info-value available">Available for Work</span>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">🎓</span>
                <div>
                  <span className="info-label">Specialization</span>
                  <span className="info-value">React Native</span>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">⚡</span>
                <div>
                  <span className="info-label">Focus</span>
                  <span className="info-value">Cross-Platform Apps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story */}
          <div className="about-right">
            <h3 className="about-heading">
              Building the future, one app at a time
            </h3>
            <p className="about-text">
              I&apos;m <strong>Mohammad Danish Ansari</strong>, a dedicated React Native developer 
              with a strong passion for building beautiful, performant mobile applications. 
              I specialize in creating cross-platform apps that run seamlessly on both <strong>iOS</strong> and <strong>Android</strong>.
            </p>
            <p className="about-text">
              With hands-on experience in JavaScript and TypeScript ecosystems, I love turning 
              complex problems into elegant, user-friendly solutions. From state management with 
              Redux to smooth animations and native integrations — I&apos;ve got it covered.
            </p>
            <p className="about-text">
              When I&apos;m not coding, I stay up-to-date with the latest in the React Native 
              ecosystem, contribute to open source, and explore new mobile UX patterns.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-icon">🚀</div>
                <div>
                  <strong>Performance First</strong>
                  <p>Optimized apps with smooth 60fps animations</p>
                </div>
              </div>
              <div className="highlight">
                <div className="highlight-icon">🎨</div>
                <div>
                  <strong>UI/UX Focused</strong>
                  <p>Pixel-perfect interfaces users love</p>
                </div>
              </div>
              <div className="highlight">
                <div className="highlight-icon">🔧</div>
                <div>
                  <strong>Clean Architecture</strong>
                  <p>Scalable, maintainable code structure</p>
                </div>
              </div>
            </div>

            <div className="resume-panel">
              <div className="resume-panel-head">
                <span className="resume-label">Professional Resume</span>
                <p>ATS-friendly profile with selected production mobile projects and measurable impact highlights.</p>
              </div>

              <div className="resume-points">
                <span>12+ published apps on Google Play</span>
                <span>React Native specialist for enterprise and civic domains</span>
                <span>Clean architecture, performance, and delivery ownership</span>
              </div>

              <div className="resume-actions">
                <a
                  className="about-resume-btn ghost"
                  href="/Mohammad_Danish_Ansari_Resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  View Resume
                </a>

                <a
                  className="about-resume-btn"
                  href="/Mohammad_Danish_Ansari_Resume.pdf"
                  download="Mohammad_Danish_Ansari_Resume.pdf"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
