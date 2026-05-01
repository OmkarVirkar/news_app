"use client";

import { getNewsItemBySlug } from "@/lib/news";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function Intercepted({ params }) {
  const { newsItem } = params;
  const router = useRouter();
  const news = getNewsItemBySlug(newsItem);

  if (!news) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog open className="modal">
        <div className="fullscreen-image">
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
      </dialog>
    </>
  );
}
