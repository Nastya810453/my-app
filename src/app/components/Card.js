import styles from "./card.module.css";
import Image from "next/image";

export function Card({ title, image }) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className={styles.cardImage}
      />
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
}
