"use client";
import NewsList from "@/components/NewsList";
import { DUMMY_NEWS } from "@/data/news";
import React, { useEffect, useState } from "react";

const NewsPage = () => {
  const [news, setNews] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fextNews = async () => {
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Failed to fetch news");
        setIsLoading(false);
      }

      const newsFormatted = await response.json();
      setNews(newsFormatted);
      setIsLoading(false);
    };

    fextNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList listOfNews={news} />;
  }
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1>News Page</h1>
      {newsContent}
    </div>
  );
};

export default NewsPage;
