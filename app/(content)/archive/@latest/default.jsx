import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/NewsList";
import React from "react";

const LatestNewsPage = async () => {
  const latestNews = await getLatestNews();
  console.log(latestNews);
  return (
    <>
      <h2>Latest News</h2>
      <NewsList listOfNews={latestNews} />
    </>
  );
};

export default LatestNewsPage;
