'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  HiHome,
  HiUser,
  HiCodeBracket,
  HiRocketLaunch,
  HiBriefcase,
  HiAcademicCap,
  HiEnvelope,
  HiMoon,
  HiSun,
  HiBars3,
  HiXMark,
} from 'react-icons/hi2';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import Image from 'next/image';
import styles from './styles/Navbar.module.css';

const navItems = [
  { label: 'Home', href: '#home', icon: <HiHome /> },
  { label: 'About', href: '#about', icon: <HiUser /> },
  { label: 'Skills', href: '#skills', icon: <HiCodeBracket /> },
  { label: 'Projects', href: '#projects', icon: <HiRocketLaunch /> },
  { label: 'Experience', href: '#experience', icon: <HiBriefcase /> },
  { label: 'Education', href: '#education', icon: <HiAcademicCap /> },
  { label: 'Contact', href: '#contact', icon: <HiEnvelope /> },
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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

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

        {/* Desktop Nav Links */}
        <ul className={styles.desktopNavLinks}>
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

        {/* Mobile Hamburger Button */}
        <button
          className={styles.menuButton}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiXMark /> : <HiBars3 />}
        </button>

        {/* Mobile Sidebar Menu */}
        <div className={`${styles.mobileSidebar} ${mobileOpen ? styles.open : ''}`}>
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarProfile}>
              <div className={styles.avatarWrapper}>
                <Image
                  src="/images/profile.jpg"
                  alt="Muhamad Saputra"
                  width={44}
                  height={44}
                  className={styles.sidebarAvatar}
                  unoptimized
                />
              </div>
              <div className={styles.sidebarUserInfo}>
                <span className={styles.sidebarName}>Muhamad Saputra</span>
                <span className={styles.sidebarRole}>Front-End Developer</span>
              </div>
            </div>
            <button
              className={styles.closeSidebarBtn}
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <HiXMark />
            </button>
          </div>

          <div className={styles.sidebarNav}>
            {navItems.map((item) => (
              <a
                key={item.href}
                className={`${styles.sidebarNavItem} ${
                  activeSection === item.href.replace('#', '') ? styles.activeItem : ''
                }`}
                onClick={() => handleNavClick(item.href)}
              >
                <span className={styles.sidebarNavIcon}>{item.icon}</span>
                <span className={styles.sidebarNavText}>{item.label}</span>
              </a>
            ))}
          </div>

          <div className={styles.sidebarFooter}>
            {mounted && (
              <button
                className={styles.sidebarThemeBtn}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <span className={styles.sidebarThemeIcon}>
                  {theme === 'dark' ? <HiSun style={{ color: '#f59e0b' }} /> : <HiMoon style={{ color: '#6366f1' }} />}
                </span>
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            )}

            <div className={styles.sidebarSocials}>
              <a
                href="https://github.com/Muhamadsaputra16"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sidebarSocialIcon}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/muhamad-saputra-854b30265"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sidebarSocialIcon}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:Muhammadsafutra33@gmail.com"
                className={styles.sidebarSocialIcon}
                aria-label="Email"
              >
                <HiEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Overlay Background */}
        <div
          className={`${styles.mobileOverlay} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(false)}
        />
      </div>
    </nav>
  );
}
