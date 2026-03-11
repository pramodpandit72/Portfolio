import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { achievements } from '../data/portfolioData';

const icons = { LeetCode: SiLeetcode, GeeksforGeeks: SiGeeksforgeeks, HackerRank: SiHackerrank };

export default function Achievements() {
  return (
    <section id="achievements" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Competitive programming milestones</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', maxWidth: '900px', margin: '0 auto' }}>
          {achievements.map((a) => {
            const Icon = icons[a.title];
            return (
              <a key={a.title} href={a.link} target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textDecoration: 'none', cursor: 'pointer' }}>
                <div style={{ width: 60, height: 60, borderRadius: '1rem', background: `${a.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {Icon && <Icon size={28} style={{ color: a.color }} />}
                </div>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: a.color, fontFamily: 'var(--font-code)' }}>{a.stat}</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{a.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{a.description}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-primary)', fontSize: '0.82rem', fontWeight: 500 }}>
                  View Profile <FiExternalLink size={14} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
