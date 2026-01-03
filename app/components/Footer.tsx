"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "../styles/footer.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();

  // We don't want to show the footer link IF the user is already on the contact page
  if (pathname === "/contact") return null;

  return (
    <footer className={styles.stickyFooter}>
      <motion.div 
        className={styles.container}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href="/contact" className={styles.contactButton}>
          {t.contact} <span className={styles.arrow}>→</span>
        </Link>
      </motion.div>
    </footer>
  );
}