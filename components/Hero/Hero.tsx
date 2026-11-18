'use client';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Качественное <span className={styles.highlight}>строительство</span>
        </h1>
        <p className={styles.description}>
          От ремонта квартир до комплексного строительства зданий. Мы делаем ваш проект реальностью
          с гарантией качества.
        </p>
        <div className={styles.buttons}>
          <a href="/catalog" className={styles.primaryButton}>
            Узнать больше
          </a>
          <a href="tel:+359876101679" className={styles.secondaryButton}>
            Связаться
          </a>
        </div>
      </div>

      <div className={styles.AboutUs} id="about">
        <h2>О нас</h2>
        <p>
          Мы - команда профессионалов в области строительства и ремонта. Наш опыт позволяет нам
          реализовывать проекты любой сложности с высоким качеством и в установленные сроки.
        </p>
      </div>
    </section>
  );
}
