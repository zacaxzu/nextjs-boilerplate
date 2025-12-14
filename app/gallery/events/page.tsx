"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./EventsPage.module.css";

export default function EventsPage() {
  const images = [
    "/images/events1.jpg",
    "/images/events2.jpg",
    "/images/events3.jpg",
    "/images/events4.jpg",
    "/images/events5.jpg",
    "/images/events6.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Link href="/" style={{ fontWeight: "bold" }}>
        ← Back to Categories
      </Link>

      <h1 style={{ textAlign: "center", margin: "1.5rem 0" }}>
        Events Gallery
      </h1>

      <div className={styles.masonry}>
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => {itemsRef.current[index] = el;}}
            className={styles.masonryItem}
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} alt={`Event ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Full size" />
        </div>
      )}
    </div>
  );
}
