"use client";

import { useState } from "react";
import Link from "next/link";

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
      {/* Back button */}
      <Link href="/" style={{ textDecoration: "none", color: "#0070f3", fontWeight: "bold" }}>
        ← Back to Categories
      </Link>

      <h1 style={{ textAlign: "center", margin: "1.5rem 0" }}>Events Gallery</h1>

      {/* Masonry grid */}
      <div className="masonry">
        {images.map((src, index) => (
          <div key={index} className="masonry-item" onClick={() => setSelectedImage(src)}>
            <img src={src} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full size" />
        </div>
      )}

      <style jsx>{`
        /* Masonry container */
        .masonry {
          column-count: 2; /* 2 columns for mobile and up */
          column-gap: 1rem;
        }

        @media (min-width: 900px) {
          .masonry {
            column-count: 3; /* 3 columns for desktop */
          }
        }

        /* Masonry items */
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.3s;
        }

        .masonry-item img {
          width: 100%;
          height: auto; /* keep original ratio */
          display: block;
          transition: transform 0.3s;
        }

        .masonry-item:hover img {
          transform: scale(1.05);
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          cursor: pointer;
        }

        .lightbox img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
}
