import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { categories, projects } from '../data/projectsData';

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
                  <Link className="project-btn detail" to={`/projects/${project.slug}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 12h18" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                    Project Details
                  </Link>

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
