'use client';

import { motion } from 'framer-motion';
import { HiCodeBracket, HiAcademicCap, HiSparkles, HiLanguage, HiShieldCheck } from 'react-icons/hi2';
import Image from 'next/image';
import styles from './styles/Certificates.module.css';

const certificates = [
  {
    title: 'IT Support Professional Certificate',
    issuer: 'Google / Coursera',
    icon: <HiCodeBracket />,
    description:
      'Sertifikasi profesional dari Google yang mencakup dasar dukungan teknis, jaringan komputer, sistem operasi, administrasi sistem, dan keamanan IT.',
    badge: 'Professional Certificate',
    link: '/certificates/google-it-support.pdf',
    image: '/certificates/google-it-support.png',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta / Coursera',
    icon: <HiCodeBracket />,
    description:
      'Sertifikasi profesional dari Meta yang mencakup pengembangan front-end lengkap dengan React, pengelolaan state, desain UI/UX, serta persiapan karir di bidang web development.',
    badge: 'Professional Certificate',
    link: '/certificates/meta-frontend.pdf',
    image: '/certificates/meta-frontend.png',
  },
  {
    title: 'Bimbingan Teknis Skema Pengembang Web Pratama (PWP)',
    issuer: 'Fakultas Ilmu Komputer - Universitas Bhayangkara Jakarta Raya',
    icon: <HiCodeBracket />,
    description:
      'Bimbingan teknis standar kompetensi pengembang web pratama yang mencakup prinsip dasar web development, struktur HTML5, styling CSS3, serta logika pemrograman.',
    badge: 'Bimtek Kompetensi',
    link: '/certificates/bimtek-pwp.pdf',
    image: '/certificates/bimtek-pwp.png',
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy / Universitas Bhayangkara Jakarta Raya',
    icon: <HiShieldCheck />,
    description:
      'Sertifikasi kompetensi bidang keamanan siber yang meliputi dasar-dasar privasi data, kontrol akses, enkripsi, serta strategi mitigasi dan perlindungan jaringan.',
    badge: 'Cisco Certificate',
    link: '/certificates/cisco-essentials.pdf',
    image: '/certificates/cisco-essentials.png',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy / Universitas Bhayangkara Jakarta Raya',
    icon: <HiShieldCheck />,
    description:
      'Sertifikasi dasar keamanan siber mengenai proteksi data pribadi, analisis jenis-jenis cyber threat, konsep keamanan digital, dan integritas sistem informasi.',
    badge: 'Cisco Certificate',
    link: '/certificates/cisco-intro.pdf',
    image: '/certificates/cisco-intro.png',
  },
  {
    title: 'Free Class: Belajar Coding dari Nol untuk Pemula',
    issuer: 'Coding Studio',
    icon: <HiAcademicCap />,
    description:
      'Pelatihan dan pemahaman fundamental algoritma pemrograman, logika dasar coding, serta struktur pengembangan aplikasi untuk pemula.',
    badge: 'Course Certificate',
    link: '/certificates/coding-studio.pdf',
    image: '/certificates/coding-studio.png',
  },
  {
    title: 'Webinar "Designing a Game That Feels Like Something"',
    issuer: 'Infinite Learning',
    icon: <HiSparkles />,
    description:
      'Webinar pengembangan & desain interaktif mengenai penyusunan pengalaman pengguna (UX), estetika visual, dan mekanik game yang imersif.',
    badge: 'Webinar Certificate',
    link: '/certificates/webinar-game.pdf',
    image: '/certificates/webinar-game.png',
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

          <h2 className="section-title">Certificates</h2>
          <p className="section-description">
            Sertifikasi dan pencapaian yang telah saya raih
          </p>
        </motion.div>

        <div className={styles.certificatesGrid}>
          {certificates.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.title}
              className={styles.certCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {cert.image ? (
                <div className={styles.certImageWrapper}>
                  <Image src={cert.image} alt={cert.title} fill className={styles.certImage} unoptimized />
                </div>
              ) : (
                <div className={styles.certIcon}>{cert.icon}</div>
              )}
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <p className={styles.certIssuer}>{cert.issuer}</p>
              <p className={styles.certDescription}>{cert.description}</p>
              <span className={styles.certBadge}>{cert.badge}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
