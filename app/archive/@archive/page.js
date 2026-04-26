import { getAvailableNewsYears } from "@/lib/news";

export default function ArchivePage() {
  const availableYears = getAvailableNewsYears();
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {availableYears.map((year) => (
            <li key={year}>
              <a href={`/archive/${year}`}>{year}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  s;
}
