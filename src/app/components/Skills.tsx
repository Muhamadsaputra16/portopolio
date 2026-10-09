'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaDatabase, FaNodeJs
} from 'react-icons/fa6';
import { SiNextdotjs, SiTypescript, SiPostgresql } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { HiWrenchScrewdriver, HiSignal, HiCpuChip, HiServerStack } from 'react-icons/hi2';
import styles from './styles/Skills.module.css';

const frontendSkills = [
  { name: 'HTML5', icon: <FaHtml5 />, level: 'Advanced', color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 'Advanced', color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs />, level: 'Intermediate', color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 'Intermediate', color: '#3178C6' },
  { name: 'React', icon: <FaReact />, level: 'Intermediate', color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 'Intermediate', color: '#000000' },
];

const backendSkills = [
  { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate', color: '#339933' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Intermediate', color: '#4169E1' },
  { name: 'Database', icon: <FaDatabase />, level: 'Intermediate', color: '#7C3AED' },
  { name: 'Git', icon: <FaGitAlt />, level: 'Intermediate', color: '#F05032' },
  { name: 'Figma', icon: <FaFigma />, level: 'Basic', color: '#F24E1E' },
  { name: 'VS Code', icon: <VscVscode />, level: 'Advanced', color: '#007ACC' },
];

const itSkills = [
  { name: 'Technical Support', icon: <HiWrenchScrewdriver />, level: 'Intermediate', color: '#7C3AED' },
  { name: 'Network Troubleshooting', icon: <HiSignal />, level: 'Intermediate', color: '#0EA5E9' },
  { name: 'Hardware Installation', icon: <HiCpuChip />, level: 'Intermediate', color: '#10B981' },
  { name: 'Network Configuration', icon: <HiServerStack />, level: 'Intermediate', color: '#F59E0B' },
];

const categories = [
  { label: 'Frontend', skills: frontendSkills },
  { label: 'Backend & Tools', skills: backendSkills },
  { label: 'IT Support', skills: itSkills },
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
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-description">
            Teknologi, infrastruktur IT, dan tools yang saya kuasai
          </p>
        </motion.div>

        <div className={styles.categoriesWrapper}>
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              className={styles.categoryBlock}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <div className={styles.categoryLabel}>{cat.label}</div>
              <div className={styles.tagsRow}>
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillTag}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    style={{ '--skill-color': skill.color } as React.CSSProperties}
                  >
                    <span className={styles.tagIcon}>{skill.icon}</span>
                    <span className={styles.tagName}>{skill.name}</span>
                    <span className={styles.tagBadge}>{skill.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
