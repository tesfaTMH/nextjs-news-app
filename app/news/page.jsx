import NewsList from "@/components/NewsList";
import { DUMMY_NEWS } from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1>News Page</h1>
      <NewsList listOfNews={DUMMY_NEWS} />
    </div>
  );
};

export default NewsPage;
