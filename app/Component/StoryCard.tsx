interface Story {
  img: string;
  category: string;
  author: string;
  read: string;
  title: string;
  desc: string;
  date: string;
}

export default function StoryCard({ story }: { story: Story }) {
  return (
    <div className="space-y-2 border-b pb-6">
      <img src={story.img} alt={story.title} className="w-full h-48 object-cover rounded" />
      <div className="text-sm text-green-500 font-semibold">{story.category}</div>
      <h3 className="text-2xl font-bold">{story.title}</h3>
      <div className="text-sm text-gray-500">{story.author} · {story.read}</div>
      <p className="text-gray-700">{story.desc}</p>
      <div className="text-xs text-gray-400">{story.date}</div>
    </div>
  );
}
