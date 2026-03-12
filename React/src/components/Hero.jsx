import { FiDownload, FiArrowDown } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';
import { Link } from 'react-scroll';
import { personalInfo, socialLinks } from '../data/portfolioData';
import profilePic from '../assets/profile_pic.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
      }}
    >
      {/* Background Gradient Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1))',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
        className="animate-blob"
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(168, 85, 247, 0.08))',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
        className="animate-blob"
      />
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '20%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(99, 102, 241, 0.06))',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
        className="animate-blob"
      />

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
        className="hero-content"
      >
        {/* Profile Picture - Left Side */}
        <div
          className="animate-fade-in-up stagger-1 hero-profile"
          style={{
            flexShrink: 0,
            opacity: 0,
            position: 'relative',
          }}
        >
          {/* Outer rotating gradient ring */}
          <div className="profile-ring-outer" style={{
            width: '310px',
            height: '310px',
            position: 'relative',
          }}>
            {/* Animated spinning border */}
            <div className="profile-spinner" style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              background: 'var(--accent-gradient)',
              animation: 'profileMorph 8s ease-in-out infinite, profileSpin 12s linear infinite',
              opacity: 0.8,
            }} />

            {/* Second counter-rotating ring */}
            <div style={{
              position: 'absolute',
              inset: '6px',
              borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
              border: '2px dashed var(--accent-primary)',
              animation: 'profileMorph 8s ease-in-out infinite reverse, profileSpin 18s linear infinite reverse',
              opacity: 0.4,
            }} />

            {/* Dark background behind image */}
            <div style={{
              position: 'absolute',
              inset: '12px',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              background: 'var(--bg-primary)',
              animation: 'profileMorph 8s ease-in-out infinite',
            }} />

            {/* Image container with matching morph */}
            <div style={{
              position: 'absolute',
              inset: '16px',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              overflow: 'hidden',
              animation: 'profileMorph 8s ease-in-out infinite',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2), inset 0 0 30px rgba(0,0,0,0.1)',
            }}>
              <img
                src={profilePic}
                alt={personalInfo.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Subtle overlay gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(160deg, transparent 40%, rgba(0,0,0,0.15) 100%)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Floating accent dots */}
            <div className="profile-dot" style={{
              position: 'absolute', top: '10%', right: '-5%',
              width: '14px', height: '14px', borderRadius: '50%',
              background: 'var(--accent-primary)',
              boxShadow: '0 0 20px var(--accent-primary)',
              animation: 'float 4s ease-in-out infinite',
            }} />
            <div className="profile-dot" style={{
              position: 'absolute', bottom: '15%', left: '-3%',
              width: '10px', height: '10px', borderRadius: '50%',
              background: 'var(--accent-secondary)',
              boxShadow: '0 0 15px var(--accent-secondary)',
              animation: 'float 5s ease-in-out 1s infinite',
            }} />
            <div className="profile-dot" style={{
              position: 'absolute', top: '50%', right: '-8%',
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'var(--accent-primary)',
              boxShadow: '0 0 12px var(--accent-primary)',
              animation: 'float 6s ease-in-out 2s infinite',
              opacity: 0.6,
            }} />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div style={{ textAlign: 'left', flex: 1 }}>
          {/* Greeting */}
          <div
            className="animate-fade-in-up stagger-2"
            style={{
              display: 'inline-block',
              padding: '0.5rem 1.25rem',
              borderRadius: '2rem',
              border: '1px solid var(--border-color)',
              background: 'var(--card-glass)',
              backdropFilter: 'blur(10px)',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              fontWeight: 500,
              opacity: 0,
            }}
          >
            👋 Hello, I'm
          </div>

          {/* Name */}
          <h1
            className="animate-fade-in-up stagger-3"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1rem',
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.03em',
              opacity: 0,
            }}
          >
            {personalInfo.name}
          </h1>

          {/* Title */}
          <h2
            className="animate-fade-in-up stagger-4"
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              opacity: 0,
            }}
          >
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p
            className="animate-fade-in-up stagger-5"
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              marginBottom: '2.5rem',
              lineHeight: 1.7,
              opacity: 0,
            }}
          >
            {personalInfo.tagline}. Currently pursuing {personalInfo.degree} at{' '}
            {personalInfo.university}.
          </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up stagger-5"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            marginBottom: '3rem',
            opacity: 0,
          }}
        >
          <Link
            to="projects"
            smooth={true}
            offset={-80}
            duration={500}
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '0.75rem',
              background: 'var(--accent-gradient)',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
            }}
            className="cta-primary"
          >
            View Projects <FiArrowDown size={16} />
          </Link>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '0.75rem',
              border: '1px solid var(--border-color)',
              background: 'var(--card-glass)',
              backdropFilter: 'blur(10px)',
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
            }}
            className="cta-secondary"
          >
            <FaGithub size={18} /> GitHub Profile
          </a>
        </div>

        {/* Social Links */}
        <div
          className="animate-fade-in-up stagger-6"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'flex-start',
            opacity: 0,
          }}
        >
          {[
            { icon: <FaLinkedin size={20} />, href: socialLinks.linkedin, label: 'LinkedIn' },
            { icon: <FaGithub size={20} />, href: socialLinks.github, label: 'GitHub' },
            { icon: <SiLeetcode size={20} />, href: socialLinks.leetcode, label: 'LeetCode' },
            { icon: <SiGeeksforgeeks size={20} />, href: socialLinks.gfg, label: 'GeeksforGeeks' },
            { icon: <SiHackerrank size={20} />, href: socialLinks.hackerrank, label: 'HackerRank' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{
                padding: '0.75rem',
                borderRadius: '0.75rem',
                border: '1px solid var(--border-color)',
                background: 'var(--card-glass)',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              }}
              className="social-icon"
            >
              {social.icon}
            </a>
          ))}
        </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-muted)',
          fontSize: '0.8rem',
        }}
        className="animate-float"
      >
        <span>Scroll Down</span>
        <div
          style={{
            width: '24px',
            height: '40px',
            borderRadius: '12px',
            border: '2px solid var(--text-muted)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px',
          }}
        >
          <div
            style={{
              width: '3px',
              height: '8px',
              borderRadius: '2px',
              background: 'var(--accent-primary)',
              animation: 'fadeInUp 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes profileMorph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 58% 42% 57% 43% / 62% 55% 45% 38%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        }
        @keyframes profileSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .cta-primary:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.4) !important;
        }
        .cta-secondary:hover {
          border-color: var(--accent-primary) !important;
          color: var(--accent-primary) !important;
          transform: translateY(-2px) !important;
        }
        .social-icon:hover {
          color: var(--accent-primary) !important;
          border-color: var(--accent-primary) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 15px var(--shadow-color) !important;
        }
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column !important;
            text-align: center !important;
          }
          .hero-content > div:last-child {
            text-align: center !important;
          }
          .hero-content > div:last-child > div[class*="stagger-5"],
          .hero-content > div:last-child > div[class*="stagger-6"] {
            justify-content: center !important;
          }
          .profile-ring-outer {
            width: 230px !important;
            height: 230px !important;
          }
          .profile-dot {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
