'use client';

import { motion } from 'framer-motion';
import { HiAcademicCap, HiBriefcase, HiMapPin, HiCodeBracket } from 'react-icons/hi2';
import styles from './styles/About.module.css';

const infoCards = [
  { icon: <HiAcademicCap />, label: 'Pendidikan', value: 'S1 Informatika' },
  { icon: <HiBriefcase />, label: 'Fokus', value: 'Front-End Development' },
  { icon: <HiMapPin />, label: 'Lokasi', value: 'Bekasi, Indonesia' },
  { icon: <HiCodeBracket />, label: 'Status', value: 'Mahasiswa Aktif' },
];

const stats = [
  { number: '3.76', label: 'IPK' },
  { number: '5+', label: 'Projects' },
  { number: '3+', label: 'Sertifikat' },
  { number: '1+', label: 'Magang' },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">👤 Tentang Saya</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Mengenal lebih dekat siapa saya dan apa yang saya lakukan
          </p>
        </motion.div>

        <div className={styles.aboutGrid}>
          <motion.div
            className={styles.aboutImageSection}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.aboutImageCard}>
              <p className={styles.aboutText}>
                Saya adalah mahasiswa <span className={styles.aboutHighlight}>S1 Ilmu Komputer/Informatika</span> di 
                Universitas Bhayangkara Jakarta Raya dengan IPK 3.76. Passionate dalam mengembangkan website modern 
                dan interaktif menggunakan teknologi terkini.
              </p>
              <div className={styles.aboutStats}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className={styles.statItem}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.aboutContent}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={styles.aboutText}>
              Perjalanan saya di dunia programming dimulai sejak memasuki perkuliahan di tahun 2022. 
              Saya fokus pada <span className={styles.aboutHighlight}>Front-End Development</span> dan 
              terus mengembangkan kemampuan dalam membangun user interface yang menarik dan fungsional.
            </p>

            <p className={styles.aboutText}>
              Selama masa kuliah, saya telah menyelesaikan berbagai project web development dan mendapatkan 
              pengalaman berharga melalui <span className={styles.aboutHighlight}>program magang di PT Pos Indonesia</span> sebagai 
              IT Support Intern. Pengalaman ini memperkuat pemahaman saya tentang teknologi dan 
              problem-solving dalam lingkungan profesional.
            </p>

            <p className={styles.aboutText}>
              Saya selalu antusias untuk belajar teknologi baru dan berkontribusi dalam proyek-proyek 
              yang menantang. Saat ini, saya mendalami <span className={styles.aboutHighlight}>Next.js, React, dan TypeScript</span> untuk 
              membangun aplikasi web yang scalable dan performant.
            </p>

            <div className={styles.aboutInfoGrid}>
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  className={styles.infoCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className={styles.infoIcon}>{card.icon}</div>
                  <div className={styles.infoLabel}>{card.label}</div>
                  <div className={styles.infoValue}>{card.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
