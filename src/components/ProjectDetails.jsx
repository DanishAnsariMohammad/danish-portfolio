import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projectsData';
import './ProjectDetails.css';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="project-details-page not-found">
        <div className="container details-wrap">
          <span className="badge">Project</span>
          <h1 className="section-title">Project Not Found</h1>
          <p className="details-subtitle">
            The project URL is invalid or this project is not available in the current portfolio list.
          </p>
          <Link className="details-btn primary" to="/">
            Back to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  const isPublished = Boolean(project.storeUrl);

  return (
    <section className="project-details-page">
      <div className="container details-wrap">
        <div className="details-topbar">
          <Link className="details-btn ghost" to="/">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Portfolio
          </Link>
          <span className={`project-status ${isPublished ? 'live' : 'private'}`}>
            <span className="status-dot" />
            {project.status}
          </span>
        </div>

        <article className="details-card">
          <header className="details-hero" style={{ background: project.accent }}>
            <div className="details-overlay" />

            <div className="details-hero-content">
              <div className="details-meta">
                <span className="detail-kicker">{project.category}</span>
                <span className="detail-publisher">{project.publisher}</span>
              </div>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>

            <div className="details-media">
              {project.image ? (
                <img src={project.image} alt={`${project.title} app icon`} loading="lazy" />
              ) : (
                <div className="project-monogram">{project.monogram}</div>
              )}
            </div>
          </header>

          <div className="details-body">
            <section className="detail-block">
              <h2>Tech Stack</h2>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="detail-block">
              <h2>Key Highlights</h2>
              <ul>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="detail-block">
              <h2>Issues Faced In This Project</h2>
              <ul>
                {project.issuesFaced.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="detail-block">
              <h2>How I Solved Them</h2>
              <ul>
                {project.solutions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="detail-block">
              <h2>Results</h2>
              <ul>
                {project.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <div className="details-actions">
              <a
                className="details-btn outline"
                href={project.developerUrl}
                target={project.developerUrl.startsWith('http') ? '_blank' : undefined}
                rel={project.developerUrl.startsWith('http') ? 'noreferrer noopener' : undefined}
              >
                Publisher Profile
              </a>

              {isPublished ? (
                <a className="details-btn primary" href={project.storeUrl} target="_blank" rel="noreferrer noopener">
                  View on Play Store
                </a>
              ) : (
                <Link className="details-btn primary" to="/#contact">
                  Contact For Demo
                </Link>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
