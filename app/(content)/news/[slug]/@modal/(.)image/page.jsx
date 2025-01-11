import ModalBackdrop from "@/components/ModalBackdrop";
import { DUMMY_NEWS } from "@/data/news";
import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const InterceptedImagePage = async ({ params }) => {
  const newsSlug = React.use(params).slug;

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
    <>
      {/*<h2 className="text-white">Intercepted route page</h2>*/}
      <ModalBackdrop />
      <dialog
        className="w-max-xl w-[80%] h-full border-none rounded-lg p-2 shadow-[0 0 10px 0 #181817] bg-[#bababa]"
        open
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
