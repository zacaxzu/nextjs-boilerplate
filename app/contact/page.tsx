import React from 'react';
import Link from 'next/link';
import styles from '../styles/contact.module.css';

export const metadata = {
  title: 'Contact — Photography',
  description: 'Get in touch for prints, licensing, or collaborations.',
};

export default function Contact() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Let’s connect.</h1>
        <p className={styles.subtitle}>
          For inquiries regarding fine art prints, image licensing, 
          or project collaborations, please reach out via email.
        </p>
      </section>

      <section className={styles.contactInfo}>
        <div className={styles.method}>
          <span className={styles.label}>Email</span>
          <a href="mailto:zeljka.baca1@gmail.com" className={styles.link}>
            zeljka.baca1@gmail.com
          </a>
        </div>

        <div className={styles.method}>
          <span className={styles.label}>Social</span>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com" target="_blank" className={styles.link}>Instagram</a>
            <a href="https://twitter.com" target="_blank" className={styles.link}>Twitter</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/" className={styles.backHome}>
          ← Back to Gallery
        </Link>
      </footer>
    </main>
  );
}