'use client';

import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare, HiCheckCircle } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa6';
import Image from 'next/image';
import styles from './styles/Projects.module.css';

const projects = [
  {
    title: 'Sistem Informasi Booking Servis Motor BMC',
    type: 'Web Application',
    description:
      'Aplikasi web untuk sistem booking servis motor di BMC Motor. Pelanggan dapat booking servis secara online, memilih jenis layanan, dan mengelola jadwal dengan mudah.',
    image: '/images/bmc.png',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    features: [
      'Sistem booking servis online',
      'Manajemen jadwal & antrian',
      'Dashboard admin & notifikasi',
    ],
    challenge: {
      title: '⚡ Tantangan & Solusi',
      text: 'Validasi ketersediaan jadwal secara server-side untuk menghindari konflik antrian real-time.',
    },
    liveUrl: 'https://bengkel-bmc.vercel.app/',
    githubUrl: 'https://github.com/Muhamadsaputra16/bengkel-bmc.git',
  },
  {
    title: 'Kopi Kuy - Web Order Kedai Kopi',
    type: 'Landing Page & Web App',
    description:
      'Website landing page modern & interaktif untuk kedai kopi "Kopi Kuy". Memamerkan varian menu favorit, lokasi kedai, dan mempermudah pemesanan online.',
    image: '/images/kopi-kuy.png',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
    features: [
      'Tampilan visual modern & tema hangat',
      'Katalog menu kopi & makanan signature',
      'Desain fully responsive & animasi smooth',
    ],
    challenge: {
      title: '⚡ Tantangan & Solusi',
      text: 'Menciptakan estetika branding kedai kopi modern dengan performa animasi yang cepat dan ringan.',
    },
    liveUrl: 'https://muhamadsaputra16.github.io/kopi-kuy/',
    githubUrl: 'https://github.com/Muhamadsaputra16/kopi-kuy',
  },
  {
    title: 'Kopi Senja - Katalog & Pemesanan Kopi',
    type: 'Web Application',
    description:
      'Website katalog digital & pemesanan kopi online dengan antarmuka estetis, navigasi fleksibel, dan visualisasi produk kedai kopi terkini.',
    image: '/images/kopi senja.png',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    features: [
      'Katalog produk interaktif & kategorisasi',
      'Integrasi sistem pemesanan online',
      'Tampilan responsif & estetika modern',
    ],
    challenge: {
      title: '⚡ Tantangan & Solusi',
      text: 'Mengatur hierarki visual katalog produk agar pelanggan dapat memilih menu favorit dengan cepat.',
    },
    liveUrl: 'https://muhamadsaputra16.github.io/kopi-senja/',
    githubUrl: 'https://github.com/Muhamadsaputra16/kopi-senja.git',
  },
];

export default function Projects() {
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">🚀 Portofolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Project yang telah saya kerjakan dengan dedikasi dan passion
          </p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className={styles.projectImageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
                <div className={styles.projectOverlay}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.overlayBtn} ${styles.overlayBtnPrimary}`}
                  >
                    <HiArrowTopRightOnSquare /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.overlayBtn} ${styles.overlayBtnSecondary}`}
                  >
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>

              <div className={styles.projectContent}>
                <span className={styles.projectType}>{project.type}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.projectTechStack}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectFeatures}>
                  <div className={styles.featuresTitle}>Fitur Utama:</div>
                  <ul className={styles.featuresList}>
                    {project.features.map((feature) => (
                      <li key={feature} className={styles.featureItem}>
                        <HiCheckCircle className={styles.featureCheck} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.projectChallenge}>
                  <div className={styles.challengeTitle}>{project.challenge.title}</div>
                  <div className={styles.challengeText}>{project.challenge.text}</div>
                </div>

                <div className={styles.projectButtons}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnLive}
                  >
                    <HiArrowTopRightOnSquare /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnGithub}
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
