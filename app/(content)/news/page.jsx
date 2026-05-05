"use client";

import { DUMMY_NEWS } from "@/assets/dummy-news";
import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function Page() {
  const [errorState, setErrorState] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("http://localhost:8080/news");
        if (!response.ok) {
          setErrorState("Failed to fetch news");
        } else {
          const data = await response.json();
          setNews(data);
        }
        setLoading(false);
      } catch (error) {
        setErrorState("Error fetching news: " + error.message);
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading news...</p>;
  }

  if (errorState) {
    return <p>{errorState}</p>;
  }

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
