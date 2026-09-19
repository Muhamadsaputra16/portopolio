'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { HiEnvelope, HiMapPin, HiPaperAirplane, HiCheckCircle, HiExclamationTriangle } from 'react-icons/hi2';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import styles from './styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Harap isi semua kolom sebelum mengirim pesan.',
      });
      return;
    }

    // Direct mailto link generation to send email via default client
    const mailtoUrl = `mailto:Muhammadsafutra33@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;

    setStatus({
      type: 'success',
      message: 'Pesan Anda berhasil dikirim! Aplikasi email Anda telah dibuka.',
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">📞 Hubungi Saya</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Mari berdiskusi tentang peluang kerja, project kolaborasi, atau sekadar menyapa!
          </p>
        </motion.div>

        <div className={styles.contactGrid}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className={styles.contactIntro}>
              Saat ini saya terbuka untuk peluang baru di bidang Front-End Development, 
              baik itu freelance, part-time, maupun internship. Jika Anda memiliki pertanyaan 
              atau penawaran, jangan ragu untuk menghubungi saya melalui kontak di bawah ini.
            </p>

            <div className={styles.contactCards}>
              <a href="mailto:Muhammadsafutra33@gmail.com" className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <HiEnvelope />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>Email</div>
                  <div className={styles.contactCardValue}>Muhammadsafutra33@gmail.com</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/muhamad-saputra-854b30265" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <FaLinkedinIn />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>LinkedIn</div>
                  <div className={styles.contactCardValue}>Muhamad Saputra</div>
                </div>
              </a>

              <a href="https://github.com/Muhamadsaputra16" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <FaGithub />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>GitHub</div>
                  <div className={styles.contactCardValue}>Muhamadsaputra16</div>
                </div>
              </a>

              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <HiMapPin />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>Lokasi</div>
                  <div className={styles.contactCardValue}>Bekasi, Jawa Barat, Indonesia</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contactForm}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.formTitle}>Send Me a Message</h3>
            <p className={styles.formSubtitle}>Saya akan membalas pesan Anda secepatnya.</p>

            {status.type === 'success' && (
              <div className={styles.alertSuccess}>
                <HiCheckCircle style={{ fontSize: '1.2rem', flexShrink: 0 }} />
                <span>{status.message}</span>
              </div>
            )}

            {status.type === 'error' && (
              <div className={styles.alertError}>
                <HiExclamationTriangle style={{ fontSize: '1.2rem', flexShrink: 0 }} />
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Nama</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.formInput}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={styles.formInput}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>Subjek</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={styles.formInput}
                  placeholder="Tawaran Project / Kolaborasi"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Pesan</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={styles.formTextarea}
                  placeholder="Tuliskan pesan Anda di sini..."
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Kirim Pesan <HiPaperAirplane />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
