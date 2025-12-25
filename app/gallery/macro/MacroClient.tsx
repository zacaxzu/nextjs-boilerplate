"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../../styles/gallery.module.css";

// New helper component for smooth loading
function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`${styles.imageWrapper} ${isLoaded ? styles.loaded : ""}`}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={styles.actualImage}
      />
    </div>
  );
}

interface Props {
  images: string[];
}

export default function EventsClient({ images }: Props) {
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
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [images]);

  return (
    <div className={styles.pageContainer}>
      <Link href="/" className={styles.backButton}>
        ← Back
      </Link>

      <h1 className={styles.galleryTitle}>Macro Gallery</h1>

      <div className={styles.masonry}>
        {images.map((src, index) => (
          <div
            key={src}
            ref={(el) => { itemsRef.current[index] = el; }}
            className={styles.masonryItem}
            onClick={() => setSelectedImage(src)}
          >
            <GalleryImage src={src} alt={`Macro ${index + 1}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full view" className={styles.lightboxImage} />
        </div>
      )}
    </div>
  );
}