'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
        👁️ Vision to the World
      </h1>
      <p className="text-lg text-center max-w-md mb-6">
        Build your dreams. Share your story. Empower the world — one line of code at a time.
      </p>
      <Link href="/about">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition">
          Learn More
        </button>
      </Link>
    </main>
  );
}
