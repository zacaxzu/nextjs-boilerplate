"use client";

import { motion } from "framer-motion";
import styles from "../styles/about.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        {/* TEXT */}
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h1 className={styles.title}>{t.aboutTitle}</h1>

          <p>{t.aboutIntro}</p>
          <p>{t.aboutBody}</p>

          <p className={styles.signature}>— Željka Baća</p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src="/images/about/me.jpg"
            alt="About me"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
