import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollTo = (id) => {
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand-logo" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}>
              <span className="brand-bracket">&lt;</span>
              <span className="brand-name">Danish</span>
              <span className="brand-bracket">/&gt;</span>
            </a>
            <p className="footer-tagline">
              Building cross-platform mobile experiences with React Native.
              Available for freelance and full-time opportunities.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Navigation</h4>
            <ul>
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={(e) => { e.preventDefault(); scrollTo(href); }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/DanishAnsariMohammad" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://gitlab.com/danishouz" target="_blank" rel="noopener noreferrer">GitLab</a></li>
              <li><a href="https://www.linkedin.com/in/ansari-danish-3a2b2720b" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:danishouz@email.com">Email</a></li>
              <li><a href="https://wa.me/917400255185" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} <strong>Mohammad Danish Ansari</strong>. Built with React JS + ❤️
          </p>
          <button
            className="scroll-top"
            onClick={() => scrollTo('#home')}
            aria-label="Scroll to top"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
