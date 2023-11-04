import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PACKAGE_URL = "/packages";

export const packageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPackageTour: build.mutation({
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
    packageTour: build.query({
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
    packageTourById: build.query({
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
    deletePackageTour: build.mutation({
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
    updatePackageTour: build.mutation({
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
  useCreatePackageTourMutation,
  useDeletePackageTourMutation,
  usePackageTourByIdQuery,
  usePackageTourQuery,
  useUpdatePackageTourMutation,
} = packageApi;
