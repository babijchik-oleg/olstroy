'use client';

import { useState } from 'react';
import Image from 'next/image';
// Импортируем наш массив из папки data (значок @/ указывает на корень проекта)
import { allWorks } from '@/data/works';
import styles from './Catalog.module.css';

export default function CatalogPage() {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  const currentWorks = allWorks.slice(0, visibleCount);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Каталог моих работ</h1>
      {/* Сетка 3 на 3 */}
      <div className={styles.grid}>
        {currentWorks.map((work) => (
          <div key={work.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={work.image}
                alt={work.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className={styles.content}>
              <h2 className={styles.cardTitle}>{work.title}</h2>
              <p className={styles.description}>{work.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка "Смотреть еще" */}
      {visibleCount < allWorks.length && (
        <div className={styles.buttonWrapper}>
          <button onClick={handleShowMore} className={styles.button}>
            Смотреть еще
          </button>
        </div>
      )}
    </main>
  );
}
