import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BOOK_PACKAGE_URL = "/booked_packages";

export const bookPackageTourApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBookPackageTour: build.mutation({
      query: (data) => {
        return {
          url: `${BOOK_PACKAGE_URL}`,
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
    bookPackageTours: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BOOK_PACKAGE_URL,
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
    bookPackageTourById: build.query({
      query: (id: string) => {
        return {
          url: `${BOOK_PACKAGE_URL}/${id}`,
          method: "GET",
        };
      },

      providesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
    deleteBookPackageTour: build.mutation({
      query: (id: string) => {
        return {
          url: `${BOOK_PACKAGE_URL}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
    updateBookPackageTour: build.mutation({
      query: (data) => {
        return {
          url: `${BOOK_PACKAGE_URL}/${data.id}`,
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
  useBookPackageTourByIdQuery,
  useBookPackageToursQuery,
  useCreateBookPackageTourMutation,
  useDeleteBookPackageTourMutation,
  useUpdateBookPackageTourMutation,
} = bookPackageTourApi;
