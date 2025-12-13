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
      <h1 className={styles.title}>My Photo Portfolio</h1>

      <div className={styles.grid}>
        {categories.map((category) => (
          <Link key={category.name} href={category.link} className={styles.card}>
            <img src={category.image} alt={category.name} loading="lazy"/>
            <div className={styles.cardTitle}>{category.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
