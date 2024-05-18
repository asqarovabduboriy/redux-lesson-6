import { configureStore } from "@reduxjs/toolkit";
import { productapi } from "./api/productApi";

export const store = configureStore({
  reducer: {
    [productapi.reducerPath]: productapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productapi.middleware),
  
 
  
});
