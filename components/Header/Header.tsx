'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  const getHeaderBgClass = () => {
    if (pathname === '/') {
      return styles.home;
    }
    return styles.other;
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
      </div>
    </header>
  );
}
