"use client";
import { DUMMY_NEWS } from "@/data/news";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import React from "react";

const InterceptedImagePage = ({ params }) => {
  const newsSlug = React.use(params).slug;
  const router = useRouter();

  const foundNewsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsSlug
  );

  if (!foundNewsItem) {
    notFound();
  }

  return (
    <>
      {/*<h2 className="text-white">Intercepted route page</h2>*/}
      <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.85)] m-10 p-6" />
      <dialog
        className="w-max-xl w-[100%] border-none rounded-lg p-2 shadow-[0 0 10px 0 #181817] bg-[#bababa] z-10"
        open
        onClick={router.back}
      >
        <Image
          src={`/images/news/${foundNewsItem.image}`}
          alt={foundNewsItem.title}
          width={300}
          height={150}
          //className="fullscreen-image"
          //className="h-auto w-[25%] rounded-lg shadow-xl dark:shadow-gray-800 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          className="w-[50%] h-auto object-cover rounded-3xl mx-auto"
        />
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
