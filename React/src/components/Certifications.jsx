import { FiAward, FiCalendar } from 'react-icons/fi';
import { certificates } from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const providerColors = {
  NPTEL: '#1a73e8',
  Coursera: '#0056d2',
  'CSE Pathshala': '#e63946',
};

export default function Certifications() {
  const titleRef = useScrollAnimation();
  return (
    <section id="certifications">
      <div className="section-container">
        <div ref={titleRef} className="scroll-animate">
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle">Professional certifications earned</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
          className="cert-grid"
        >
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '0.6rem',
                    background: 'var(--glow-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                  }}
                >
                  <FiAward size={20} />
                </div>
                <span
                  style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '0.4rem',
                    background: `${providerColors[cert.provider] || 'var(--accent-primary)'}15`,
                    color: providerColors[cert.provider] || 'var(--accent-primary)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                  }}
                >
                  {cert.provider}
                </span>
              </div>

              <h3
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 1.4,
                }}
              >
                {cert.title}
              </h3>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.8rem',
                  marginTop: 'auto',
                }}
              >
                <FiCalendar size={13} />
                {cert.date}
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 640px) {
            .cert-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
