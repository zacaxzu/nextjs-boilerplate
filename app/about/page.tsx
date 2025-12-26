import React from 'react';
import Link from 'next/link';
import styles from '../styles/about.module.css';

export const metadata = {
  title: 'About the Photographer',
  description: 'The vision and philosophy behind the macro photography.',
};

export default function About() {
  return (
    <main className={styles.container}>
      {/* Visual Hook */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Capturing the <br/>unseen scale.</h1>
        <p className={styles.philosophy}>
          My work is an exploration of the miniature. By focusing on the 
          textures, patterns, and lifeforms that often go unnoticed, I aim to 
          bridge the gap between the mundane and the extraordinary.
        </p>
      </section>

      <div className={styles.contentGrid}>
        {/* The "Why" */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Vision</h2>
          <p>
            Macro photography is more than just magnification; it is a change 
            in perspective. I am drawn to the structural complexity of 
            botanicals and the alien-like characteristics of the insect world. 
            Every frame is a study of light, patience, and the silent 
            geometry of nature.
          </p>
        </section>

        {/* Technical/Exhibitions */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Process</h2>
          <p>
            I utilize high-magnification optics and specialized lighting 
            to isolate subjects in their natural habitats. My process 
            respects the environment—I capture life as it is, focusing 
            on authentic moments within the micro-wilderness.
          </p>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.contactBlock}>
          <h2 className={styles.sectionTitle}>Inquiries</h2>
          <p>For prints, licensing, or collaborations:</p>
          <a href="mailto:photography@example.com" className={styles.email}>
            hello@yourname.com
          </a>
        </div>
        
        <div className={styles.backHome}>
          <Link href="/">← Return to Gallery</Link>
        </div>
      </footer>
    </main>
  );
}