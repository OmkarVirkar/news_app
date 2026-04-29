import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
  getMonthNameFromNumber,
} from "@/lib/news";
import Link from "next/link";
import NewsList from "@/components/news-list";

export default function YearlyArchivePage({ params }) {
  const { filters } = params;
  let newsContent;
  let news = [];
  const selectedYear = filters?.[0];
  const selectedMonth = filters?.[1];
  let links = getAvailableNewsYears();
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  } else if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  if (news.length === 0 && filters != undefined) {
    newsContent = <p>No news found for the selected filters.</p>;
  } else if (news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid year or month selected.");
  }

  return (
    <>
      {!(selectedYear && selectedMonth) ? (
        <header id="archive-header">
          <nav>
            <ul>
              {links.map((item) => {
                const linkPreText = selectedYear
                  ? `/archive/${selectedYear}/${item}`
                  : `/archive/${item}`;

                return (
                  <li key={item}>
                    <Link href={`${linkPreText}`}>
                      {selectedYear && !selectedMonth
                        ? getMonthNameFromNumber(item)
                        : item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      ) : null}
      {newsContent}
    </>
  );
}
