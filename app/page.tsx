"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./styles/home.module.css";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const categories: {
    key: keyof typeof t;
    image: string;
    link: string;
  }[] = [
    {
      key: "talks",
      image: "/images/talks/20201020_job_fair_CROZ_ivan_derek_06.jpg",
      link: "/gallery/talks",
    },
    {
      key: "workshops",
      image: "/images/workshops/20211207_MACIKLI_mlade_na_bicikle_predavanje_d_zeljka_baca_23.jpg",
      link: "/gallery/workshops",
    },
    {
      key: "portraits",
      image: "/images/portraits/StockCake-Intense_gaze_portrait-1227405-medium.jpg",
      link: "/gallery/portraits",
    },
    {
      key: "concerts",
      image: "/images/concerts/20240626_inmusic_bombay_bicycle_club_d_zeljka_baca_02.jpg",
      link: "/gallery/concerts",
    },
    {
      key: "macro",
      image: "/images/macro/20220806-IMG_3338-Edit.jpg",
      link: "/gallery/macro",
    },
    {
      key: "analog",
      image: "/images/analog/20220127_Mamut_d_zeljka_baca_02.jpg",
      link: "/gallery/analog",
    },
    {
      key: "food",
      image: "/images/food/20221029_BBQ_radionica_subota_d_zeljka_baca_17.jpg",
      link: "/gallery/food",
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.cardVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>{t.homeTitle}</h1>
        <p className={styles.heroSubtitle}>{t.homeSubtitle}</p>
      </section>

      {/* CATEGORY GRID */}
      <section className={styles.grid}>
        {categories.map((category, index) => (
          <Link key={category.key} href={category.link} className={styles.cardLink}>
            <div
              ref={(el) => { cardsRef.current[index] = el; }}
              className={styles.card}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* IMAGE PREVIEW NOW ON LEFT */}
              <div className={styles.imagePreview}>
                <img
                  src={category.image}
                  alt={String(t[category.key])}
                  className={styles.cardImage}
                />
              </div>

              {/* TEXT CONTENT NOW ON RIGHT */}
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{t[category.key]}</h3>
                <p className={styles.cardDescription}>
                  <span className={styles.arrow}>→</span>
                  <span className={styles.text}>{t.viewWork}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
