import prisma from "../../../../lib/prisma";
import Image from "next/image";
import styles from "./page.module.css";

export default async function Page({ params }) {
  const { id } = params;
  const product = await prisma.card2.findUnique({
    where: { id },
  });

  if (!product) {
    return <p>Товар не найден</p>;
  }

  return (
    <div className={styles.productPage}>
      <Image
        src={product.image} // Используем поле из базы
        alt={product.title}
        width={600}
        height={600}
        className={styles.productImage}
      />
      <h1 className={styles.productTitle}>{product.title}</h1>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>{product.prise} ₽</p>
    </div>
  );
}
