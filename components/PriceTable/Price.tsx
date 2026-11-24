'use client';

import { Fragment } from 'react';
import styles from './Price.module.css';

export type PriceCategoryKey = 'plumbing' | 'wallsAndCeilings' | 'tiling';

export const priceCategoryLabels: Record<
  PriceCategoryKey,
  {
    bg: string;
    ru: string;
    en: string;
  }
> = {
  plumbing: {
    bg: 'ВиК',
    ru: 'Сантехника',
    en: 'Plumbing',
  },
  wallsAndCeilings: {
    bg: 'Стени и тавани',
    ru: 'Внутренняя отделка',
    en: 'Walls & Ceilings',
  },
  tiling: {
    bg: 'Плочки',
    ru: 'Плитка',
    en: 'Tiling',
  },
};

interface PriceRow {
  id: string;
  category: PriceCategoryKey;
  name: string;
  unit: string;
  cost: string;
}

const priceData: PriceRow[] = [
  { id: '1', category: 'plumbing', name: 'Смяна на щранг', unit: 'бр', cost: '150€' },
  { id: '2', category: 'plumbing', name: 'Монтаж на водопровод', unit: 'точка', cost: '50€' },
  { id: '3', category: 'plumbing', name: 'Монтаж на смесител', unit: 'бр', cost: '50€' },
  { id: '4', category: 'plumbing', name: 'Монтаж на инсталация', unit: 'бр', cost: '150€' },
  { id: '5', category: 'plumbing', name: 'Монтаж на линеен сифон', unit: 'бр', cost: '50€' },
  {
    id: '6',
    category: 'plumbing',
    name: 'Изводи на вграден смесител или душ',
    unit: 'бр',
    cost: '75€',
  },
  {
    id: '7',
    category: 'plumbing',
    name: 'Монтаж на тоалетно казанче, бутон',
    unit: 'бр',
    cost: '150€',
  },

  { id: '8', category: 'wallsAndCeilings', name: 'Монтаж на гипсокартон', unit: 'м²', cost: '30€' },
  {
    id: '9',
    category: 'wallsAndCeilings',
    name: 'Монтаж на конструкции от гипсокартона',
    unit: 'бр',
    cost: 'по договаряне',
  },
  { id: '10', category: 'wallsAndCeilings', name: 'Замазка (до 2см) ', unit: 'м²', cost: '15€' },
  { id: '11', category: 'wallsAndCeilings', name: 'Мазилка', unit: 'м²', cost: '15€' },
  { id: '12', category: 'wallsAndCeilings', name: 'Шпакловка(две ръце)', unit: 'м²', cost: '15€' },
  {
    id: '13',
    category: 'wallsAndCeilings',
    name: 'Декоративна шпакловка/боя',
    unit: 'м²',
    cost: '20€',
  },
  { id: '14', category: 'wallsAndCeilings', name: 'Шлайфане на шпакловка', unit: 'м²', cost: '5€' },
  { id: '15', category: 'wallsAndCeilings', name: 'Грунд', unit: 'м²', cost: '5€' },
  { id: '16', category: 'wallsAndCeilings', name: 'Боядисване', unit: 'м²', cost: '5€-8€' },

  { id: '17', category: 'tiling', name: 'Хидроизолация', unit: 'м²', cost: '10€' },
  {
    id: '18',
    category: 'tiling',
    name: 'Слагане на плочки',
    unit: 'м²/м.л',
    cost: '50€',
  },
  { id: '19', category: 'tiling', name: 'Фугиране', unit: 'м²', cost: '7€-15€' },
  { id: '20', category: 'tiling', name: 'Отвори в плочка', unit: 'бр', cost: '20€' },
  { id: '21', category: 'tiling', name: 'Изрязване на 45 градуса', unit: 'м.л.', cost: '50€' },
  {
    id: '22',
    category: 'tiling',
    name: 'Формиране(фугиране с кит или епоксидна фуга) ъгъл',
    unit: 'м.л',
    cost: '15€',
  },
  { id: '23', category: 'tiling', name: 'Таван в баня', unit: 'м²', cost: '300€' },
];

export default function PriceTable() {
  const locale = 'bg';

  const categoryOrder: PriceCategoryKey[] = ['plumbing', 'wallsAndCeilings', 'tiling'];

  const groupedByCategory = categoryOrder.reduce<Record<PriceCategoryKey, PriceRow[]>>(
    (acc, key) => {
      acc[key] = priceData.filter((item) => item.category === key);
      return acc;
    },
    {
      plumbing: [],
      wallsAndCeilings: [],
      tiling: [],
    }
  );
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Ценорозпис*</h2>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Вид дейност</th>
            <th className={styles.th}>Мярка</th>
            <th className={`${styles.th} ${styles.tdName}`}>Цена за труд</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {categoryOrder.map((categoryKey) => {
            const categoryRows = groupedByCategory[categoryKey];
            return (
              <Fragment key={categoryKey}>
                <tr className={styles.categoryRow}>
                  <th colSpan={3} scope="colgroup" className={styles.categoryCell}>
                    {priceCategoryLabels[categoryKey][locale]}
                  </th>
                </tr>
                {categoryRows.map((row) => (
                  <tr key={row.id} className={styles.tr}>
                    <td className={`${styles.td} ${styles.tdName}`}>{row.name}</td>
                    <td className={`${styles.td} ${styles.tdUnit}`} data-label="Мярка">
                      {row.unit}
                    </td>
                    <td className={`${styles.td} ${styles.tdPrice}`} data-label="Цена за труд">
                      {row.cost}
                    </td>
                  </tr>
                ))}
              </Fragment>
            );
          })}
        </tbody>
      </table>
      <p className={styles.disclaimer}>
        * Цените са ориентироочни. Крайна цена зависи от избора на материалите и дизайн проекта
      </p>
    </section>
  );
}
