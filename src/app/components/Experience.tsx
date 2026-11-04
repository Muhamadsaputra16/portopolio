'use client';

import { motion } from 'framer-motion';
import { HiChevronRight } from 'react-icons/hi2';
import styles from './styles/Experience.module.css';

const experiences = [
  {
    role: 'IT Support Intern',
    company: 'PT Pos Indonesia (Persero) - Kantor Cabang Utama Bekasi',
    period: 'Maret 2025 - April 2025',
    description:
      'Bertanggung jawab dalam memastikan kelancaran operasional infrastruktur IT harian, pemeliharaan perangkat keras & lunak, penanganan stabilitas jaringan lokal, serta memberikan dukungan teknis (helpdesk) cepat tanggap bagi seluruh staf divisi.',
    responsibilities: [
      'Melakukan diagnostik, troubleshooting, dan perbaikan perangkat keras (PC Desktop, Laptop, Printer Thermal & Laserjet, Scanner) untuk 50+ unit workstation.',
      'Mengelola dan memelihara stabilitas jaringan lokal (LAN/WLAN), konfigurasi IP Address (Static/DHCP), penanganan crimping kabel UTP RJ-45, serta switch/router.',
      'Memberikan layanan technical support & helpdesk (on-site & remote support via RDP/AnyDesk) untuk menyelesaikan kendala teknis pengguna dengan response time cepat.',
      'Melakukan instalasi, konfigurasi, dan standardisasi sistem operasi (Windows 10/11) serta aplikasi operasional kantor, antivirus, dan driver pendukung.',
      'Membantu administrasi user domain pada Active Directory, pengelolaan hak akses printer sharing, dan keamanan folder bersama.',
      'Melakukan pencatatan inventarisasi aset perangkat IT kantor, pembuatan logbook tiket perbaikan teknis, dan pelaksanaan prosedur rutin backup data penting.',

    ],
    techStack: [
      'Hardware Diagnostics',
      'LAN / TCP-IP Networking',
      'Windows 10/11 & Server',
      'Active Directory',
      'Printer & Peripherals',
      'Remote Desktop (RDP)',
      'Data Backup & Recovery',
      'Ticketing Support',
    ],
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
