'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Icon } from '../Icon/Icon';
import styles from './Footer.module.css';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setYear(new Date().getFullYear());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.content}>
        {/* Верхний CTA-блок, перенесённый из Hero */}
        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>Имате нужда от ремонт на баня или апартамент?</h2>
            <p className={styles.ctaSubtitle}>
              Обадете се или изпратете снимки и размери във Viber или WhatsApp за ориентировъчна
              оферта и оглед в София.
            </p>
          </div>

          <div className={styles.ctaButtons}>
            <a
              href="tel:+359876101679"
              className={`${styles.iconBtn} ${styles.callBtn}`}
              aria-label="Обадете се: +359 876 101 679"
              title="Обадете се: +359 876 101 679"
            >
              <Icon name="icon-phone" size={32} />
            </a>

            <a
              href="viber://chat?number=%2B359876101679"
              className={`${styles.iconBtn} ${styles.viberBtn}`}
              aria-label="Пиши във Viber"
              title="Пиши във Viber"
            >
              <Icon name="icon-viber" size={32} />
            </a>

            <a
              href="https://t.me/+359876101679"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.iconBtn} ${styles.telegramBtn}`}
              aria-label="Пиши в Telegram"
              title="Пиши в Telegram"
            >
              <Icon name="icon-send" size={26} />
            </a>
          </div>
        </div>

        {/* Основная сетка футера */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link className={styles.brandName} href="/">
              Ol<span className={styles.brandAccent}>Stroy</span>
            </Link>
            <p className={styles.brandTagline}>
              Ремонт на бани до ключ, плочки и вътрешни ремонти в София.
            </p>
          </div>

          <div className={styles.contacts}>
            <p className={styles.sectionTitle}>Контакти</p>
            <div className={styles.contactLinks}>
              <a href="tel:+359876101679" className={styles.contactLink} aria-label="Обадете се">
                <Icon name="icon-phone" size={16} className={styles.contactIcon} />
                +359 876 101 679
              </a>
              <a
                href="olstroy20@gmail.com"
                className={styles.contactLink}
                aria-label="Изпратете имейл"
              >
                <Icon name="icon-email" size={16} className={styles.contactIcon} />
                olstroy20@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.socials}>
            <p className={styles.sectionTitle}>Социални мрежи</p>
            <a
              href="https://www.facebook.com/profile.php?id=100062025736198"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fbCard}
              aria-label="Facebook профил на OlStroy"
            >
              <span className={styles.fbIconWrap}>
                <Icon name="icon-facebook-1" size={18} className={styles.fbIcon} />
              </span>
              <span className={styles.fbInfo}>
                <span className={styles.fbTitle}>Facebook</span>
                <span className={styles.fbSub}>Актуални обекти и снимки</span>
              </span>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p suppressHydrationWarning>© {year ?? ''} OlStroy. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
}
