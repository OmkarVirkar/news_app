import { getNewsForYear } from "@/lib/news";
import NewsList from "@/components/news-list";

export default function YearlyArchivePage({ params }) {
  const { year } = params;
  const yearNews = getNewsForYear(year);

  return <NewsList news={yearNews} />;
}
