import { FiMapPin, FiCalendar, FiBookOpen } from 'react-icons/fi';
import { education } from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Education() {
  const titleRef = useScrollAnimation();
  return (
    <section id="education" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <div ref={titleRef} className="scroll-animate">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic journey</p>
        </div>

        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          {/* Timeline Line */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--border-color)',
            }}
            className="timeline-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {education.map((edu, index) => (
              <div
                key={edu.institution}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  position: 'relative',
                }}
              >
                {/* Timeline Dot */}
                <div
                  style={{
                    minWidth: '42px',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '1.75rem',
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: edu.current ? 'var(--accent-primary)' : 'var(--border-color)',
                      border: '3px solid var(--bg-secondary)',
                      boxShadow: edu.current ? '0 0 15px var(--glow-color)' : 'none',
                    }}
                    className={edu.current ? 'animate-pulse-glow' : ''}
                  />
                </div>

                {/* Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {edu.institution}
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
                        <FiMapPin size={13} />
                        {edu.location}
                      </div>
                    </div>
                    {edu.current && (
                      <span
                        style={{
                          padding: '0.2rem 0.6rem',
                          borderRadius: '2rem',
                          background: 'var(--glow-color)',
                          color: 'var(--accent-primary)',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <FiBookOpen size={14} />
                    {edu.degree}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 600,
                        color: 'var(--accent-primary)',
                        fontSize: '0.9rem',
                      }}
                    >
                      {edu.score}
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.82rem',
                      }}
                    >
                      <FiCalendar size={13} />
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
