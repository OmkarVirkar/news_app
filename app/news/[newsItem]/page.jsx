import { DUMMY_NEWS } from "@/assets/dummy-news";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }) {
  const newsItem = DUMMY_NEWS.find((item) => item.slug === params.newsItem);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`} className="news-image-link">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={100}
            height={100}
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
