import { DUMMY_NEWS } from "@/data/news";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const InterceptedImagePage = ({ params }) => {
  const newsSlug = params.slug;

  const foundNewsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsSlug
  );

  if (!foundNewsItem) {
    notFound();
  }

  return (
    <div>
      <h2 className="text-white z-0">Intercepted route page</h2>
      <Image
        src={`/images/news/${foundNewsItem.image}`}
        alt={foundNewsItem.title}
        width={300}
        height={150}
        className="h-auto w-full rounded-lg shadow-xl dark:shadow-gray-800 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
      />
    </div>
  );
};

export default InterceptedImagePage;
