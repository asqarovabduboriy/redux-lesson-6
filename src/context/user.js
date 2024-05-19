import { userapi } from "./api/usersApi";

export const userApi = userapi.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["User"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    createUser: build.mutation({
      query: (users) => ({
        url: "/users",
        method: "POST",
        body: users,
      }),
      invalidatesTags: ["User"],
    }),
    // Update request
    editUser: build.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useDeleteUserMutation, useCreateUserMutation, useEditUserMutation } = userApi;
