import { FiExternalLink, FiGithub, FiCalendar, FiGlobe } from 'react-icons/fi';
import { projects, training } from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Projects() {
  const titleRef = useScrollAnimation();
  const trainingRef = useScrollAnimation();
  return (
    <section id="projects">
      <div className="section-container">
        <div ref={titleRef} className="scroll-animate">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've built and worked on</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto 4rem',
          }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card"
              style={{
                padding: '0',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Header gradient bar */}
              <div
                style={{
                  height: '4px',
                  background: 'var(--accent-gradient)',
                  width: '100%',
                }}
              />

              <div style={{ padding: '1.75rem' }}>
                {/* Title Row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {project.title}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.82rem',
                      }}
                    >
                      <FiCalendar size={13} />
                      {project.period}
                    </div>
                  </div>
                  {project.featured && (
                    <span
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '2rem',
                        background: 'var(--glow-color)',
                        color: 'var(--accent-primary)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                  }}
                >
                  {project.description.map((point, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        paddingLeft: '1rem',
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.5em',
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: 'var(--accent-primary)',
                        }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.3rem 0.7rem',
                        borderRadius: '0.4rem',
                        background: 'var(--glow-color)',
                        color: 'var(--accent-primary)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-code)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--accent-primary)',
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: 'gap 0.2s ease',
                    }}
                    className="project-link"
                  >
                    <FiGithub size={16} />
                    GitHub
                    <FiExternalLink size={14} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: 'var(--accent-primary)',
                        fontSize: '0.88rem',
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'gap 0.2s ease',
                      }}
                      className="project-link"
                    >
                      <FiGlobe size={16} />
                      Live Demo
                      <FiExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training Section */}
        <div ref={trainingRef} className="scroll-animate">
          <h2 className="section-title">Training & Certifications</h2>
          <p className="section-subtitle">Courses and training I've completed</p>
        </div>

        {training.map((item) => (
          <div
            key={item.title}
            className="glass-card"
            style={{
              maxWidth: '900px',
              margin: '0 auto 1.5rem',
              padding: '1.75rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: '1rem',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  {item.provider} • {item.type}
                </span>
              </div>
              <span
                style={{
                  padding: '0.3rem 0.75rem',
                  borderRadius: '2rem',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                }}
              >
                {item.date}
              </span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {item.highlights.map((point, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    paddingLeft: '1rem',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '0.5em',
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: 'var(--accent-primary)',
                    }}
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '0.3rem 0.7rem',
                    borderRadius: '0.4rem',
                    background: 'var(--glow-color)',
                    color: 'var(--accent-primary)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-code)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}

        <style>{`
          .project-link:hover {
            gap: 0.7rem !important;
          }
          @media (max-width: 640px) {
            .projects-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
