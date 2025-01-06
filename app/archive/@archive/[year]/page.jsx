import { getNewsForYear } from "@/app/lib/news";
import NewsList from "@/components/NewsList";
import { notFound } from "next/navigation";
import React from "react";

const ArchivePageByYear = ({ params }) => {
  const newsYear = params.year;

  const news = getNewsForYear(newsYear);

  if (!news) {
    notFound();
  }
  return <NewsList listOfNews={news} />;
};

export default ArchivePageByYear;
