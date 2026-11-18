'use client';

import styles from './Price.module.css';

interface PriceRow {
  name: string;
  unit: string;
  cost: string;
}

const priceData: PriceRow[] = [
  { name: 'Демонтаж старых покрытий', unit: 'м²', cost: '150 ₽' },
  { name: 'Укладка керамогранита', unit: 'м²', cost: '1200 ₽' },
  { name: 'Монтаж сантехники', unit: 'шт.', cost: '3000 ₽' },
  { name: 'Укладка ламината', unit: 'м²', cost: '800 ₽' },
  { name: 'Поклейка обоев', unit: 'м²', cost: '400 ₽' },
  { name: 'Установка дверей', unit: 'шт.', cost: '2500 ₽' },
  { name: 'Электромонтажные работы', unit: 'точка', cost: '1500 ₽' },
  { name: 'Монтаж натяжного потолка', unit: 'м²', cost: '900 ₽' },
  { name: 'Демонтаж старых покрытий', unit: 'м²', cost: '150 ₽' },
  { name: 'Укладка керамогранита', unit: 'м²', cost: '1200 ₽' },
  { name: 'Монтаж сантехники', unit: 'шт.', cost: '3000 ₽' },
  { name: 'Укладка ламината', unit: 'м²', cost: '800 ₽' },
  { name: 'Поклейка обоев', unit: 'м²', cost: '400 ₽' },
  { name: 'Установка дверей', unit: 'шт.', cost: '2500 ₽' },
  { name: 'Электромонтажные работы', unit: 'точка', cost: '1500 ₽' },
  { name: 'Монтаж натяжного потолка', unit: 'м²', cost: '900 ₽' },
  { name: 'Демонтаж старых покрытий', unit: 'м²', cost: '150 ₽' },
  { name: 'Укладка керамогранита', unit: 'м²', cost: '1200 ₽' },
  { name: 'Монтаж сантехники', unit: 'шт.', cost: '3000 ₽' },
  { name: 'Укладка ламината', unit: 'м²', cost: '800 ₽' },
  { name: 'Поклейка обоев', unit: 'м²', cost: '400 ₽' },
  { name: 'Установка дверей', unit: 'шт.', cost: '2500 ₽' },
  { name: 'Электромонтажные работы', unit: 'точка', cost: '1500 ₽' },
  { name: 'Монтаж натяжного потолка', unit: 'м²', cost: '900 ₽' },
];

export default function PriceTable() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Прайс-лист на работы</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Наименование робот</th>
            <th className={styles.th}>Единицы измерения</th>
            <th className={styles.th}>Стоимость работ (без материалов)</th>
          </tr>
        </thead>
        <tbody>
          {priceData.map((row) => (
            <tr key={row.name} className={styles.tr}>
              <td className={styles.td}>{row.name}</td>
              <td className={styles.td}>{row.unit}</td>
              <td className={styles.td}>{row.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
