import styles from "./productCard.module.css";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ id, title, price, description, image }) {
  return (
    <div className={styles.card}>
      <Image
        src={image} 
        alt={title}
        width={300}
        height={300}
        className={styles.cardImage}
      />
      <Link href={`/catalog/${id}`} className={styles.cardTitle}>
        {title}
      </Link>
      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.cardPrice}>{price} ₽</p>
      <button className={styles.addToCartBtn}>Добавить в корзину</button>
    </div>
  );
}
