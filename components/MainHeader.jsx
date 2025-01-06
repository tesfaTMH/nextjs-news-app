"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainHeader = () => {
  const pathname = usePathname();
  return (
    <header className=" flex items-center justify-between font-bold text-3xl my-10">
      <div
        className={
          pathname === "/"
            ? "bg-[#bcbcb7] text-white px-3 py-2 rounded-lg font-bold"
            : ""
        }
      >
        <Link href={"/"}>NextNews</Link>
      </div>
      <nav>
        <ul className="flex items-center justify-between gap-8">
          <li>
            <Link
              href={"/news"}
              className={
                pathname.includes("/news")
                  ? "bg-[#bcbcb7] text-white px-3 py-2 rounded-lg font-bold"
                  : ""
              }
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href={"/archive"}
              className={
                pathname.includes("/archive")
                  ? "bg-[#bcbcb7] text-white px-3 py-2 rounded-lg font-bold"
                  : ""
              }
            >
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
