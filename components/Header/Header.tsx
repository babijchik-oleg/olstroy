'use client';

import { KeyboardEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getHeaderBgClass = () => {
    if (pathname === '/') {
      return styles.home;
    }
    return styles.other;
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${getHeaderBgClass()}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Ol<span className={styles.logoSpan}>Stroy</span>
        </Link>

        {/* On the Figma desktop artboard the navigation sits in the middle of the
          header. Below the tablet breakpoint there is not enough room for a
          centred menu, so it is aligned to the right instead. */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Начало
          </Link>
          <Link href="/catalog" className={styles.navLink}>
            Проекти
          </Link>
          <Link href="/price" className={styles.navLink}>
            Цени
          </Link>
        </nav>

        <button
          type="button"
          className={styles.burgerBtn}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isMenuOpen ? 'Затвори менюто' : 'Отвори менюто'}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className={`${styles.burgerLine} ${isMenuOpen ? styles.burgerLineTopOpen : ''}`} />
          <span className={`${styles.burgerLine} ${isMenuOpen ? styles.burgerLineMidOpen : ''}`} />
          <span className={`${styles.burgerLine} ${isMenuOpen ? styles.burgerLineBotOpen : ''}`} />
        </button>
      </div>
      {isMenuOpen && (
        <nav id="mobile-nav-menu" className={styles.mobileNav} aria-label="Мобилна навигация">
          <Link href="/" className={styles.mobileNavLink} onClick={handleCloseMenu}>
            Начало
          </Link>
          <Link href="/catalog" className={styles.mobileNavLink} onClick={handleCloseMenu}>
            Проекти
          </Link>
          <Link href="/price" className={styles.mobileNavLink} onClick={handleCloseMenu}>
            Цени
          </Link>
        </nav>
      )}
    </header>
  );
}
