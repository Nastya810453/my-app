import { ProductCard } from "../components/ProductCard";
import styles from "@/app/catalog/page.module.css";
import prisma from "../../../lib/prisma";

export default async function Catalog() {
  const products = await prisma.card2.findMany();

  return (
    <>
      <section className={styles.catalogHeader}>
        <h1 className={styles.h1}>Каталог товаров</h1>
        <p className={styles.description}>
          Откройте для себя лучшие товары для любого случая!
        </p>
      </section>

      <section className={styles.products}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.prise}
            description={product.description}
            image={product.image} // Используем поле из базы
          />
        ))}
      </section>

      <section className={styles.catalogFooter}>
        <p>Все права защищены © 2024</p>
      </section>
    </>
  );
}
