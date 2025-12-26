"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../styles/gallery.module.css";

interface Props { images: string[]; }

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

export default function EventsClient({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Helper to change images
  const navigateImage = (direction: number) => {
    if (!selectedImage) return;
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + direction + images.length) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50; // Minimum pixels to trigger a change
    if (info.offset.x > swipeThreshold) {
      navigateImage(-1); // Swiped right -> Previous
    } else if (info.offset.x < -swipeThreshold) {
      navigateImage(1);  // Swiped left -> Next
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [images]);

  return (
    <div className={styles.pageContainer}>
      <Link href="/" className={styles.backButton}>← Back</Link>
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

      <AnimatePresence mode="wait">
        {selectedImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* 1. THE BACKGROUND OVERLAY (Clicking this exits) */}
            <div 
              className={styles.lightboxOverlay} 
              onClick={() => setSelectedImage(null)} 
            />

            {/* 2. THE IMAGE (Clicking/Dragging this won't exit) */}
            <motion.img
              key={selectedImage}
              src={selectedImage}
              className={styles.lightboxImage}
              // Swipe logic
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              // Animation
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* 3. NAVIGATION ARROWS (Optional) */}
            <button className={styles.navButtonPrev} onClick={() => navigateImage(-1)}>‹</button>
            <button className={styles.navButtonNext} onClick={() => navigateImage(1)}>›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}