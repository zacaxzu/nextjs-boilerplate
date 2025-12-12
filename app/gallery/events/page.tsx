"use client";

import { useState } from "react";
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

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Link href="/" style={{ textDecoration: "none", color: "#0070f3", fontWeight: "bold" }}>
        ← Back to Categories
      </Link>

      <h1 style={{ textAlign: "center", margin: "1.5rem 0" }}>Events Gallery</h1>

      {/* Masonry grid */}
      <div className={styles.masonry}>
        {images.map((src, index) => (
          <div
            key={index}
            className={styles.masonryItem}
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Full size" />
        </div>
        )}
    </div>
  );
}
