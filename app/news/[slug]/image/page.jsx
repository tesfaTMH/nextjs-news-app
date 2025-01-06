import { DUMMY_NEWS } from "@/data/news";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const ImagePage = ({ params }) => {
  const newsSlug = params.slug;

  const foundNewsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsSlug
  );

  if (!foundNewsItem) {
    notFound();
  }

  return (
    <div>
      <Image
        src={`/images/news/${foundNewsItem.image}`}
        alt={foundNewsItem.title}
        width={300}
        height={150}
        className="h-auto w-full rounded-lg shadow-xl dark:shadow-gray-800"
      />
    </div>
  );
};

export default ImagePage;
