"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>My Portfolio</div>

      {/* Desktop links */}
      <div className={styles.links}>
        <Link href="/" className={isActive("/") ? styles.active : ""}>Home</Link>
        <Link href="/gallery/events" className={isActive("/gallery/events") ? styles.active : ""}>Events</Link>
        <Link href="/gallery/workshops" className={isActive("/gallery/workshops") ? styles.active : ""}>Workshops</Link>
        <Link href="/gallery/portraits" className={isActive("/gallery/portraits") ? styles.active : ""}>Portraits</Link>
      </div>

      {/* Mobile hamburger */}
      <button className={styles.menuButton} onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/gallery/events" onClick={() => setOpen(false)}>Events</Link>
          <Link href="/gallery/workshops" onClick={() => setOpen(false)}>Workshops</Link>
          <Link href="/gallery/portraits" onClick={() => setOpen(false)}>Portraits</Link>
        </div>
      )}
    </nav>
  );
}
