import { Card } from "./components/Card";
import styles from "./page.module.css";
import prisma from "../../lib/prisma"; 
import Image from "next/image";

export default async function Home() {
  const categories = await prisma.card.findMany();

  const categoryImages = [
    { image: "/catalog/category1.svg" }, 
    { image: "/catalog/category2.svg" },
    { image: "/catalog/category3.svg" },
    { image: "/catalog/category4.svg" },
    { image: "/catalog/category5.svg" },
    { image: "/catalog/category6.svg" },
  ];

  return (
    <>
      <section className={styles.bannerSection}>
        <Image
          src="/catalog/welcome.jpg"
          alt="Баннер"
          width={1920}
          height={600}
          className={styles.bannerImage}
        />
        <div className={styles.bannerText}>
          <h1>Добро пожаловать в мир стиля!</h1>
          <p>Откройте лучшие коллекции прямо сейчас</p>
        </div>
      </section>

      <section className={styles.categories}>
        <h2>Популярные категории</h2>
        <div className={styles.categoryList}>
          {categories.map((category, index) => (
            <Card
              key={category.id}
              title={category.title}
              image={categoryImages[index]?.image || "/catalog/default.svg"}
            />
          ))}
        </div>
      </section>

      <section className={styles.catalogFooter}>
        <p>Все права защищены © 2024</p>
      </section>
    </>
  );
}
