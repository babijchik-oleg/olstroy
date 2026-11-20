'use client';

import styles from './Price.module.css';

interface PriceRow {
  name: string;
  unit: string;
  cost: string;
}

const priceData: PriceRow[] = [
  { name: 'Смяна на щранг', unit: 'бр', cost: '150€' },
  { name: 'Монтаж на водопровод', unit: 'точка', cost: '50€' },
  { name: 'Монтаж на смесител', unit: 'бр', cost: 'от 50€' },
  { name: 'Монтаж на инсталация', unit: 'бр', cost: '150€' },
  { name: 'Монтаж на линеен сифон', unit: 'бр', cost: 'от 50€' },
  { name: 'Изводи на вграден смесител или душ', unit: 'шт.', cost: 'от. 75€' },
  { name: 'Монтаж на тоалетно казанче, бутон', unit: 'бр', cost: '150€' },
  { name: 'Монтаж на смесител, душ ', unit: 'м²', cost: 'от 50€' },

  { name: 'Монтаж на гипсокартон', unit: 'м²', cost: 'от 30€' },
  { name: 'Монтаж на конструкции от гипсокартона', unit: 'БР', cost: 'по договаряне' },
  { name: 'Замазка (до 2см) ', unit: 'м²', cost: '15€' },
  { name: 'Мазилка', unit: 'м²', cost: 'от 15€' },
  { name: 'Шпакловка', unit: 'м²', cost: '15€' },
  { name: 'Декоративна шпакловка/боя', unit: 'м²', cost: 'от 20€' },
  { name: 'Шлайфане на шпакловка', unit: 'м²', cost: 'от 5€' },
  { name: 'Грунд', unit: 'м²', cost: '5€' },
  { name: 'Боядисване', unit: 'м²', cost: 'от 7€' },

  { name: 'Хидроизолация', unit: 'м²', cost: '10€' },
  { name: 'Слагане на плочки', unit: 'м²/м.л', cost: 'от 50€' },
  { name: 'Фугиране', unit: 'м²', cost: 'от 7€' },
  { name: 'Отвори в плочка', unit: 'бр', cost: '20€' },
  { name: 'Изрязване на 45 градуса', unit: 'м.л.', cost: '50€' },
  { name: 'Формиране(фугиране с кит или епоксидна фуга) ъгъл', unit: 'м.л', cost: '15€' },
  { name: 'Таван в баня', unit: 'м²', cost: 'от 300€' },
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
