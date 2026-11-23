'use client';

import styles from './Price.module.css';

interface PriceRow {
  id: string;
  name: string;
  unit: string;
  cost: string;
}

const priceData: PriceRow[] = [
  { id: '1', name: 'Смяна на щранг', unit: 'бр', cost: '150€' },
  { id: '2', name: 'Монтаж на водопровод', unit: 'точка', cost: '50€' },
  { id: '3', name: 'Монтаж на смесител', unit: 'бр', cost: '50€' },
  { id: '4', name: 'Монтаж на инсталация', unit: 'бр', cost: '150€' },
  { id: '5', name: 'Монтаж на линеен сифон', unit: 'бр', cost: '50€' },
  { id: '6', name: 'Изводи на вграден смесител или душ', unit: 'бр', cost: '75€' },
  { id: '7', name: 'Монтаж на тоалетно казанче, бутон', unit: 'бр', cost: '150€' },

  { id: '8', name: 'Монтаж на гипсокартон', unit: 'м²', cost: '30€' },
  { id: '9', name: 'Монтаж на конструкции от гипсокартона', unit: 'бр', cost: 'по договаряне' },
  { id: '10', name: 'Замазка (до 2см) ', unit: 'м²', cost: '15€' },
  { id: '11', name: 'Мазилка', unit: 'м²', cost: '15€' },
  { id: '12', name: 'Шпакловка(две ръце)', unit: 'м²', cost: '15€' },
  { id: '13', name: 'Декоративна шпакловка/боя', unit: 'м²', cost: '20€' },
  { id: '14', name: 'Шлайфане на шпакловка', unit: 'м²', cost: '5€' },
  { id: '15', name: 'Грунд', unit: 'м²', cost: '5€' },
  { id: '16', name: 'Боядисване', unit: 'м²', cost: '5€-8€' },

  { id: '17', name: 'Хидроизолация', unit: 'м²', cost: '10€' },
  {
    id: '18',
    name: 'Слагане на плочки',
    unit: 'м²/м.л',
    cost: '50€',
  },
  { id: '19', name: 'Фугиране', unit: 'м²', cost: '7€-15€' },
  { id: '20', name: 'Отвори в плочка', unit: 'бр', cost: '20€' },
  { id: '21', name: 'Изрязване на 45 градуса', unit: 'м.л.', cost: '50€' },
  { id: '22', name: 'Формиране(фугиране с кит или епоксидна фуга) ъгъл', unit: 'м.л', cost: '15€' },
  { id: '23', name: 'Таван в баня', unit: 'м²', cost: '300€' },
];

export default function PriceTable() {
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
          {priceData.map((row) => (
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
          <p className={styles.td}>
            * Цените са ориентироочни. Крайна цена зависи от избора на материалите и дизайн
            проекта{' '}
          </p>
        </tbody>
      </table>
    </section>
  );
}
