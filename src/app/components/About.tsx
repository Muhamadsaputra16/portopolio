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
  HiWrenchScrewdriver,
} from 'react-icons/hi2';
import styles from './styles/About.module.css';

const stats = [
  { number: '3.76', label: 'IPK Akhir' },
  { number: 'Google', label: 'Certified IT' },
  { number: '8', label: 'Sertifikat' },
  { number: 'PT Pos', label: 'Magang IT Support' },
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
                  <HiWrenchScrewdriver className={styles.badgeIcon} />
                </div>
                <div>
                  <div className={styles.badgeTitle}>Google Certified</div>
                  <div className={styles.badgeSubtitle}>IT Support Professional</div>
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
            <div className={styles.bioTextContainer}>
              <p className={styles.aboutText}>
                Saya adalah lulusan <span className={styles.aboutHighlight}>S1 Ilmu Komputer</span> dari Universitas Bhayangkara Jakarta Raya dengan predikat kelulusan IPK 3.76. Memiliki latar belakang teknis yang kuat di bidang <span className={styles.aboutHighlight}>IT Support</span> dan <span className={styles.aboutHighlight}>Web Development</span>, memadukan keahlian pemecahan masalah hardware/jaringan dengan pengembangan aplikasi modern.
              </p>

              <p className={styles.aboutText}>
                Di bidang infrastruktur IT, saya memegang sertifikasi profesional kredensial global <span className={styles.aboutHighlight}>Google IT Support Professional</span> dan <span className={styles.aboutHighlight}>Cisco Cybersecurity</span>. Terbiasa menangani diagnostik & perbaikan hardware/software, instalasi sistem operasi (Windows & Linux), konfigurasi jaringan komputer (LAN, TCP/IP, Router/Switch, DHCP/DNS), Active Directory, hingga pemeliharaan preventif perangkat.
              </p>

              <p className={styles.aboutText}>
                Pengalaman praktis saya teruji nyata saat <span className={styles.aboutHighlight}>magang di PT Pos Indonesia (Persero)</span> sebagai IT Support Intern. Saya bertanggung jawab mendukung operasional harian 50+ unit workstation, memelihara stabilitas jaringan kantor, menangani printer & periferal, serta memberikan technical helpdesk cepat tanggap bagi seluruh staf divisi.
              </p>

              <p className={styles.aboutText}>
                Selain itu, saya juga aktif mengembangkan solusi digital melalui <span className={styles.aboutHighlight}>Web Development</span> menggunakan ekosistem modern seperti React, Next.js, dan TypeScript untuk menciptakan sistem yang efisien, responsif, dan user-friendly.
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
                <HiWrenchScrewdriver className={styles.chipIcon} />
                <span>IT Support & Web Dev</span>
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
