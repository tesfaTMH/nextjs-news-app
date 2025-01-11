import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import NewsList from "@/components/NewsList";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import Link from "next/link";

const FilterHeader = async ({ year, month }) => {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <header className="mb-6">
      <nav>
        <ul className="flex items-center justify-center gap-10 text-[#b0b0a6]">
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const FilteredNews = async ({ year, month }) => {
  let news;
  if (year && !month) {
    news = await getNewsForYear();
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = (
    <p>
      No news availble for the selected time interval. Select a year to see an
      archived news for the selected year.
    </p>
  );

  if (news && news.length > 0) {
    newsContent = <NewsList listOfNews={news} />;
  }

  return newsContent;
};

const ArchivePageByYear = async ({ params }) => {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense
        fallback={
          <p className="text-sm text-center my-1 mx-auto">
            Loading News header...
          </p>
        }
      >
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <main>
        <Suspense
          fallback={
            <p className="text-2xl text-center my-5 mx-auto">
              Loading News ...
            </p>
          }
        >
          <FilteredNews year={selectedYear} month={selectedMonth} />
        </Suspense>
      </main>
    </>
  );
};

export default ArchivePageByYear;
