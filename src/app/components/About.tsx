'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  HiAcademicCap,
  HiMapPin,
  HiBriefcase,
  HiSparkles,
  HiRocketLaunch,
  HiEnvelope,
} from 'react-icons/hi2';
import styles from './styles/About.module.css';

const stats = [
  { number: '3.76', label: 'IPK Akhir' },
  { number: '5+', label: 'Projects' },
  { number: '3+', label: 'Sertifikat' },
  { number: '1+', label: 'Magang IT' },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      {/* Background ambient lighting */}
      <div className={styles.ambientBlob1} />
      <div className={styles.ambientBlob2} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Mengenal lebih dekat latar belakang, dedikasi, dan perjalanan profesional saya di dunia teknologi
          </p>
        </motion.div>

        <div className={styles.aboutGrid}>
          {/* ── FOTO SECTION (PENGGANTI KARTU LAMA) ── */}
          <motion.div
            className={styles.photoContainerWrapper}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.photoFrame}>
              <div className={styles.photoGlow} />
              
              <div className={styles.photoInner}>
                <Image
                  src="/images/about-wisuda.jpg"
                  alt="Muhamad Saputra - Wisuda S1 Ilmu Komputer"
                  fill
                  className={styles.aboutPhoto}
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                  unoptimized
                />
              </div>

              {/* Floating Badge 1 - Top Right */}
              <motion.div
                className={`${styles.floatingBadge} ${styles.badgeTopRight}`}
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className={styles.badgeIconWrapper}>
                  <HiAcademicCap className={styles.badgeIcon} />
                </div>
                <div>
                  <div className={styles.badgeTitle}>S1 Ilmu Komputer</div>
                  <div className={styles.badgeSubtitle}>IPK 3.76 • Cum Laude</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Left */}
              <motion.div
                className={`${styles.floatingBadge} ${styles.badgeBottomLeft}`}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <div className={styles.badgeIconWrapper}>
                  <HiSparkles className={styles.badgeIcon} />
                </div>
                <div>
                  <div className={styles.badgeTitle}>Fresh Graduate</div>
                  <div className={styles.badgeSubtitle}>Univ. Bhayangkara Jaya</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── KONTEN NARASI & DETAIL ── */}
          <motion.div
            className={styles.aboutContent}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles.contentHeader}>
              <h3 className={styles.greetingTitle}>
                Halo, Saya <span className={styles.highlightName}>Muhamad Saputra</span>
              </h3>
              <p className={styles.roleSub}>Software Developer & Tech Enthusiast</p>
            </div>

            <div className={styles.bioTextContainer}>
              <p className={styles.aboutText}>
                Saya adalah lulusan <span className={styles.aboutHighlight}>S1 Ilmu Komputer</span> di Universitas Bhayangkara Jakarta Raya dengan predikat kelulusan IPK 3.76. Memiliki antusiasme tinggi dalam merancang dan mengembangkan aplikasi web modern yang interaktif, responsif, dan berorientasi pada kenyamanan pengguna.
              </p>

              <p className={styles.aboutText}>
                Perjalanan saya dalam dunia programming berfokus pada <span className={styles.aboutHighlight}>Fullstack & Front-End Development</span>. Saya terbiasa memanfaatkan ekosistem modern seperti React, Next.js, TypeScript, dan CSS modern untuk menciptakan antarmuka yang elegan serta logika sistem yang terstruktur.
              </p>

              <p className={styles.aboutText}>
                Selain perkuliahan, saya memperkaya wawasan profesional melalui pengalaman <span className={styles.aboutHighlight}>magang di PT Pos Indonesia (Persero)</span> sebagai IT Support Intern, di mana saya mengasah kemampuan problem solving, troubleshooting perangkat & jaringan, serta kolaborasi dalam lingkungan kerja nyata.
              </p>
            </div>

            {/* Quick Info Badges */}
            <div className={styles.quickInfoRow}>
              <div className={styles.quickChip}>
                <HiMapPin className={styles.chipIcon} />
                <span>Bekasi, Indonesia</span>
              </div>
              <div className={styles.quickChip}>
                <HiBriefcase className={styles.chipIcon} />
                <span>Ready for Work</span>
              </div>
              <div className={styles.quickChip}>
                <HiAcademicCap className={styles.chipIcon} />
                <span>Sarjana Komputer (S.Kom)</span>
              </div>
            </div>

            {/* Stats Bar Modern */}
            <div className={styles.aboutStatsBar}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.statBox}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                >
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Call to action buttons */}
            <div className={styles.actionButtons}>
              <a
                href="#projects"
                className={styles.primaryBtn}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <HiRocketLaunch />
                Lihat Proyek Saya
              </a>
              <a
                href="#contact"
                className={styles.secondaryBtn}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <HiEnvelope />
                Hubungi Saya
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
