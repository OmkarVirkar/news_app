import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        <li>
          <Link href="/news/nextjs-is-awesome">Next.js is awesome</Link>
        </li>
        <li>
          <Link href="/news/nextjs-is-great">Next.js is great</Link>
        </li>
        <li>
          <Link href="/news/nextjs-is-the-best">Next.js is the best</Link>
        </li>
      </ul>
    </>
  );
}
