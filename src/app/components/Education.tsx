'use client';

import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi2';
import styles from './styles/Education.module.css';

export default function Education() {
  return (
    <section className={`section ${styles.education}`} id="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">🎓 Pendidikan</span>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            Latar belakang pendidikan formal saya
          </p>
        </motion.div>

        <motion.div
          className={styles.educationCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className={styles.educationIcon}>
            <HiAcademicCap />
          </div>
          <h3 className={styles.universityName}>Universitas Bhayangkara Jakarta Raya</h3>
          <p className={styles.degree}>S1 Ilmu Komputer / Informatika</p>
          <p className={styles.period}>2022 - 2026</p>

          <div className={styles.educationDetails}>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>IPK</div>
              <div className={styles.detailValueAccent}>3.76</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Jenjang</div>
              <div className={styles.detailValue}>S1 / Sarjana</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Fakultas</div>
              <div className={styles.detailValue}>Ilmu Komputer</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Status</div>
              <div className={styles.detailValue}>Lulus</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
