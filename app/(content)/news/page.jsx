import NewsList from "@/components/NewsList";
import { DUMMY_NEWS } from "@/data/news";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  const news = await getAllNews();
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1>News Page</h1>
      <NewsList listOfNews={news} />
    </div>
  );
};

export default NewsPage;
