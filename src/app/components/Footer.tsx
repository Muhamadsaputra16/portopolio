'use client';

import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import { HiEnvelope } from 'react-icons/hi2';
import styles from './styles/Footer.module.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerLogo}>
          <span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Muhamad</span>
          <span style={{ fontWeight: 500 }}> Saputra</span>
          <span className={styles.footerLogoAccent}>.</span>
        </div>

        <div className={styles.footerLinks}>
          {navItems.map((item) => (
            <a
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={styles.footerLink}
              style={{ cursor: 'pointer' }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.footerSocials}>
          <a
            href="https://github.com/Muhamadsaputra16"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhamad-saputra-854b30265"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:Muhammadsafutra33@gmail.com"
            className={styles.socialIcon}
            aria-label="Email"
          >
            <HiEnvelope />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <div className={styles.footerDivider}></div>

        <div className={styles.footerCopyright}>
          &copy; {currentYear} Muhamad Saputra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
