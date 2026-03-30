import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Animated background blobs */}
      <div className="hero-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-greeting">👋 Hello, I&apos;m</span>
          <h1 className="hero-name">
            Mohammad Danish Ansari<br />
            {/* <span className="gradient-text">Danish Ansari</span> */}
          </h1>
          <div className="hero-title-wrapper">
            <span className="hero-role">React Native Developer</span>
          </div>
          <p className="hero-desc">
            I craft high-performance mobile applications using <strong>React Native</strong>,
            delivering seamless cross-platform experiences for iOS & Android.
            Passionate about clean code, intuitive UX, and scalable architecture.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View My Work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              Get In Touch
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-label">Apps Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="app-ui">
                  <div className="app-header">
                    <div className="app-dot" />
                    <div className="app-bar" />
                    <div className="app-dot" />
                  </div>
                  <div className="app-card" />
                  <div className="app-card small" />
                  <div className="app-row">
                    <div className="app-icon" />
                    <div className="app-icon" />
                    <div className="app-icon" />
                  </div>
                  <div className="app-card medium" />
                </div>
              </div>
            </div>
            <div className="phone-glow" />
          </div>

          {/* Floating tech badges */}
          <div className="tech-badges-column">
            <div className="tech-badge badge-rn">
              <span className="tech-icon">⚛️</span>
              <span>React Native</span>
            </div>
            <div className="tech-badge badge-js">
              <span className="tech-icon">🟨</span>
              <span>JavaScript</span>
            </div>
            <div className="tech-badge badge-ts">
              <span className="tech-icon">🔷</span>
              <span>Mobile Application</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollTo('about')}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  );
}
