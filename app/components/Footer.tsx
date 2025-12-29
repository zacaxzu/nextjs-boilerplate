"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/footer.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();

  // We don't want to show the footer link IF the user is already on the contact page
  if (pathname === "/contact") return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.line} />
      <div className={styles.content}>
        <Link href="/contact" className={styles.contactLink}>
          {t.contact} →
        </Link>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} My Portfolio
      </div>
    </footer>
  );
}