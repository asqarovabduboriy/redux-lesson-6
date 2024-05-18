import { configureStore } from '@reduxjs/toolkit';
import { productapi } from './api/productApi';
import { userapi } from './api/usersApi';

export const store = configureStore({
  reducer: {
    [productapi.reducerPath]: productapi.reducer,
    [userapi.reducerPath]: userapi.reducer, 

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productapi.middleware)
      .concat(userapi.middleware),
});
