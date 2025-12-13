import Link from "next/link";
import styles from "./styles/home.module.css";

export default function Home() {
  const categories = [
    {
      name: "Events",
      image: "/images/photo1.jpg",
      link: "/gallery/events",
    },
    {
      name: "Workshops",
      image: "/images/photo2.jpg",
      link: "/gallery/workshops",
    },
    {
      name: "Portraits",
      image: "/images/photo3.jpg",
      link: "/gallery/portraits",
    },
  ];

  return (
    <div className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Capturing Moments That Matter</h1>
        <p className={styles.heroSubtitle}>
          Professional photography for events, workshops, and portraits.
          Timeless visuals that tell real stories.
        </p>
      </section>

      {/* CATEGORY GRID */}
      <section className={styles.grid}>
        {categories.map((category) => (
          <Link key={category.name} href={category.link} className={styles.card}>
            <img src={category.image} alt={category.name} loading="lazy" />
            <div className={styles.cardTitle}>{category.name}</div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <Link href="/gallery/events">View Latest Work</Link>
      </section>
    </div>
  );
}
