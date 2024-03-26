import React from "react";
import { useParams } from "react-router-dom";
import { useGetArticleByIdQuery } from "../../features/api/articlesApiSlice";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const SingleArticle = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading, isSuccess } = useGetArticleByIdQuery(id!);

  const renderArticle = () => {
    return (
      <div className="fallbackContainer">
        <div className="box">
          <h1 className="fallbackHeading">{data?.title}</h1>
          <p className="fallbacktext">{data?.summary}</p>
          <p className="card-text p-3">{data?.fullText}</p>
          <Link className="navigate mt-auto" to={"/"}>
            Home <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="d-flex" style={{ height: "80vh" }}>
      {isLoading && <Spinner className="spinner" animation="border" />}
      {data && isSuccess && renderArticle()}
      {error && <h2 className="error-message">Something went wrong</h2>}
    </div>
  );
};

export default SingleArticle;
