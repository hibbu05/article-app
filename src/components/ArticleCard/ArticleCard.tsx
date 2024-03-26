import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

interface ArticleCardProps {
  articleId: string;
  title: string;
  summary: string;
}
const ArticleCard: React.FC<ArticleCardProps> = ({
  articleId,
  title,
  summary,
}) => {
  console.log("articleId", articleId);

  return (
    <div className="card" style={{ width: "18rem", marginBottom: "0.7rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{summary}</p>
      </div>
      <Link className="navigate mt-auto" to={`/article/${articleId}`}>
        Explore <FaLongArrowAltRight />
      </Link>
    </div>
  );
};

export default React.memo(ArticleCard);
