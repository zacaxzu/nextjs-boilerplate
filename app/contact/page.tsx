"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/contact.module.css";

export default function Contact() {
  
  // Explicitly type the container variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Explicitly type the item variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        // Cast the array to 'any' or use a recognized string if TS persists
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  return (
    <motion.main 
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.glow} />
      <motion.section className={styles.hero} variants={itemVariants}>
        <h1 className={styles.title}>Let’s connect.</h1>
        <p className={styles.subtitle}>
          For inquiries regarding image licensing, event photography
          or project collaborations, please reach out via email.
        </p>
      </motion.section>

      <div className={styles.contactInfo}>
        <motion.div className={styles.method} variants={itemVariants}>
          <span className={styles.label}>Email</span>
          <a href="mailto:zeljka.baca1@gmail.com" className={styles.link}>
            zeljka.baca1@gmail.com
          </a>
        </motion.div>

        <motion.div className={styles.method} variants={itemVariants}>
          <span className={styles.label}>Social</span>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com" target="_blank" className={styles.link}>Instagram</a>
          </div>
        </motion.div>
      </div>

      <motion.footer className={styles.footer} variants={itemVariants}>
        <Link href="/" className={styles.backHome}>
          ← Back to Gallery
        </Link>
      </motion.footer>
    </motion.main>
  );
}