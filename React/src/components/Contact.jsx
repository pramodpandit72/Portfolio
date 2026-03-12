import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';
import { personalInfo, socialLinks } from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const socials = [
  { icon: <FaLinkedin size={20} />, href: socialLinks.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { icon: <FaGithub size={20} />, href: socialLinks.github, label: 'GitHub', color: '#6e5494' },
  { icon: <SiLeetcode size={20} />, href: socialLinks.leetcode, label: 'LeetCode', color: '#FFA116' },
  { icon: <SiGeeksforgeeks size={20} />, href: socialLinks.gfg, label: 'GeeksforGeeks', color: '#2F8D46' },
  { icon: <SiHackerrank size={20} />, href: socialLinks.hackerrank, label: 'HackerRank', color: '#00EA64' },
];

const EMAILJS_SERVICE_ID = 'service_1ad790p';
const EMAILJS_TEMPLATE_ID = 'template_6ue4dib';
const EMAILJS_PUBLIC_KEY = '9C6B4WtzlmipqtstH';

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const sectionRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  const formCardRef = useScrollAnimation();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.from_name.trim() || !formData.from_email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or email directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-container">
        <div ref={sectionRef} className="scroll-animate">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Let's connect and build something amazing together</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }} className="contact-grid">
          {/* Contact Info */}
          <div ref={infoRef} className="scroll-animate-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    style={{ width: 48, height: 48, borderRadius: '0.75rem', border: '1px solid var(--border-color)', background: 'var(--card-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.3s', textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 8px 20px ${s.color}25`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >{s.icon}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formCardRef} className="scroll-animate-right">
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>Send a Message</h3>
              <form ref={formRef} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
                <input name="from_name" type="text" placeholder="Your Name" value={formData.from_name} onChange={handleChange} required
                  style={{ padding: '0.75rem 1rem', borderRadius: '0.6rem', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', fontFamily: 'var(--font-body)' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.boxShadow = '0 0 0 3px var(--glow-color)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'none'; }}
                />
                <input name="from_email" type="email" placeholder="Your Email" value={formData.from_email} onChange={handleChange} required
                  style={{ padding: '0.75rem 1rem', borderRadius: '0.6rem', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', fontFamily: 'var(--font-body)' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.boxShadow = '0 0 0 3px var(--glow-color)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'none'; }}
                />
                {/* Hidden field for recipient */}
                <input type="hidden" name="to_email" value="nwdpramod12305901@gmail.com" />
                <textarea name="message" placeholder="Your Message" rows={4} value={formData.message} onChange={handleChange} required
                  style={{ padding: '0.75rem 1rem', borderRadius: '0.6rem', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s, box-shadow 0.2s', fontFamily: 'var(--font-body)' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.boxShadow = '0 0 0 3px var(--glow-color)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'none'; }}
                />

                {status.message && (
                  <div className={`form-status ${status.type}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    {status.type === 'success' ? <FiCheck size={16} /> : <FiAlertCircle size={16} />}
                    {status.message}
                  </div>
                )}

                <button type="submit" disabled={loading}
                  style={{
                    padding: '0.8rem 1.5rem', borderRadius: '0.6rem', background: loading ? 'var(--text-muted)' : 'var(--accent-gradient)', color: 'white', border: 'none', fontSize: '0.95rem', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 15px var(--shadow-color)', opacity: loading ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => { if (!loading) e.target.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; }}
                >
                  {loading ? 'Sending...' : 'Send Message'} {!loading && <FiSend size={16} />}
                </button>
              </form>
            </div>
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
