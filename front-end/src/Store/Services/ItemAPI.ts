import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFilmItem } from "../../Components/FilmList/FilmItem";

export let ItemApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62c3e5037d83a75e39e9d076.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getItems: builder.query<IFilmItem[], string>({
      query: (args: string) => `items/${args}`,
    }),
    getItemById: builder.query<IFilmItem[], string>({
      query: (id: string) => `items/${id}`,
    }),
  }),
});

export let { useGetItemsQuery, useGetItemByIdQuery } = ItemApi;
