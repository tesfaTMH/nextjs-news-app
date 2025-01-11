import logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-6 max-w-2xl my-3 mx-auto">
      <Image
        src={logo.src}
        width={128}
        height={128}
        alt="A newspaper"
        className="rounded-full"
      />
      <h1 className="text-2xl font-bold tracking-tight">
        A News Site For The Next Generation
      </h1>
      <p className="text-base font-medium tracking-wide bg-blue-100 text-blue-700 shadow-md p-2 rounded-xl">
        Next News is here to deliver you all the latest news - concise &
        unbiased!
      </p>

      <p>
        NextNews aims to provide you with the latest news in a concise and
        unbiased manner. We strive to deliver the news in a way that is easy to
        understand and to the point. We want to keep you informed without
        overwhelming you with unnecessary information.
      </p>

      <p>
        We employ a team of dedicated journalists who are committed to
        delivering the news in a fair and unbiased manner. Our team is
        passionate about keeping you informed and up to date with the latest
        news.
      </p>

      <p className="bg-blue-700 py-2 px-3 rounded-3xl cursor-pointer hover:bg-gray-400 transition-all ease-in-out">
        <Link href="/news">Read the latest news</Link>
      </p>
    </div>
  );
}
