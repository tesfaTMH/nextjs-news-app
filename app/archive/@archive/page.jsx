import { getAvailableNewsYears } from "@/app/lib/news";
import Link from "next/link";
import React from "react";

const ArchivePage = () => {
  const links = getAvailableNewsYears();
  return (
    <header className="mb-6">
      <nav>
        <ul className="flex items-center justify-center gap-10 text-[#b0b0a6]">
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default ArchivePage;
