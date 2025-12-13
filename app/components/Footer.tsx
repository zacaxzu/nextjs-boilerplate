"use client";

import { useEffect, useState } from "react";
import styles from "../styles/footer.module.css";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <p>© {year} My Photo Portfolio</p>
      <p>All rights reserved</p>
    </footer>
  );
}
