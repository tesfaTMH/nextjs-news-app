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
    <>
      {/*<h2 className="text-white z-0">Intercepted route page</h2>*/}
      <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.85)]" />
      <dialog
        className="w-max-50 w-[100%] border-none rounded-lg p-2 shadow-[0 0 10px 0 #181817] bg-[#bababa]"
        open
      >
        <Image
          src={`/images/news/${foundNewsItem.image}`}
          alt={foundNewsItem.title}
          width={200}
          height={150}
          //className="fullscreen-image"
          className="h-auto w-[25%] rounded-lg shadow-xl dark:shadow-gray-800 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
        />
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
