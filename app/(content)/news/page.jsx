import Link from "next/link";
import { DUMMY_NEWS } from "@/assets/dummy-news";
import NewsList from "@/components/news-list";

export default function Page() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
