'use client';

import { useEffect, useState } from 'react';
import css from './Footer.module.css';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setYear(new Date().getFullYear());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p suppressHydrationWarning>© {year ?? ''} OlStroy. Все права защищены.</p>
        <div className={css.wrap}>
          <p>Свяжитесь с нами:</p>
          <p>
            <a href="mailto:info@olstroy.com">info@olstroy.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
