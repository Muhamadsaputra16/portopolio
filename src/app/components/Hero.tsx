'use client';

import { motion } from 'framer-motion';
import { HiArrowDown, HiArrowDownTray, HiCodeBracket, HiRocketLaunch } from 'react-icons/hi2';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';
import Image from 'next/image';
import styles from './styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.heroContainer}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className={styles.greeting}>
            <span className={styles.greetingLine}></span>
            Hello, I&apos;m
          </div>

          <h1 className={styles.heroName}>
            Muhamad{' '}
            <span className={styles.heroNameAccent}>Saputra</span>
          </h1>

          <div className={styles.heroRole}>
            <span className={styles.roleBadge}>💻 Front-End Developer</span>
          </div>

          <p className={styles.heroDescription}>
            Fresh Graduate S1 Ilmu Komputer Universitas Bhayangkara yang passionate dalam 
            membangun website modern, responsif, dan user-friendly. Berfokus pada pengembangan 
            Front-End dengan teknologi terkini.
          </p>

          <div className={styles.heroButtons}>
            <motion.a
              href="#projects"
              className={styles.btnPrimary}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <HiRocketLaunch />
              View My Projects
            </motion.a>
            <motion.a
              href="/CV_Muhamad_Saputra.pdf"
              download="CV_Muhamad_Saputra.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiArrowDownTray />
              Download CV
            </motion.a>
          </div>

          <div className={styles.heroSocials}>
            <motion.a
              href="https://github.com/Muhamadsaputra16"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhamad-saputra-854b30265"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              href="mailto:Muhammadsafutra33@gmail.com"
              className={styles.socialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className={styles.heroImageWrapper}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className={styles.heroImageContainer}>
            <div className={styles.heroImageBg}></div>
            <div className={styles.heroImageBg2}></div>
            <Image
              src="/images/profile.jpg"
              alt="Muhamad Saputra"
              width={380}
              height={380}
              className={styles.heroImage}
              priority
              unoptimized
            />
            <motion.div
              className={`${styles.floatingElement} ${styles.floatTopRight}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className={styles.floatingIcon}>
                <HiCodeBracket />
              </div>
              Front-End Dev
            </motion.div>
            <motion.div
              className={`${styles.floatingElement} ${styles.floatBottomLeft}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className={styles.floatingIcon}>
                <HiRocketLaunch />
              </div>
              Next.js & React
            </motion.div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}
