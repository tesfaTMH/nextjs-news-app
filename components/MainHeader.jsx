import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <header className=" flex items-center justify-between">
      <div id="logo">
        <Link href={"/"}>NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href={"/news"}>News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
