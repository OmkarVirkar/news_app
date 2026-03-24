import Link from "next/link";
import { DUMMY_NEWS as newsList } from "@/assets/dummy-news";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {newsList.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <Image
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
                width={200}
                height={200}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
