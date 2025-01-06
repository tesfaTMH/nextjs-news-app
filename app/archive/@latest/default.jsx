import { getLatestNews } from "@/app/lib/news";
import NewsList from "@/components/NewsList";
import React from "react";

const LatestNewsPage = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList listOfNews={latestNews} />
    </>
  );
};

export default LatestNewsPage;
