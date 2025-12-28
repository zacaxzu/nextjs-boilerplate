"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navbar.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // Mobile menu open/close
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false); // Mobile dropdown toggle

  const { toggleLanguage, language, t } = useLanguage();

  const handleMobileLinkClick = () => {
    setOpen(false);
    setMobileGalleryOpen(false);
  };

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link 
        href="/" 
        className={styles.logo} 
        onClick={() => setOpen(false)}
      >
        My Portfolio
      </Link>

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
            <button className={`${styles.dropdownBtn} ${pathname.includes('/gallery') ? styles.active : ""}`}>
              Gallery <span className={styles.chevron}>▾</span>
            </button>
            
            <AnimatePresence>
            {isDropdownOpen && (
              <div className={styles.dropdownContent}>
                <Link href="/gallery/networking">Networking</Link>
                <Link href="/gallery/workshops">Workshops</Link>
                <Link href="/gallery/portraits">Portraits</Link>
                <Link href="/gallery/concerts">Concerts</Link>
                <Link href="/gallery/macro">Macro</Link>
                <Link href="/gallery/analog">Analog</Link>
                <Link href="/gallery/food">Food</Link>
              </div>
            )}
            </AnimatePresence>
          </div>
        <Link
          href="/contact"
          className={isActive("/contact") ? styles.active : ""}
        >
          {t.contact}
        </Link>
      </div>

      {/* MOBILE HAMBURGER */}
      <button className={styles.menuButton} onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <Link href="/" onClick={handleMobileLinkClick}>Home</Link>
            
            {/* MOBILE DROPDOWN ACCORDION */}
            <div className={styles.mobileDropdownContainer}>
              <button 
                className={styles.mobileDropdownBtn} 
                onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}
              >
                Gallery <span>{mobileGalleryOpen ? "▴" : "▾"}</span>
              </button>
              
              <AnimatePresence>
                {mobileGalleryOpen && (
                  <motion.div 
                    className={styles.mobileSubMenu}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <Link href="/gallery/networking" onClick={handleMobileLinkClick}>{t.networking}</Link>
                    <Link href="/gallery/workshops" onClick={handleMobileLinkClick}>{t.workshops}</Link>
                    <Link href="/gallery/portraits" onClick={handleMobileLinkClick}>{t.portraits}</Link>
                    <Link href="/gallery/concerts" onClick={handleMobileLinkClick}>{t.concerts}</Link>
                    <Link href="/gallery/macro" onClick={handleMobileLinkClick}>{t.macro}</Link>
                    <Link href="/gallery/analog" onClick={handleMobileLinkClick}>{t.analog}</Link>
                    <Link href="/gallery/food" onClick={handleMobileLinkClick}>{t.food}</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" onClick={handleMobileLinkClick}>{t.contact}</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
