import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'track/all',
    }),
    getFavoriteTracks: builder.query({
      query: ({ token }) => ({
        url: 'track/favorite/all/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getCategoryTracks: builder.query({
      query: ({ id }) => ({
        url: `selection/${id}`,
      }),
    }),
  }),
});

export const {
  useGetAllTracksQuery,
  useGetFavoriteTracksQuery,
  useGetCategoryTracksQuery,
} = tracksApi;
