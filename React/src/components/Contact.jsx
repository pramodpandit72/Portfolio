import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo, socialLinks } from '../data/portfolioData';

const socials = [
  { icon: <FaLinkedin size={20} />, href: socialLinks.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { icon: <FaGithub size={20} />, href: socialLinks.github, label: 'GitHub', color: '#6e5494' },
  { icon: <SiLeetcode size={20} />, href: socialLinks.leetcode, label: 'LeetCode', color: '#FFA116' },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Let's connect and build something amazing together</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }} className="contact-grid">
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: <FiMail size={18} />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: <FiPhone size={18} />, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: <FiMapPin size={18} />, text: personalInfo.location },
                ].map((item) => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 40, height: 40, borderRadius: '0.6rem', background: 'var(--glow-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                      >{item.text}</a>
                    ) : (
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>Follow Me</h3>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    style={{ width: 48, height: 48, borderRadius: '0.75rem', border: '1px solid var(--border-color)', background: 'var(--card-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s', textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >{s.icon}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>Send a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
              {[
                { name: 'name', placeholder: 'Your Name', type: 'text' },
                { name: 'email', placeholder: 'Your Email', type: 'email' },
              ].map((f) => (
                <input key={f.name} type={f.type} placeholder={f.placeholder}
                  style={{ padding: '0.75rem 1rem', borderRadius: '0.6rem', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s', fontFamily: 'var(--font-body)' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              ))}
              <textarea placeholder="Your Message" rows={4}
                style={{ padding: '0.75rem 1rem', borderRadius: '0.6rem', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s', fontFamily: 'var(--font-body)' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
              <button type="submit" style={{ padding: '0.8rem 1.5rem', borderRadius: '0.6rem', background: 'var(--accent-gradient)', color: 'white', border: 'none', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 15px rgba(99,102,241,0.3)' }}
                onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; }}
              >
                Send Message <FiSend size={16} />
              </button>
            </form>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
