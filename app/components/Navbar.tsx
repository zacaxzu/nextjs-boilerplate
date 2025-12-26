"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navbar.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // ✅ MOVE HOOK HERE
  const { toggleLanguage, language, t } = useLanguage();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>My Portfolio</div>

      {/* Language switch */}
      <button
        onClick={toggleLanguage}
        className={styles.langButton}
      >
        {language === "en" ? "HR" : "EN"}
      </button>

      {/* Desktop links */}
      <div className={styles.links}>
        <Link href="/" className={isActive("/") ? styles.active : ""}>
          Home
        </Link>
        {/* Dropdown Container */}
      <div 
        className={styles.dropdown}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button className={styles.dropdownBtn}>
          Gallery <span className={styles.chevron}>▾</span>
        </button>
        
        {isDropdownOpen && (
          <div className={styles.dropdownContent}>
            <Link href="/gallery/insects">Insects</Link>
            <Link href="/gallery/botanicals">Botanicals</Link>
            <Link href="/gallery/abstract">Abstract</Link>
          </div>
        )}
      </div>
        <Link
          href="/about"
          className={isActive("/about") ? styles.active : ""}
        >
          {t.about}
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className={styles.menuButton}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/gallery/events" onClick={() => setOpen(false)}>
            {t.talks}
          </Link>
          <Link href="/gallery/workshops" onClick={() => setOpen(false)}>
            {t.workshops}
          </Link>
          <Link href="/gallery/portraits" onClick={() => setOpen(false)}>
            {t.portraits}
          </Link>
          <Link href="/pages/about" onClick={() => setOpen(false)}>
            {t.about}
          </Link>
        </div>
      )}
    </nav>
  );
}
