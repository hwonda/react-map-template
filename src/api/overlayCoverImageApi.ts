import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const overlayCoverImageApi = createApi({
  reducerPath: 'overlayCoverImageApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://picsum.photos/' }),
  endpoints: (builder) => ({
    getOverlayCoverImage: builder.query<string, { width: number, height: number }>({
      query: ({ width, height }) => `${width}/${height}`,
    }),
  }),
});