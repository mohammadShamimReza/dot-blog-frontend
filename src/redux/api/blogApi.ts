import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PACKAGE_URL = "/blog";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (data) => {
        return {
          url: `${PACKAGE_URL}`,
          method: "POST",
          data: data,
        };
      },
      invalidatesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
    Blog: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: PACKAGE_URL,
          method: "GET",
          params: arg,
        };
      },

      providesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
    BlogBuId: build.query({
      query: (id: string) => {
        return {
          url: `${PACKAGE_URL}/${id}`,
          method: "GET",
        };
      },

      providesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
    deleteBlog: build.mutation({
      query: (id: string) => {
        return {
          url: `${PACKAGE_URL}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
    updateBlog: build.mutation({
      query: (data) => {
        return {
          url: `${PACKAGE_URL}/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useBlogBuIdQuery,
  useBlogQuery,
  useUpdateBlogMutation,
} = blogApi;
