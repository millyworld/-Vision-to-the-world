export default function CTASection() {
  return (
    <div className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
        Write Your Own Adventure
      </h2>
      <p className="mb-6 text-gray-600" data-aos="fade-up" data-aos-delay="100">
        Let these stories inspire your journey...
      </p>
      <button
        className="py-3 px-6 bg-blue-600 text-white rounded hover:bg-blue-700"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Plan Your Journey
      </button>
    </div>
  );
}
