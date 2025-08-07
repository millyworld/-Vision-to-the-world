interface Testi { quote: string; name: string; location: string; img: string; }
export default function Testimonial({ t }: { t: Testi }) {
  return (
    <div className="text-center space-y-2 p-4 bg-gray-50 rounded">
      <p className="italic">"{t.quote}"</p>
      <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mx-auto" />
      <div className="font-semibold">{t.name}</div>
      <div className="text-sm text-gray-500">{t.location}</div>
    </div>
  );
}
