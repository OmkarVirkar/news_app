import { getNewsItemBySlug } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function NewsImagePage({ params }) {
  const { newsItem } = params;
  const news = getNewsItemBySlug(newsItem);

  if (!news) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
}
