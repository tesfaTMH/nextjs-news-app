import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const ImagePage = async ({ params }) => {
  const newsSlug = await params.slug;

  {
    /*const foundNewsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsSlug
  );*/
  }

  const foundNewsItem = await getNewsItem(newsSlug);

  if (!foundNewsItem) {
    notFound();
  }

  return (
    <div className="flex items-center justify-center">
      <Image
        src={`/images/news/${foundNewsItem.image}`}
        alt={foundNewsItem.title}
        width={300}
        height={150}
        //className="h-auto w-[50%] rounded-lg shadow-xl dark:shadow-gray-800 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
        className="w-[90%] h-auto object-cover rounded-3xl text-center"
      />
    </div>
  );
};

export default ImagePage;
