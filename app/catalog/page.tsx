'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
// Импортируем наш массив из папки data (значок @/ указывает на корень проекта)
import { allWorks, type WorkItem } from '@/data/works';
import styles from './Catalog.module.css';

export default function CatalogPage() {
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  useEffect(() => {
    if (!selectedWork) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedWork(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedWork]);

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
            <div
              className={styles.imageWrapper}
              onClick={() => setSelectedWork(work)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedWork(work);
                }
              }}
            >
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
      {selectedWork && (
        <div className={styles.lightboxBackdrop} onClick={() => setSelectedWork(null)}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setSelectedWork(null)}
            aria-label="Close foto"
          >
            &times;
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedWork.image}
              alt={selectedWork.title}
              width={1200}
              height={900}
              unoptimized
              className={styles.lightboxImage}
            />
            {(selectedWork.title || selectedWork.description) && (
              <p className={styles.lightboxCaption}>
                <strong>{selectedWork.title}</strong>
                {selectedWork.description ? ` - ${selectedWork.description}` : ''}
              </p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
