import { getNewsForYear, getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";
import NewsList from "@/components/news-list";

export default function YearlyArchivePage({ params }) {
  const { year } = params;
  if (year !== undefined) {
    const yearNews = getNewsForYear(year[0]);
    return <NewsList news={yearNews} />;
  } else {
    const availableYears = getAvailableNewsYears();

    return (
      <header id="archive-header">
        <nav>
          <ul>
            {availableYears.map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}
