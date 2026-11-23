import Link from 'next/link';
import styles from './Hero.module.css';
import Image from 'next/image';

interface ProjectPreview {
  id: string;
  tag: string;
  title: string;
  description: string;
  meta: string;
  image: string;
}

interface ReviewItem {
  id: string;
  author: string;
  project: string;
  text: string;
}

const featuredProjects: ProjectPreview[] = [
  {
    id: '1',
    tag: 'Баня до ключ',
    title: 'Модерна баня с гранитогрес',
    description:
      'Слагане на плочки с рязане на 45 градуса, монтаж на вграден душ, линеен сифон и ревизия от плочка.',
    meta: 'кв. Монастирски Ливади, София',
    image: '/Image/previe-1.jpg',
  },
  {
    id: '2',
    tag: 'Баня до ключ',
    title: 'Баня с вана и скрито осветление',
    description:
      'Цялостна хидроизолация, изграждане на екран за вана, ВиК инсталация и таван с LED осветление.',
    meta: 'Kosher • София',
    image: '/Image/foto3.jpg',
  },
  {
    id: '3',
    tag: 'Вътрешен ремонт',
    title: 'Шпакловка и боядисване на апартамент',
    description: 'Изравняване на стени, фина шпакловка и боядисване.',
    meta: 'кв. Сердика • София',
    image: '/Image/shpaklovka.jpg',
  },
];

const reviews: ReviewItem[] = [
  {
    id: '1',
    author: 'Елена Д., ж.к. Манастирски ливади',
    project: 'Ремонт на баня до ключ',
    text: 'Изключително прецизна работа с плочките и ъглите на 45 градуса. Всичко беше завършено в уговорения срок, без скрити оскъпявания и с постоянна връзка по време на ремонта.',
  },
  {
    id: '2',
    author: 'Николай П., ж.к. Лозенец',
    project: 'Баня + ВиК инсталация',
    text: 'Хареса ми, че един човек пое и водопровода, и хидроизолацията, и лепенето на плочките. Помогна ни със съвети за материалите и остави чисто след приключване.',
  },
  {
    id: '3',
    author: 'Мария К., кв. Витоша',
    project: 'Вътрешен ремонт на двустаен апартамент',
    text: 'Правихме гипсокартон, шпакловка, боядисване и банята. Стените станаха идеално прави, а организацията на работа беше на много високо ниво.',
  },
];

export default function HomePage() {
  return (
    <main className={styles.container}>
      {/* 1. Первый экран */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>20 години опит в ремонтите</span>
          <h1 className={styles.heroTitle}>
            Ремонт на бани <span className={styles.heroHighlight}>до ключ</span> и вътрешни ремонти
          </h1>
          <p className={styles.heroSubtitle}>
            Цялостно изпълнение от ВиК и хидроизолация до прецизно лепене на плочки. Поемам и пълни
            вътрешни ремонти на апартаменти — гипсокартон, шпакловка и боя.
          </p>
          <div className={styles.heroActions}>
            <a href="#contacts" className={styles.primaryBtn}>
              Свържете се с мен
            </a>
            <Link href="/catalog" className={styles.secondaryBtn}>
              Вижте моите работи
            </Link>
          </div>
        </div>
      </section>
      {/* 2. Обо мне (вместо отдельной страницы About Us) */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>За мен и моя подход</h2>
        </div>
        <div className={styles.aboutCard}>
          <p className={styles.aboutText}>
            Работя като частен майстор с <strong>20-годишен опит</strong> в строителството и
            вътрешните ремонти. Основната ми специализация са <strong>баните до ключ</strong> —
            изпълнявам лично целия процес: смяна на щрангове, ВиК, хидроизолация, изравняване,
            лепене на плочки и монтажи.
          </p>
          <p className={styles.aboutText}>
            Извършвам също цялостни вътрешни ремонти на апартаменти — монтаж на гипсокартон,
            мазилка, шпакловка, боядисване и лепене на тапети. При по-големи обекти включвам
            проверени колеги, но качеството и сроковете остават под мой личен контрол.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>20 години</span>
              <span className={styles.statLabel}>практически опит в бани и вътрешна отделка</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>От А до Я</span>
              <span className={styles.statLabel}>ВиК, плочки и монтажи в едни ръце</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>Ясни цени</span>
              <span className={styles.statLabel}>точна оферта след оглед без скрити такси</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Превью работ */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Избрани обекти</h2>
          <Link href="/catalog" className={styles.textLink}>
            Всички проекти →
          </Link>
        </div>

        <div className={styles.projectsGrid}>
          {featuredProjects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className={styles.projectImage}
              />
              <div className={styles.projectBody}>
                <span className={styles.projectTag}>{project.tag}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectMeta}>{project.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Отзывы клиентов */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Отзиви от клиенти</h2>
        </div>

        <div className={styles.reviewsGrid}>
          {reviews.map((review) => (
            <article key={review.id} className={styles.reviewCard}>
              <div>
                <div className={styles.stars} aria-label="5 от 5 звезди">
                  ★★★★★
                </div>
                <p className={styles.reviewText}>«{review.text}»</p>
              </div>
              <div className={styles.reviewAuthor}>
                <span className={styles.authorName}>{review.author}</span>
                <span className={styles.authorProject}>{review.project}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
