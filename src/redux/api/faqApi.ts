import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PACKAGE_URL = "/faq";

export const faqeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFAQ: build.mutation({
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
    FAQ: build.query({
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
    FAQBuId: build.query({
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
    deleteFAQ: build.mutation({
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
    updateFAQ: build.mutation({
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
  useCreateFAQMutation,
  useDeleteFAQMutation,
  useFAQBuIdQuery,
  useFAQQuery,
  useUpdateFAQMutation,
} = faqeApi;
