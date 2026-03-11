import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-scroll';
import { socialLinks, navLinks } from '../data/portfolioData';

const socials = [
  { icon: <FaLinkedin size={18} />, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: <FaGithub size={18} />, href: socialLinks.github, label: 'GitHub' },
  { icon: <SiLeetcode size={18} />, href: socialLinks.leetcode, label: 'LeetCode' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }} className="footer-grid">
          {/* Brand */}
          <div>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>&lt;PP /&gt;</span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.75rem', lineHeight: 1.6 }}>
              Full Stack Developer passionate about building beautiful, functional web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.95rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((link) => (
                <Link key={link.name} to={link.to} smooth={true} offset={-80} duration={500}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', cursor: 'pointer', transition: 'color 0.2s', textDecoration: 'none' }}
                  className="footer-link"
                >{link.name}</Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.95rem' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 40, height: 40, borderRadius: '0.6rem', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s', textDecoration: 'none' }}
                  className="footer-social"
                >{s.icon}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            © 2026 Pramod Pandit. Built with <FaHeart size={12} style={{ color: '#ef4444', verticalAlign: 'middle', margin: '0 2px' }} /> using React & Tailwind CSS
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--accent-primary) !important; }
        .footer-social:hover { color: var(--accent-primary) !important; border-color: var(--accent-primary) !important; transform: translateY(-2px); }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; text-align: center; } .footer-grid > div { align-items: center; } .footer-grid div:nth-child(2) div, .footer-grid div:nth-child(3) div { justify-content: center; } }
      `}</style>
    </footer>
  );
}
