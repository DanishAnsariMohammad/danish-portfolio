import { useMemo, useState } from 'react';
import './Projects.css';

const altimateDeveloperUrl =
  'https://play.google.com/store/apps/developer?id=ALTIMATE+INTEGRATED+SOLUTIONS+PRIVATE+LIMITED&hl=en_IN';
const gOrdinateurDeveloperUrl =
  'https://play.google.com/store/apps/developer?id=G-Ordinateur+PVT+LTD&hl=en_IN';

const projects = [
  {
    id: 1,
    title: 'BMC VHD',
    category: 'Civic Tech',
    publisher: 'Altimate Integrated Solutions',
    description:
      'A field-ready civic workflow app built for fast verification, structured record capture, and smoother public-service operations on mobile.',
    tags: ['React Native', 'Mobile Forms', 'Verification', 'Production'],
    highlights: ['Google Play release', 'Operational workflow', 'Fast verification'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.vhdbmc&hl=en_IN',
    developerUrl: altimateDeveloperUrl,
    image: '/project-icons/bmc-vhd.png',
    accent: 'linear-gradient(135deg, #0f766e 0%, #38bdf8 100%)',
    monogram: 'BV',
  },
  {
    id: 2,
    title: 'My UMC',
    category: 'Civic Tech',
    publisher: 'Altimate Integrated Solutions',
    description:
      'A citizen and utility-oriented app experience centered around identity-driven flows, streamlined access, and mobile-first public service interactions.',
    tags: ['React Native', 'Authentication', 'Service Access', 'Production'],
    highlights: ['Published app', 'Identity-first UX', 'Cross-platform delivery'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.biometricface&hl=en_IN',
    developerUrl: altimateDeveloperUrl,
    image: '/project-icons/my-umc.png',
    accent: 'linear-gradient(135deg, #1d4ed8 0%, #8b5cf6 100%)',
    monogram: 'MU',
  },
  {
    id: 3,
    title: 'UMC Contractual App',
    category: 'Enterprise',
    publisher: 'Altimate Integrated Solutions',
    description:
      'An internal operations app for contractual teams with structured task handling, workforce visibility, and mobile-first coordination.',
    tags: ['React Native', 'Enterprise', 'Team Workflow', 'Production'],
    highlights: ['Operational efficiency', 'Internal workflow', 'Published release'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.umc.contractapp&hl=en_IN',
    developerUrl: altimateDeveloperUrl,
    image: '/project-icons/umc-contractual.png',
    accent: 'linear-gradient(135deg, #0f172a 0%, #2563eb 100%)',
    monogram: 'UC',
  },
  {
    id: 4,
    title: 'Visitor Management',
    category: 'Enterprise',
    publisher: 'Altimate Integrated Solutions',
    description:
      'A secure visitor handling app that supports check-in flows, approvals, and mobile record management for organizations.',
    tags: ['React Native', 'Security', 'Approvals', 'Production'],
    highlights: ['Visitor logs', 'Approval flow', 'Business utility'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.techaltimate.visitormanagement&hl=en_IN',
    developerUrl: altimateDeveloperUrl,
    image: '/project-icons/visitor-management.png',
    accent: 'linear-gradient(135deg, #334155 0%, #06b6d4 100%)',
    monogram: 'VM',
  },
  {
    id: 5,
    title: 'Tech Altimate',
    category: 'Business',
    publisher: 'Altimate Integrated Solutions',
    description:
      'A business-facing mobile product that consolidates services, access points, and company touchpoints into one polished app experience.',
    tags: ['React Native', 'Business App', 'Services', 'Production'],
    highlights: ['Brand experience', 'Service discovery', 'Published release'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.techaltimate.app&hl=en_IN',
    developerUrl: altimateDeveloperUrl,
    image: '/project-icons/tech-altimate.png',
    accent: 'linear-gradient(135deg, #111827 0%, #ec4899 100%)',
    monogram: 'TA',
  },
  {
    id: 6,
    title: 'Liveness',
    category: 'Identity',
    publisher: 'Altimate Integrated Solutions',
    description:
      'A mobile identity verification experience focused on liveness and trust flows, built for reliable onboarding and validation journeys.',
    tags: ['React Native', 'Face Verification', 'Identity', 'Production'],
    highlights: ['Trust workflow', 'Identity validation', 'Published app'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.livepraman&hl=en_IN',
    developerUrl: altimateDeveloperUrl,
    image: '/project-icons/liveness.png',
    accent: 'linear-gradient(135deg, #7c3aed 0%, #f43f5e 100%)',
    monogram: 'LI',
  },
  {
    id: 7,
    title: 'GO-HRMS',
    category: 'Enterprise',
    publisher: 'G-Ordinateur PVT LTD',
    description:
      'A human resource management mobile app for attendance, team visibility, and day-to-day workforce processes.',
    tags: ['React Native', 'HRMS', 'Attendance', 'Production'],
    highlights: ['HR workflow', 'Workforce visibility', 'Published release'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.gopl&hl=en_IN',
    developerUrl: gOrdinateurDeveloperUrl,
    image: '/project-icons/go-hrms.png',
    accent: 'linear-gradient(135deg, #1e293b 0%, #14b8a6 100%)',
    monogram: 'GH',
  },
  {
    id: 8,
    title: 'Prayers for All',
    category: 'Spiritual',
    publisher: 'G-Ordinateur PVT LTD',
    description:
      'A devotional mobile experience for prayer-focused engagement, spiritual access, and simple user journeys across devices.',
    tags: ['React Native', 'Temple App', 'Community', 'Production'],
    highlights: ['Temple use case', 'Simple UX', 'Published on Play Store'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.tampleprayer&hl=en_IN',
    developerUrl: gOrdinateurDeveloperUrl,
    image: '/project-icons/prayers-for-all.png',
    accent: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    monogram: 'PA',
  },
  {
    id: 9,
    title: 'Feedback',
    category: 'Utility',
    publisher: 'G-Ordinateur PVT LTD',
    description:
      'A lightweight feedback collection app designed for service-quality capture, faster reporting, and mobile-first responses in the field.',
    tags: ['React Native', 'Forms', 'Reporting', 'Production'],
    highlights: ['Fast feedback capture', 'Reporting flow', 'Public-service utility'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.railwayfeedback&hl=en_IN',
    developerUrl: gOrdinateurDeveloperUrl,
    image: '/project-icons/feedback.png',
    accent: 'linear-gradient(135deg, #0f172a 0%, #f97316 100%)',
    monogram: 'FB',
  },
  {
    id: 10,
    title: 'Biocrux',
    category: 'Lifestyle',
    publisher: 'Biocrux',
    description:
      'A lifestyle product for the Biocrux ecosystem, positioned as a 360-degree digital experience for people connected to nature-focused services.',
    tags: ['React Native', 'Lifestyle', 'Consumer App', 'Production'],
    highlights: ['10K+ downloads', 'Published on Google Play', 'Consumer-facing product'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=biocrux.co&hl=en_IN',
    developerUrl: 'https://play.google.com/store/apps/details?id=biocrux.co&hl=en_IN',
    image: '/project-icons/biocrux.png',
    accent: 'linear-gradient(135deg, #166534 0%, #84cc16 100%)',
    monogram: 'BX',
  },
  {
    id: 11,
    title: 'Questpix JEE (Main & Advanced)',
    category: 'Education',
    publisher: 'Questpix',
    description:
      'An exam-prep mobile app built to help JEE students access questions, practice material, and fast answer workflows in a focused learning experience.',
    tags: ['React Native', 'EdTech', 'Exam Prep', 'Production'],
    highlights: ['5K+ downloads', '4.8 rating', 'Published on Google Play'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.questpix.app&hl=en_IN',
    developerUrl: 'https://play.google.com/store/apps/details?id=com.questpix.app&hl=en_IN',
    image: '/project-icons/questpix.png',
    accent: 'linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%)',
    monogram: 'QP',
  },
  {
    id: 12,
    title: 'Groupfit',
    category: 'Fitness',
    publisher: 'GroupFit Technologies Inc.',
    description:
      'A fitness and member-engagement app focused on schedules, class participation, and an energetic mobile experience for active communities.',
    tags: ['React Native', 'Fitness', 'In-Person Training', 'Production'],
    highlights: ['Published on Google Play', '30+ activities', 'Book certified trainers'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.newcustomer&hl=en_IN',
    developerUrl: 'https://play.google.com/store/apps/dev?id=5050495648852538480',
    image: '/project-icons/groupfit.png',
    accent: 'linear-gradient(135deg, #111827 0%, #22c55e 100%)',
    monogram: 'GF',
  },
];

const categories = ['All', 'Civic Tech', 'Enterprise', 'Business', 'Identity', 'Spiritual', 'Utility', 'Lifestyle', 'Education', 'Fitness'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="badge">Published Work</span>
        <h2 className="section-title">Real Apps, Real Releases</h2>
        <p className="section-subtitle">
          A curated showcase of the mobile products I have built across civic tech, enterprise workflows,
          identity, temple experiences, lifestyle, and fitness.
        </p>

        <div className="projects-summary">
          <div className="summary-tile">
            <strong>12+</strong>
            <span>Projects showcased</span>
          </div>
          <div className="summary-tile">
            <strong>12</strong>
            <span>Published Play Store apps with downloaded icons</span>
          </div>
          <div className="summary-tile wide">
            <strong>React Native</strong>
            <span>Delivered as polished cross-platform products with production-focused UI and workflows</span>
          </div>
        </div>

        <div className="projects-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const isPublished = Boolean(project.storeUrl);

            return (
              <article key={project.id} className="project-card">
                <div className="project-cover" style={{ background: project.accent }}>
                  <div className="project-cover-overlay" />
                  <div className="project-cover-top">
                    <span className="project-publisher">{project.publisher}</span>
                    <span className={`project-status ${isPublished ? 'live' : 'private'}`}>
                      <span className="status-dot" />
                      {project.status}
                    </span>
                  </div>

                  <div className="project-cover-media">
                    {project.image ? (
                      <img src={project.image} alt={`${project.title} app icon`} loading="lazy" />
                    ) : (
                      <div className="project-monogram">{project.monogram}</div>
                    )}
                  </div>

                  <div className="project-cover-text">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                </div>

                <div className="project-body">
                  <p className="project-desc">{project.description}</p>

                  <div className="project-highlights">
                    {project.highlights.map((item) => (
                      <span key={item} className="highlight-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-footer">
                  <a
                    className="project-btn outline"
                    href={project.developerUrl}
                    target={project.developerUrl.startsWith('http') ? '_blank' : undefined}
                    rel={project.developerUrl.startsWith('http') ? 'noreferrer noopener' : undefined}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    {project.developerUrl.startsWith('http') ? 'Publisher' : 'Contact'}
                  </a>

                  {isPublished ? (
                    <a
                      className="project-btn primary"
                      href={project.storeUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                      View on Play Store
                    </a>
                  ) : (
                    <a className="project-btn primary" href="#contact">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2 11 13" />
                        <path d="m22 2-7 20-4-9-9-4Z" />
                      </svg>
                      Request Demo
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
