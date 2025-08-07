interface Pic {
  img: string;
  title: string;
  loc?: string;
}

export default function GalleryGrid({ pics }: { pics: Pic[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {pics.map((p, i) => (
        <div key={i}>
          <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded" />
          <div className="mt-2 text-center">{p.title}</div>
        </div>
      ))}
    </div>
  );
}
