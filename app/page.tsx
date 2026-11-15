import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
        Ol<span className="font-light">Stroy</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-gray-600">
        Строительная компания. Ремонт, отделка и строительство под ключ.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/catalog"
          className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white shadow transition-colors hover:bg-blue-700"
        >
          Каталог работ
        </Link>
        <Link
          href="/price"
          className="rounded-lg border border-gray-300 px-8 py-3 font-medium text-gray-800 transition-colors hover:bg-gray-100"
        >
          Цены
        </Link>
      </div>
    </main>
  );
}
