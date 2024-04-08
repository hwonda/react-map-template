import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const overlayCoverContentApi = createApi({
  reducerPath: 'overlayCoverContentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://baconipsum.com/api/' }),
  endpoints: (builder) => ({
    getOverlayCoverContent: builder.query<string, { type: string, paras: number, sentences: number }>({
      query: ({ type, paras, sentences }) => {
        return {
          url: '',
          method: 'GET',
          params: {
            type,
            paras,
            sentences,
          },
        };
      },
    }),
  }),
});