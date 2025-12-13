"use client";

import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>My Portfolio</div>

      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/gallery/events">Events</Link>
        <Link href="/gallery/workshops">Workshops</Link>
        <Link href="/gallery/portraits">Portraits</Link>
      </div>
    </nav>
  );
}
