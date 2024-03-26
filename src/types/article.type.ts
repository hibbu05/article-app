export interface ArticleResponse {
  id: string;
  title: string;
  summary: string;
}

export interface ArticleByIdResponse {
  id: string;
  title: string;
  summary: string;
  fullText: string;
}
