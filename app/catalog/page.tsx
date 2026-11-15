'use client';

import { useState } from 'react';
import Image from 'next/image';
// Импортируем наш массив из папки data (значок @/ указывает на папку src/)
import { allWorks } from '@/data/works';

export default function CatalogPage() {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  const currentWorks = allWorks.slice(0, visibleCount);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">Каталог моих работ</h1>
      {/* Сетка 3 на 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentWorks.map((work) => (
          <div
            key={work.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="relative h-64 w-full bg-gray-100">
              <Image src={work.image} alt={work.title} fill className="object-cover" />
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{work.title}</h2>
              <p className="text-gray-600 text-sm">{work.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка "Смотреть еще" */}
      {visibleCount < allWorks.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleShowMore}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Смотреть еще
          </button>
        </div>
      )}
    </main>
  );
}
