import Image from "next/image";

export default function Home() {
  const photos = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg"
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>My Photo Portfolio</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem"
        }}
      >
        {photos.map((src, index) => (
          <div key={index} style={{ overflow: "hidden", borderRadius: "8px" }}>
            <img
              src={src}
              alt={`Photo ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              //onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              //onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

