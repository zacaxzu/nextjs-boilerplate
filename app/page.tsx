import Link from "next/link";

export default function Home() {
  const categories = [
    { name: "Events", image: "/images/photo1.jpg", link: "/gallery/events" },
    { name: "Workshops", image: "/images/photo2.jpg", link: "/workshops" },
    { name: "Portraits", image: "/images/photo3.jpg", link: "/portraits" },
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>My Photo Portfolio</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {categories.map((category, index) => (
          <Link key={index} href={category.link}>
            <div
              style={{
                overflow: "hidden",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
              />
              <h2 style={{ marginTop: "0.5rem" }}>{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
