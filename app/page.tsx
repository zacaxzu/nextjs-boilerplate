"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./styles/home.module.css";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const categories: {
    key: keyof typeof t;
    image: string;
    link: string;
  }[] = [
    {
      key: "events",
      image: "/images/photo1.jpg",
      link: "/gallery/events",
    },
    {
      key: "workshops",
      image: "/images/photo2.jpg",
      link: "/gallery/workshops",
    },
    {
      key: "portraits",
      image: "/images/photo3.jpg",
      link: "/gallery/portraits",
    },
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
          <Link
            key={category.key}
            href={category.link}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={`${styles.card}`}
          >
            <img
              src={category.image}
              alt={t[category.key]}
              loading="lazy"
            />
            <div className={styles.cardTitle}>{t[category.key]}</div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <Link href="/gallery/events">{t.viewWork}</Link>
      </section>
    </div>
  );
}
