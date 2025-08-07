'use client';
import Navbar from './components/Navbar';
import StoryCard from './components/StoryCard';
import GalleryGrid from './components/GalleryGrid';
import Testimonial from './components/Testimonial';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  // Dummy content; replace with real images/text
  const stories = [
    {
      img: "https://placehold.co/600x400",
      category: "Wildlife",
      author: "Jane Doe",
      read: "5 min read",
      title: "Journey to the Arctic",
      desc: "Discover the untouched beauty of the icy north.",
      date: "August 2025"
    },
    {
      img: "https://placehold.co/600x400",
      category: "Culture",
      author: "John Smith",
      read: "3 min read",
      title: "Traditions of the North",
      desc: "A look into the vibrant customs of the arctic tribes.",
      date: "August 2025"
    },
  ];

  const pics = [
    { img: "https://placehold.co/300x200", title: "Northern Lights" },
    { img: "https://placehold.co/300x200", title: "Snow Fox" },
    { img: "https://placehold.co/300x200", title: "Frozen Lake" },
    { img: "https://placehold.co/300x200", title: "Iceberg Cruise" },
  ];

  const testimonials = [
    {
      quote: "This journey changed my life.",
      name: "Emily R.",
      location: "Toronto, Canada",
      img: "https://placehold.co/100x100"
    },
    {
      quote: "Breathtaking views and amazing people.",
      name: "Carlos M.",
      location: "Barcelona, Spain",
      img: "https://placehold.co/100x100"
    },
    {
      quote: "A luxury adventure like no other.",
      name: "Aisha N.",
      location: "Cape Town, South Africa",
      img: "https://placehold.co/100x100"
    },
  ];

  return (
    <>
      <Navbar />
      <header className="bg-gray-100 py-12">
        <h1 className="text-center text-4xl font-bold">Arctic Adventures</h1>
        <p className="text-center mt-2">Discover incredible stories ...</p>
      </header>

      <section className="container mx-auto py-12 space-y-8">
        {stories.map((s, i) => (
          <StoryCard key={i} story={s} />
        ))}
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Captured Moments</h2>
        <GalleryGrid pics={pics} />
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">What Travelers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Testimonial key={i} t={t} />
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
