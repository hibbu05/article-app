import { useMemo } from "react";
import { useGetAllArticlesQuery } from "../../features/api/articlesApiSlice";
import Spinner from "react-bootstrap/Spinner";
import ArticleCard from "../ArticleCard/ArticleCard";

interface Article {
  id: string;
  title: string;
  summary: string;
}

const HomePage = () => {
  const { data, error, isLoading, isSuccess } = useGetAllArticlesQuery();

  const renderArticles = useMemo(() => {
    return data?.map((article: Article) => (
      <ArticleCard
        key={article.id}
        articleId={article.id}
        title={article.title}
        summary={article.summary}
      />
    ));
  }, [data]);

  return (
    <div className="article-homepageContainer">
      {isLoading && <Spinner className="spinner" animation="border" />}
      {data && isSuccess && renderArticles}
      {error && <h2 className="error-message">Something went wrong</h2>}
    </div>
  );
};

export default HomePage;
