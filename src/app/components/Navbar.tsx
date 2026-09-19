'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi2';
import styles from './styles/Navbar.module.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={styles.navContainer}>
        <div className={styles.logo} onClick={() => handleNavClick('#home')}>
          Muhamad<span style={{ fontWeight: 500, WebkitTextFillColor: 'var(--text-primary)' }}> Saputra</span>
          <span style={{ WebkitTextFillColor: 'var(--primary-500)' }}>.</span>
        </div>

        <ul className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className={`${styles.navLink} ${activeSection === item.href.replace('#', '') ? styles.active : ''}`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
          {mounted && (
            <button
              className={styles.themeToggle}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <HiSun /> : <HiMoon />}
            </button>
          )}
        </ul>

        <div className={styles.desktopTheme}>
          {mounted && (
            <button
              className={styles.themeToggle}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              style={{ display: 'none' }}
            >
              {theme === 'dark' ? <HiSun /> : <HiMoon />}
            </button>
          )}
        </div>

        <button
          className={`${styles.menuButton} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </button>

        <div
          className={`${styles.mobileOverlay} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(false)}
        />
      </div>
    </nav>
  );
}
