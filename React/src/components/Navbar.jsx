import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { navLinks } from '../data/portfolioData';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        background: scrolled ? 'var(--bg-nav)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        boxShadow: scrolled ? '0 4px 30px var(--shadow-color)' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4.5rem',
          }}
        >
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <span
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}
            >
              &lt;PP /&gt;
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active-nav-link"
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={{
                padding: '0.6rem',
                borderRadius: '0.75rem',
                border: '1px solid var(--border-color)',
                background: 'var(--card-glass)',
                color: 'var(--accent-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                marginLeft: '0.5rem',
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="mobile-nav-toggle">
            <button
              onClick={toggleTheme}
              style={{
                padding: '0.6rem',
                borderRadius: '0.75rem',
                border: '1px solid var(--border-color)',
                background: 'var(--card-glass)',
                color: 'var(--accent-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                padding: '0.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                background: 'transparent',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          maxHeight: isOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          background: 'var(--bg-nav)',
          backdropFilter: 'blur(20px)',
          borderTop: isOpen ? '1px solid var(--border-color)' : 'none',
        }}
        className="mobile-menu"
      >
        <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                display: 'block',
              }}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav-toggle { display: none !important; }
        .mobile-menu { display: none !important; }

        .nav-link:hover {
          color: var(--accent-primary) !important;
          background: var(--glow-color) !important;
        }

        .active-nav-link {
          color: var(--accent-primary) !important;
          background: var(--glow-color) !important;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
          .mobile-menu { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
