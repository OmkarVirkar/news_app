import NewsPagesLink from "./news-pages-links";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NewsPagesLink href="/news">News</NewsPagesLink>
          </li>
          <li>
            <NewsPagesLink href="/archive">Archive</NewsPagesLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
