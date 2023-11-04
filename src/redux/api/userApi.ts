import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const URL = "/users";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    users: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: URL,
          method: "GET",
          params: arg,
        };
      },

      providesTags: [tagTypes.admin],
    }),
    usersById: build.query({
      query: (id: string) => {
        return {
          url: `${URL}/${id}`,
          method: "GET",
        };
      },

      providesTags: [tagTypes.admin],
    }),
    deleteUser: build.mutation({
      query: (id: string) => {
        return {
          url: `${URL}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.admin],
    }),
    updateUser: build.mutation({
      query: (data) => {
        return {
          url: `${URL}/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useUsersQuery,
  useUsersByIdQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = usersApi;
