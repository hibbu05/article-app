import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArticleResponse, ArticleByIdResponse } from "../../types/article.type";
import { BASE_URL } from "./apiPath";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllArticles: builder.query<ArticleResponse[], void>({
      query: () => "/articles",
    }),
    getArticleById: builder.query<ArticleByIdResponse, string>({
      query: (id) => `/articles/${id}`,
    }),
  }),
});

export const { useGetAllArticlesQuery, useGetArticleByIdQuery } = articlesApi;
