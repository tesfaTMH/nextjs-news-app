import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import NewsList from "@/components/NewsList";
import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";

const ArchivePageByYear = ({ params }) => {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let links = getAvailableNewsYears();

  let news;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <>
      <header className="mb-6">
        <nav>
          <ul className="flex items-center justify-center gap-10 text-[#b0b0a6]">
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main>
        {news && news.length > 0 ? (
          <NewsList listOfNews={news} />
        ) : (
          <p>
            No news availble for the selected time interval. Select a year to
            see an archived news for the selected year.
          </p>
        )}
      </main>
    </>
  );
};

export default ArchivePageByYear;
