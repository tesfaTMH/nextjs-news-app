import { DUMMY_NEWS } from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const NewsPageDetails = ({ params }) => {
  const newsSlug = params.slug;

  const foundNewsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsSlug
  );

  if (!foundNewsItem) {
    notFound();
  }

  return (
    <article className="flex flex-col items-center justify-center max-w-3xl m-auto">
      <header>
        <Link href={`/news/${foundNewsItem.slug}/image`}>
          <Image
            src={`/images/news/${foundNewsItem.image}`}
            alt={foundNewsItem.title}
            width={200}
            height={200}
            className="object-cover w-96 h-48 aspect-video rounded-md"
          />
        </Link>
        <time dateTime={foundNewsItem.date}>{foundNewsItem.date}</time>
      </header>
      <p>{foundNewsItem.content}</p>
    </article>
  );
};

export default NewsPageDetails;
