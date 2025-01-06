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
              className="object-cover rounded-2xl"
            />
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
