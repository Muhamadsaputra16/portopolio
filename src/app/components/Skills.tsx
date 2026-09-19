'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaDatabase, FaNodeJs
} from 'react-icons/fa6';
import { SiNextdotjs, SiTypescript, SiPostgresql } from 'react-icons/si';
import { HiWrenchScrewdriver, HiSignal, HiCpuChip, HiServerStack } from 'react-icons/hi2';
import styles from './styles/Skills.module.css';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, level: 'Advanced' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 'Advanced' },
  { name: 'JavaScript', icon: <FaJs />, level: 'Intermediate' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 'Intermediate' },
  { name: 'React', icon: <FaReact />, level: 'Intermediate' },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 'Intermediate' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Intermediate' },
  { name: 'Database', icon: <FaDatabase />, level: 'Intermediate' },
  { name: 'Git', icon: <FaGitAlt />, level: 'Intermediate' },
  { name: 'Figma', icon: <FaFigma />, level: 'Basic' },
  { name: 'Technical Support', icon: <HiWrenchScrewdriver />, level: 'Intermediate' },
  { name: 'Network Troubleshooting', icon: <HiSignal />, level: 'Intermediate' },
  { name: 'Hardware Installation', icon: <HiCpuChip />, level: 'Intermediate' },
  { name: 'Network Configuration', icon: <HiServerStack />, level: 'Intermediate' },
];

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">💻 Keahlian</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            Teknologi, infrastruktur IT, dan tools yang saya kuasai
          </p>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <div className={styles.skillIcon}>{skill.icon}</div>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillLevel}>{skill.level}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
