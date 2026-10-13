'use client';

import { motion } from 'framer-motion';
import {
  HiAcademicCap,
  HiBeaker,
  HiCalendarDays,
  HiMapPin,
  HiCheckBadge,
  HiSparkles,
} from 'react-icons/hi2';
import styles from './styles/Education.module.css';

interface Milestone {
  id: string;
  stepNumber: string;
  period: string;
  levelBadge: string;
  institution: string;
  degree: string;
  location: string;
  status: string;
  accentGrade?: {
    label: string;
    value: string;
  };
  icon: React.ReactNode;
  description: string;
  highlights: string[];
}

const educationJourney: Milestone[] = [
  {
    id: 'ubhara',
    stepNumber: '01',
    period: '2022 — 2026',
    levelBadge: 'Perguruan Tinggi',
    institution: 'Universitas Bhayangkara Jakarta Raya',
    degree: 'S1 Ilmu Komputer',
    location: 'Kota Bekasi, Jawa Barat',
    status: 'Lulus',
    accentGrade: {
      label: 'IPK Akhir',
      value: '3.76',
    },
    icon: <HiAcademicCap />,
    description:
      'Menyelesaikan program sarjana Ilmu Komputer dengan fokus utama pada Software Development & Rekayasa Web. Mengembangkan kompetensi analitis dan teknis dalam membangun arsitektur aplikasi modern, basis data terstruktur, serta penerapan best practices rekayasa perangkat lunak.',
    highlights: [
      'Rekayasa Perangkat Lunak',
      'Web Development (React & Next.js)',
      'Algoritma & Struktur Data',
      'Database Management Systems',
      'UI/UX Design',
    ],
  },
  {
    id: 'sman1-tarumajaya',
    stepNumber: '02',
    period: '2019 — 2022',
    levelBadge: 'Pendidikan Menengah Atas',
    institution: 'SMA Negeri 01 Tarumajaya',
    degree: 'Jurusan MIPA (Ilmu Pengetahuan Alam)',
    location: 'Tarumajaya, Kab. Bekasi',
    status: 'Lulus',
    accentGrade: {
      label: 'Peminatan',
      value: 'IPA',
    },
    icon: <HiBeaker />,
    description:
      'Menempuh pendidikan sekolah menengah atas dengan peminatan Matematika dan Ilmu Pengetahuan Alam (MIPA). Membangun pondasi logika berpikir kuantitatif, analisis saintifik, serta daya pemecahan masalah (problem solving) yang menjadi landasan kuat dalam studi ilmu komputasi.',
    highlights: [
      'Matematika & Logika Analitis',
      'Fisika & Metode Ilmiah',
      'Keterampilan Analisis Masalah',
      'Kolaborasi & Kerja Tim',
    ],
  },
];

export default function Education() {
  return (
    <section className={`section ${styles.education}`} id="education">
      {/* Background ambient lighting */}
      <div className={styles.ambientGlow} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Academic Pathway</span>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            Jejak perjalanan akademik yang membangun fondasi logika berpikir dan keahlian teknologi saya
          </p>
        </motion.div>

        {/* Pathway Container (Tanpa Box Card) */}
        <div className={styles.pathwayContainer}>
          <div className={styles.spineLine} />

          <div className={styles.milestonesList}>
            {educationJourney.map((item, index) => (
              <motion.div
                key={item.id}
                className={styles.milestoneItem}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Milestone Node on the line */}
                <div className={styles.milestoneNode}>
                  <div className={styles.nodePulse} />
                  <div className={styles.nodeIcon}>{item.icon}</div>
                  <span className={styles.nodeStep}>{item.stepNumber}</span>
                </div>

                {/* Milestone Content Area */}
                <div className={styles.milestoneContent}>
                  {/* Meta Bar */}
                  <div className={styles.metaBar}>
                    <div className={styles.periodPill}>
                      <HiCalendarDays className={styles.metaIcon} />
                      <span>{item.period}</span>
                    </div>

                    <span className={styles.levelTag}>
                      <HiSparkles className={styles.metaIcon} />
                      {item.levelBadge}
                    </span>

                    <div className={styles.locationPill}>
                      <HiMapPin className={styles.metaIcon} />
                      <span>{item.location}</span>
                    </div>

                    {item.accentGrade && (
                      <div className={styles.gradeBadge}>
                        <span className={styles.gradeLabel}>{item.accentGrade.label}:</span>
                        <span className={styles.gradeValue}>{item.accentGrade.value}</span>
                      </div>
                    )}
                  </div>

                  {/* Title & Degree */}
                  <div className={styles.headingGroup}>
                    <h3 className={styles.institutionName}>{item.institution}</h3>
                    <h4 className={styles.degreeTitle}>{item.degree}</h4>
                  </div>

                  {/* Description */}
                  <p className={styles.description}>{item.description}</p>

                  {/* Highlights / Focus List */}
                  <div className={styles.highlightsContainer}>
                    <span className={styles.highlightsLabel}>Fokus & Kompetensi Utama:</span>
                    <div className={styles.highlightTags}>
                      {item.highlights.map((highlight) => (
                        <span key={highlight} className={styles.tag}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className={styles.statusRow}>
                    <div className={styles.statusBadge}>
                      <HiCheckBadge className={styles.checkIcon} />
                      <span>Status: {item.status}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
