import { productapi } from "./api/productApi";

export const productApi = productapi.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Product"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    createProduct: build.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    })
  }),
});

export const { useGetProductsQuery, useDeleteProductMutation,useCreateProductMutation } = productApi;
