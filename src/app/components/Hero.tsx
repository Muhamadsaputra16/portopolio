'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { HiArrowDownTray, HiRocketLaunch } from 'react-icons/hi2';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram } from 'react-icons/fa6';
import Image from 'next/image';
import styles from './styles/Hero.module.css';

const ROLES = ['Front-End Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Enthusiast'];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 5,
  duration: Math.random() * 6 + 8,
}));

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Typewriter effect
  useEffect(() => {
    setMounted(true);
    const role = ROLES[roleIdx];
    let i = typing ? displayed.length : displayed.length - 1;
    if (typing && i === role.length) {
      const t = setTimeout(() => setTyping(false), 1800);
      return () => clearTimeout(t);
    }
    if (!typing && i < 0) {
      setRoleIdx((prev) => (prev + 1) % ROLES.length);
      setTyping(true);
      setDisplayed('');
      return;
    }
    const t = setTimeout(
      () => setDisplayed(typing ? role.slice(0, i + 1) : role.slice(0, i)),
      typing ? 75 : 40
    );
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  // Mouse parallax for image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const imgRotateX = useTransform(springY, [-300, 300], [6, -6]);
  const imgRotateY = useTransform(springX, [-300, 300], [-6, 6]);

  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className={styles.hero}
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated background orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* Floating particles */}
      {mounted && PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className={styles.particle}
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Grid lines */}
      <div className={styles.gridLines} />

      <div className={styles.heroContainer}>
        {/* ── IMAGE COLUMN ── */}
        <motion.div
          className={styles.heroImageWrapper}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          style={{ rotateX: imgRotateX, rotateY: imgRotateY, perspective: 1000 }}
        >
          {/* Glow ring */}
          <div className={styles.glowRing} />

          <div className={styles.heroImageContainer}>
            {/* Decorative geometric shapes */}
            <motion.div
              className={styles.geoDot1}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className={styles.geoDot2}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />

            <Image
              src="/images/profile.png"
              alt="Muhamad Saputra"
              width={450}
              height={550}
              className={styles.heroImage}
              priority
              unoptimized
            />
          </div>

          {/* Floating badge */}
          <motion.div
            className={styles.floatBadge}
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
            style={{ y: useTransform(springY, [-300, 300], [-8, 8]) }}
          >
            <span className={styles.badgeDot} />
            Available for Work
          </motion.div>
        </motion.div>

        {/* ── TEXT COLUMN ── */}
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <motion.div
            className={styles.greeting}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className={styles.greetingLine} />
            Hello, I&apos;m
          </motion.div>

          <motion.h1
            className={styles.heroName}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Muhamad{' '}
            <span className={styles.heroNameAccent}>Saputra</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            className={styles.heroRole}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className={styles.roleBracket}>&lt;</span>
            <span className={styles.typewriterText}>{displayed}</span>
            <span className={styles.cursor}>|</span>
            <span className={styles.roleBracket}>/&gt;</span>
          </motion.div>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Lulusan S1 Ilmu Komputer Universitas Bhayangkara Jakarta Raya dengan minat pada Software Development. Memiliki kemampuan dalam analisis, problem solving, dan pengembangan aplikasi dengan fokus pada solusi yang efektif, responsif, dan user-friendly.
          </motion.p>

          {/* Stat chips */}
          <motion.div
            className={styles.statRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { num: '3+', label: 'Projects' },
              { num: '2+', label: 'Years Exp' },
              { num: '5+', label: 'Technologies' },
            ].map((s) => (
              <div key={s.label} className={styles.statChip}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="#projects"
              className={styles.btnPrimary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <HiRocketLaunch />
              View My Projects
            </motion.a>
            <motion.a
              href="/CV_Muhamad_Saputra.pdf"
              download="CV_Muhamad_Saputra.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiArrowDownTray />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            className={styles.heroSocials}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            {[
              { href: 'https://github.com/Muhamadsaputra16', icon: <FaGithub />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/muhamad-saputra-854b30265', icon: <FaLinkedinIn />, label: 'LinkedIn' },
              { href: 'mailto:Muhammadsafutra33@gmail.com', icon: <FaEnvelope />, label: 'Email' },
              { href: 'https://www.instagram.com/mhmmdsafutra', icon: <FaInstagram />, label: 'Instagram' },
            ].map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.08 }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
}
