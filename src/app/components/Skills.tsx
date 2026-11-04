'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaDatabase, FaNodeJs,
  FaWindows, FaLinux, FaNetworkWired, FaServer, FaHeadset
} from 'react-icons/fa6';
import { SiNextdotjs, SiTypescript, SiPostgresql } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { MdDesignServices } from 'react-icons/md';
import {
  PiMicrosoftWordLogoFill,
  PiMicrosoftExcelLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from 'react-icons/pi';
import {
  HiWrenchScrewdriver, HiSignal, HiCpuChip, HiServerStack,
  HiShieldCheck, HiComputerDesktop, HiCommandLine, HiPrinter, HiArrowPath
} from 'react-icons/hi2';
import styles from './styles/Skills.module.css';

const itSupportSkills = [
  { name: 'Technical Support & Helpdesk', icon: <FaHeadset />, level: 'Advanced', color: '#7C3AED' },
  { name: 'Hardware Diagnostics & Repair', icon: <HiWrenchScrewdriver />, level: 'Advanced', color: '#EF4444' },
  { name: 'PC Assembly & Maintenance', icon: <HiCpuChip />, level: 'Advanced', color: '#10B981' },
  { name: 'Windows 10/11 & Server', icon: <FaWindows />, level: 'Advanced', color: '#0078D4' },
  { name: 'Linux / Ubuntu', icon: <FaLinux />, level: 'Intermediate', color: '#FCC624' },
  { name: 'Remote Desktop (RDP / AnyDesk)', icon: <HiComputerDesktop />, level: 'Advanced', color: '#0284C7' },
  { name: 'Printer & Peripherals Setup', icon: <HiPrinter />, level: 'Advanced', color: '#6366F1' },
  { name: 'Data Backup & Recovery', icon: <HiArrowPath />, level: 'Intermediate', color: '#14B8A6' },
];

const networkSecuritySkills = [
  { name: 'Network Troubleshooting', icon: <HiSignal />, level: 'Advanced', color: '#0EA5E9' },
  { name: 'LAN / WAN & TCP/IP Setup', icon: <HiServerStack />, level: 'Advanced', color: '#F59E0B' },
  { name: 'Routing, Switching & Cabling (RJ-45)', icon: <FaNetworkWired />, level: 'Advanced', color: '#3B82F6' },
  { name: 'Active Directory & Domain Join', icon: <FaServer />, level: 'Intermediate', color: '#8B5CF6' },
  { name: 'Cybersecurity & Threat Mitigation', icon: <HiShieldCheck />, level: 'Intermediate', color: '#10B981' },
  { name: 'Command Line / PowerShell', icon: <HiCommandLine />, level: 'Intermediate', color: '#64748B' },
];

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
  { name: 'Database Management', icon: <FaDatabase />, level: 'Intermediate', color: '#7C3AED' },
  { name: 'Git & GitHub', icon: <FaGitAlt />, level: 'Intermediate', color: '#F05032' },
  { name: 'VS Code', icon: <VscVscode />, level: 'Advanced', color: '#007ACC' },
];

const designSkills = [
  { name: 'UI/UX Design', icon: <MdDesignServices />, level: 'Intermediate', color: '#EC4899' },
  { name: 'Figma', icon: <FaFigma />, level: 'Intermediate', color: '#F24E1E' },
];

const officeSkills = [
  { name: 'Microsoft Word', icon: <PiMicrosoftWordLogoFill />, level: 'Advanced', color: '#2B579A' },
  { name: 'Microsoft Excel', icon: <PiMicrosoftExcelLogoFill />, level: 'Intermediate', color: '#217346' },
  { name: 'PowerPoint', icon: <PiMicrosoftPowerpointLogoFill />, level: 'Advanced', color: '#D24726' },
];

const categories = [
  { label: 'IT Support & Hardware Infrastructure', skills: itSupportSkills },
  { label: 'Networking & System Administration', skills: networkSecuritySkills },
  { label: 'Frontend Development', skills: frontendSkills },
  { label: 'Backend & Development Tools', skills: backendSkills },
  { label: 'UI/UX & Design', skills: designSkills },
  { label: 'Microsoft Office & Productivity', skills: officeSkills },
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
