import NewsList from "@/components/NewsList";
import { DUMMY_NEWS } from "@/data/news";

const NewsPage = async () => {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news data!");
  }

  const news = await response.json();

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1>News Page</h1>
      <NewsList listOfNews={news} />
    </div>
  );
};

export default NewsPage;
