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

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {/* Back button */}
      <Link href="/" style={{ textDecoration: "none", color: "#0070f3", fontWeight: "bold" }}>
        ← Back to Categories
      </Link>

      <h1 style={{ textAlign: "center", margin: "1.5rem 0" }}>Events Gallery</h1>

      {/* Masonry-style grid */}
      <div
        style={{
          columnCount: 3,          // Number of columns
          columnGap: "1rem",       // Space between columns
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              breakInside: "avoid",  // Prevent images from breaking across columns
              marginBottom: "1rem",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={src}
              alt={`Event ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",      // Keep original aspect ratio
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
