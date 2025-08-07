'use client';
import Navbar from './components/Navbar';
import StoryCard from './components/StoryCard';
import GalleryGrid from './components/GalleryGrid';
import Testimonial from './components/Testimonial';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  // Dummy content; replace with real images/text
  const stories = [ /* ... */ ];
  const pics = [ /* ... */ ];
  const testimonials = [ /* ... */ ];

  return (
    <>
      <Navbar />
      <header className="bg-gray-100 py-12"><h1 className="text-center text-4xl font-bold">Arctic Adventures</h1><p className="text-center mt-2">Discover incredible stories ...</p></header>
      <section className="container mx-auto py-12 space-y-8">
        {stories.map((s,i) => <StoryCard key={i} story={s} />)}
      </section>
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Captured Moments</h2>
        <GalleryGrid pics={pics} />
      </section>
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">What Travelers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t,i) => <Testimonial key={i} t={t} />)}
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
