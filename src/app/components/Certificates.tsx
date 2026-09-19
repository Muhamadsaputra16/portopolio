'use client';

import { motion } from 'framer-motion';
import { HiCodeBracket, HiAcademicCap, HiSparkles, HiLanguage, HiShieldCheck } from 'react-icons/hi2';
import styles from './styles/Certificates.module.css';

const certificates = [
  {
    title: 'Bimbingan Teknis Skema Pengembang Web Pratama (PWP)',
    issuer: 'Fakultas Ilmu Komputer - Universitas Bhayangkara Jakarta Raya',
    icon: <HiCodeBracket />,
    description:
      'Bimbingan teknis standar kompetensi pengembang web pratama yang mencakup prinsip dasar web development, struktur HTML5, styling CSS3, serta logika pemrograman.',
    badge: 'Bimtek Kompetensi',
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy / Universitas Bhayangkara Jakarta Raya',
    icon: <HiShieldCheck />,
    description:
      'Sertifikasi kompetensi bidang keamanan siber yang meliputi dasar-dasar privasi data, kontrol akses, enkripsi, serta strategi mitigasi dan perlindungan jaringan.',
    badge: 'Cisco Certificate',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy / Universitas Bhayangkara Jakarta Raya',
    icon: <HiShieldCheck />,
    description:
      'Sertifikasi dasar keamanan siber mengenai proteksi data pribadi, analisis jenis-jenis cyber threat, konsep keamanan digital, dan integritas sistem informasi.',
    badge: 'Cisco Certificate',
  },
  {
    title: 'Free Class: Belajar Coding dari Nol untuk Pemula',
    issuer: 'Coding Studio',
    icon: <HiAcademicCap />,
    description:
      'Pelatihan dan pemahaman fundamental algoritma pemrograman, logika dasar coding, serta struktur pengembangan aplikasi untuk pemula.',
    badge: 'Course Certificate',
  },
  {
    title: 'Webinar "Designing a Game That Feels Like Something"',
    issuer: 'Infinite Learning',
    icon: <HiSparkles />,
    description:
      'Webinar pengembangan & desain interaktif mengenai penyusunan pengalaman pengguna (UX), estetika visual, dan mekanik game yang imersif.',
    badge: 'Webinar Certificate',
  },
  {
    title: 'English Proficiency Test (TOEFL Prediction)',
    issuer: 'Daily Bahasa Inggris / PT. Daily Cipta Dwipa',
    icon: <HiLanguage />,
    description:
      'Tes kecakapan bahasa Inggris standar TOEFL Prediction yang mengukur kompetensi Listening Comprehension, Structure & Written Expression, serta Reading.',
    badge: 'TOEFL Certificate',
  },
];

export default function Certificates() {
  return (
    <section className={`section ${styles.certificates}`} id="certificates">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">📜 Sertifikat</span>
          <h2 className="section-title">Certificates</h2>
          <p className="section-description">
            Sertifikasi dan pencapaian yang telah saya raih
          </p>
        </motion.div>

        <div className={styles.certificatesGrid}>
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className={styles.certCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className={styles.certIcon}>{cert.icon}</div>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <p className={styles.certIssuer}>{cert.issuer}</p>
              <p className={styles.certDescription}>{cert.description}</p>
              <span className={styles.certBadge}>{cert.badge}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
