import { configureStore } from "@reduxjs/toolkit";
import { articlesApi } from "../features/api/articlesApiSlice";

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware),
  devTools: true,
});
