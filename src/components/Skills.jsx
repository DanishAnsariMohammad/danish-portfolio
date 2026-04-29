import { useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    id: 'mobile',
    label: '📱 Mobile',
    skills: [
      { name: 'React Native', level: 95, color: '#61dafb' },
      { name: 'Expo', level: 88, color: '#8b5cf6' },
      { name: 'React Navigation', level: 90, color: '#6c63ff' },
      { name: 'Redux / Zustand', level: 85, color: '#764abc' },
      { name: 'Native Modules', level: 75, color: '#ff6584' },
    ],
  },
  {
    id: 'languages',
    label: '💻 Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 95, color: '#f7df1e' },
      // { name: 'TypeScript', level: 88, color: '#3178c6' },
      { name: 'HTML / CSS', level: 80, color: '#e34f26' },
    ],
  },
  {
    id: 'tools',
    label: '🛠 Tools & APIs',
    skills: [
      { name: 'Git & GitHub', level: 90, color: '#f05032' },
      { name: 'Firebase', level: 85, color: '#ffca28' },
      { name: 'REST APIs', level: 92, color: '#43e97b' },
      { name: 'Figma / Zeplin', level: 75, color: '#f24e1e' },
    ],
  },
];

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const techStack = [
  { name: 'React Native', icon: `${CDN}/react/react-original.svg`, color: '#61dafb' },
  { name: 'JavaScript', icon: `${CDN}/javascript/javascript-original.svg`, color: '#f7df1e' },
  // { name: 'TypeScript', icon: `${CDN}/typescript/typescript-original.svg`, color: '#3178c6' },
  { name: 'Redux', icon: `${CDN}/redux/redux-original.svg`, color: '#764abc' },
  { name: 'Firebase', icon: `${CDN}/firebase/firebase-plain.svg`, color: '#ffca28' },
  { name: 'Node.js', icon: `${CDN}/nodejs/nodejs-original.svg`, color: '#339933' },
  { name: 'Git', icon: `${CDN}/git/git-original.svg`, color: '#f05032' },
  { name: 'GitHub', icon: `${CDN}/github/github-original.svg`, color: '#ffffff' },
  { name: 'Android', icon: `${CDN}/android/android-original.svg`, color: '#3ddc84' },
  // { name: 'Swift / iOS', icon: `${CDN}/swift/swift-original.svg`, color: '#f05138' },
  { name: 'Figma', icon: `${CDN}/figma/figma-original.svg`, color: '#f24e1e' },
  { name: 'VS Code', icon: `${CDN}/vscode/vscode-original.svg`, color: '#007acc' },
];

function TechCard({ name, icon, color }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -12;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 12;
    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
    card.style.borderColor = `${color}90`;
    card.style.boxShadow = `0 8px 32px ${color}40, 0 0 0 1px ${color}30, inset 0 1px 0 ${color}20`;
    card.querySelector('.tech-card-glow').style.opacity = '1';
    card.querySelector('.tech-card-glow').style.background = `radial-gradient(circle at ${x}px ${y}px, ${color}25, transparent 70%)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
    card.style.borderColor = '';
    card.style.boxShadow = '';
    card.querySelector('.tech-card-glow').style.opacity = '0';
  };

  return (
    <div
      className="tech-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tech-card-glow" />
      <div className="tech-card-inner">
        <img src={icon} alt={name} className="tech-card-icon" loading="lazy" />
        <span className="tech-card-name">{name}</span>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('mobile');

  const current = skillCategories.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="badge">My Expertise</span>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Tools and technologies I use to build world-class mobile experiences
        </p>

        {/* Tech icons grid with 3D hover */}
        <div className="tech-grid">
          {techStack.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>

        {/* Skill bars */}
        <div className="skills-tabs">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-bars">
            {current.skills.map((skill) => (
              <div className="skill-bar-item" key={skill.name}>
                <div className="skill-bar-header">
                  <span className="skill-bar-name">{skill.name}</span>
                  <span className="skill-bar-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{
                      '--fill-width': `${skill.level}%`,
                      '--fill-color': skill.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="skills-summary">
            <div className="summary-card">
              <div className="summary-icon">🏆</div>
              <h4>Core Strength</h4>
              <p>React Native cross-platform mobile development with deep understanding of the JS bridge and new architecture.</p>
            </div>
            <div className="summary-card accent">
              <div className="summary-icon">⚡</div>
              <h4>Fast Learner</h4>
              <p>Constantly evolving with the ecosystem — Expo Router, Reanimated 3, NativeWind, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
