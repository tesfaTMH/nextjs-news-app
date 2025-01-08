import React from "react";
import Link from "next/link";
import Image from "next/image";

const NewsList = ({ listOfNews }) => {
  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap gap-8">
      {listOfNews.map(({ id, slug, title, image, date, content }) => (
        <li key={id}>
          <Link href={`/news/${slug}`}>
            <Image
              src={`/images/news/${image}`}
              alt={title}
              width={300}
              height={300}
              className="object-cover rounded-2xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            />
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
