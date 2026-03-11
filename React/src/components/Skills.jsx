import {
  SiPython, SiCplusplus, SiOpenjdk, SiJavascript,
  SiReact, SiExpress, SiTailwindcss, SiHtml5,
  SiMongodb, SiPostgresql, SiGit, SiGithub,
  SiDocker, SiPostman, SiFigma,
} from 'react-icons/si';
import { FiCpu, FiUsers, FiTool, FiCode } from 'react-icons/fi';
import { skills } from '../data/portfolioData';

const iconMap = {
  SiPython, SiCplusplus, SiOpenjdk, SiJavascript,
  SiReact, SiExpress, SiTailwindcss, SiHtml5,
  SiMongodb, SiPostgresql, SiGit, SiGithub,
  SiDocker, SiPostman, SiFigma,
};

const categories = [
  { key: 'languages', title: 'Languages', icon: <FiCode size={20} />, items: skills.languages },
  { key: 'frameworks', title: 'Frameworks & Libraries', icon: <FiCpu size={20} />, items: skills.frameworks },
  { key: 'tools', title: 'Tools & Platforms', icon: <FiTool size={20} />, items: skills.tools },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          {categories.map((cat) => (
            <div key={cat.key}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                }}
              >
                {cat.icon}
                {cat.title}
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {cat.items.map((skill) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <div
                      key={skill.name}
                      className="glass-card skill-card"
                      style={{
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'default',
                      }}
                    >
                      {Icon && (
                        <Icon
                          size={28}
                          style={{ color: 'var(--accent-primary)', transition: 'color 0.2s' }}
                        />
                      )}
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 500,
                          color: 'var(--text-secondary)',
                          textAlign: 'center',
                        }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Technical + Soft Skills */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="soft-skills-grid">
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                }}
              >
                <FiCpu size={20} />
                Core Skills
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.technical.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '2rem',
                      border: '1px solid var(--border-color)',
                      background: 'var(--card-glass)',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                }}
              >
                <FiUsers size={20} />
                Soft Skills
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.soft.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '2rem',
                      border: '1px solid var(--border-color)',
                      background: 'var(--card-glass)',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .skill-card:hover svg {
            color: var(--accent-secondary) !important;
            transform: scale(1.15);
          }
          @media (max-width: 640px) {
            .soft-skills-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
