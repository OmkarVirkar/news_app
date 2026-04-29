"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function formatPath(path) {
  return path
    .replace("/", "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function NewsPagesLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={`${href}`}
      className={path.startsWith(`${href}`) ? "active" : undefined}
    >
      {children || formatPath(href)}
    </Link>
  );
}
