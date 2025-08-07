'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="min-h-screen">
      <section data-aos="fade-up" className="p-6">
        <h1 className="text-4xl font-bold text-center">Vision to the World</h1>
        <p className="text-center mt-4">Where your story begins...</p>
      </section>

      {/* Example animated story cards */}
      <section className="space-y-6 p-6">
        <div data-aos="zoom-in">
          <StoryCard story={stories[0]} />
        </div>
        <div data-aos="zoom-in">
          <StoryCard story={stories[1]} />
        </div>
      </section>
    </main>
  );
}
