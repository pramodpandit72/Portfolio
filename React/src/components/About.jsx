import { FiCode, FiAward, FiBookOpen } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const stats = [
  { icon: <FiCode size={22} />, value: '450+', label: 'LeetCode Problems' },
  { icon: <FiAward size={22} />, value: '5★', label: 'HackerRank Badge' },
  { icon: <FiBookOpen size={22} />, value: '2+', label: 'Major Projects' },
];

export default function About() {
  const titleRef = useScrollAnimation();
  const cardRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  return (
    <section id="about" className="section-container">
      <div ref={titleRef} className="scroll-animate">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me a little better</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {/* About Text */}
        <div
          ref={cardRef}
          className="glass-card scroll-animate-left"
          style={{ padding: '2rem' }}
        >
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            {personalInfo.about}
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="scroll-animate"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card"
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '0.75rem',
                  background: 'var(--glow-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                }}
              >
                {stat.icon}
              </div>
              <span
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  background: 'var(--accent-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
