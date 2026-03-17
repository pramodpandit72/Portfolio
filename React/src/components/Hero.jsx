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
      <div className="hero-grid" />

      {[...Array(9)].map((_, index) => (
        <span
          key={`hero-particle-${index}`}
          className="hero-particle"
          style={{
            '--left': `${8 + index * 10}%`,
            '--top': `${12 + (index % 3) * 24}%`,
            '--size': `${4 + (index % 4) * 2}px`,
            '--delay': `${index * 0.35}s`,
            '--duration': `${3.8 + (index % 5) * 1.2}s`,
          }}
        />
      ))}

      {/* Background Gradient Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(34, 197, 94, 0.12))',
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
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.14), rgba(56, 189, 248, 0.1))',
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
          background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(34, 197, 94, 0.08))',
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
          flexDirection: 'row-reverse',
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
          <div className="profile-ring-outer" style={{
            width: '290px',
            height: '360px',
            position: 'relative',
            borderRadius: '50%',
            background: 'var(--accent-gradient)',
            padding: '4px',
            boxShadow: '0 18px 42px var(--shadow-color)',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              background: 'var(--bg-card)',
            }}>
              <img
                src={profilePic}
                alt={personalInfo.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div style={{ textAlign: 'left', flex: 1 }}>
          {/* Name */}
          <h1
            className="animate-fade-in-up stagger-3 hero-name"
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
            className="animate-fade-in-up stagger-4 hero-title"
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

          <p
            className="intro-animated animate-fade-in-up stagger-5"
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              color: 'var(--accent-primary)',
              marginBottom: '0.9rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              opacity: 0,
            }}
          >
            <span className="intro-reveal">Building modern, scalable web experiences.</span>
          </p>

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
            href="/Pramod%20Pandit.pdf"
            download="Pramod Pandit.pdf"
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
            <FiDownload size={18} /> Download CV
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

      <style>{`
        @keyframes gridDrift {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(42px, 42px, 0);
          }
        }
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-16px) scale(1.15);
            opacity: 0.9;
          }
        }
        @keyframes neonShift {
          0%,
          100% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 0 rgba(56, 189, 248, 0));
          }
          50% {
            background-position: 100% 50%;
            filter: drop-shadow(0 0 12px rgba(56, 189, 248, 0.35));
          }
        }
        @keyframes holoFlicker {
          0%, 100% { opacity: 1; }
          48% { opacity: 0.98; }
          50% { opacity: 0.85; }
          52% { opacity: 1; }
        }
        @keyframes revealText {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }
        @keyframes introGlow {
          0%, 100% {
            text-shadow: 0 0 0 rgba(56, 189, 248, 0);
            transform: translateY(0);
          }
          50% {
            text-shadow: 0 0 14px rgba(56, 189, 248, 0.35);
            transform: translateY(-2px);
          }
        }
        .hero-grid {
          position: absolute;
          inset: -20%;
          z-index: 0;
          background-image:
            linear-gradient(rgba(56, 189, 248, 0.11) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.09) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.65), transparent 72%);
          animation: gridDrift 16s linear infinite;
          pointer-events: none;
        }
        .hero-particle {
          position: absolute;
          left: var(--left);
          top: var(--top);
          width: var(--size);
          height: var(--size);
          border-radius: 999px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.85), rgba(56, 189, 248, 0));
          box-shadow: 0 0 18px rgba(56, 189, 248, 0.4);
          z-index: 1;
          animation: particleFloat var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
          pointer-events: none;
        }
        .hero-name {
          background-size: 220% 220% !important;
          animation: fadeInUp 0.6s ease forwards, neonShift 6s ease-in-out infinite, holoFlicker 5.5s linear infinite;
        }
        .hero-title {
          position: relative;
          display: inline-block;
        }
        .hero-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
          opacity: 0.65;
          transform-origin: left;
          animation: revealText 1.2s ease 0.9s both;
        }
        .intro-reveal {
          display: inline-block;
          animation: revealText 1.1s steps(28, end) 0.8s both;
        }
        .intro-animated {
          animation: fadeInUp 0.6s ease forwards, introGlow 3.2s ease-in-out infinite;
        }
        .cta-primary:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 30px rgba(56, 189, 248, 0.32) !important;
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
        @media (prefers-reduced-motion: reduce) {
          .hero-grid,
          .hero-particle,
          .hero-name,
          .hero-title::after,
          .intro-reveal,
          .intro-animated {
            animation: none !important;
          }
        }
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column-reverse !important;
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
            width: 220px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
