import { DUMMY_NEWS } from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1>News Page</h1>
      <ul className="flex flex-col md:flex-row md:flex-wrap gap-8">
        {DUMMY_NEWS.map(({ id, slug, title, image, date, content }) => (
          <li key={id}>
            <Link href={`/news/${slug}`}>
              <Image
                src={`/images/news/${image}`}
                alt={title}
                width={300}
                height={300}
                className="object-cover rounded-2xl"
              />
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;
