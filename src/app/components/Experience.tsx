'use client';

import { motion } from 'framer-motion';
import { HiChevronRight } from 'react-icons/hi2';
import styles from './styles/Experience.module.css';

const experiences = [
  {
    role: 'IT Support Intern',
    company: 'PT Pos Indonesia (Persero) - Kota Bekasi',
    period: 'Maret 2025 - April 2025',
    description:
      'Mengikuti program magang sebagai IT Support di kantor PT Pos Indonesia wilayah Kota Bekasi. Bertanggung jawab dalam mendukung operasional IT harian dan troubleshooting perangkat.',
    responsibilities: [
      'Melakukan troubleshooting hardware dan software pada perangkat komputer kantor',
      'Mengelola jaringan lokal (LAN) dan memastikan konektivitas berjalan stabil',
      'Memberikan dukungan teknis kepada karyawan terkait permasalahan IT',
      'Melakukan instalasi dan konfigurasi sistem operasi serta aplikasi pendukung',
      'Mendokumentasikan inventaris perangkat IT dan laporan perbaikan',
      'Membantu pengelolaan sistem keamanan dan backup data',
    ],
    techStack: ['Windows Server', 'Networking', 'Hardware Troubleshooting', 'Microsoft Office', 'Active Directory'],
  },
];

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">💼 Pengalaman</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-description">
            Pengalaman profesional yang telah saya dapatkan
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineCard}>
                <div className={styles.timelineHeader}>
                  <div>
                    <div className={styles.timelineRole}>{exp.role}</div>
                    <div className={styles.timelineCompany}>{exp.company}</div>
                  </div>
                  <span className={styles.timelinePeriod}>{exp.period}</span>
                </div>

                <p className={styles.timelineDescription}>{exp.description}</p>

                <ul className={styles.timelineResponsibilities}>
                  {exp.responsibilities.map((item) => (
                    <li key={item} className={styles.responsibilityItem}>
                      <HiChevronRight className={styles.responsibilityIcon} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className={styles.timelineTechStack}>
                  {exp.techStack.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
