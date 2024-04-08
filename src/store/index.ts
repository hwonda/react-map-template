import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { overlayCoverImageApi, overlayCoverContentApi } from '../api';

export const store = configureStore({
  reducer: {
    [overlayCoverImageApi.reducerPath]: overlayCoverImageApi.reducer,
    [overlayCoverContentApi.reducerPath]: overlayCoverContentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(overlayCoverImageApi.middleware, overlayCoverContentApi.middleware),
});
setupListeners(store.dispatch);