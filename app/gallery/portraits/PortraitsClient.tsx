"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../../styles/gallery.module.css";

interface Props {
  images: string[];
}

export default function EventsClient({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!images.length) return;

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

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [images]);

  return (
    <div style={{ padding: "2rem" }}>
      <Link href="/" style={{ fontWeight: "bold" }}>
        ← Back to Categories
      </Link>

      <h1 style={{ textAlign: "center", margin: "1.5rem 0" }}>
        Events Gallery
      </h1>

      {images.length === 0 ? (
        <p style={{ textAlign: "center", opacity: 0.6 }}>
          No images available yet.
        </p>
      ) : (
        <div className={styles.masonry}>
          {images.map((src, index) => (
            <div
              key={src}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={styles.masonryItem}
              onClick={() => setSelectedImage(src)}
            >
              <img src={src} alt="Event" loading="lazy" />
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Full view" />
        </div>
      )}
    </div>
  );
}
