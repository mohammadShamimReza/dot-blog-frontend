import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const URL = "/blog-type";

export const typeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    types: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: URL,
          method: "GET",
          params: arg,
        };
      },

      providesTags: [tagTypes.admin],
    }),
    typesById: build.query({
      query: (id: string) => {
        return {
          url: `${URL}/${id}`,
          method: "GET",
        };
      },

      providesTags: [tagTypes.admin],
    }),
    deletetype: build.mutation({
      query: (id: string) => {
        return {
          url: `${URL}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.admin],
    }),
    updatetype: build.mutation({
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
  useTypesQuery,
  useTypesByIdQuery,
  useDeletetypeMutation,
  useUpdatetypeMutation,
} = typeApi;
