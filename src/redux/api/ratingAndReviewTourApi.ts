import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const REVIEW_TOUR_URL = "/packages-Review";

export const reviewBookTourApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createRaviewTour: build.mutation({
      query: (data) => {
        return {
          url: `${REVIEW_TOUR_URL}`,
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
    RaviewTour: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: REVIEW_TOUR_URL,
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
    RaviewTourById: build.query({
      query: (id: string) => {
        return {
          url: `${REVIEW_TOUR_URL}/${id}`,
          method: "GET",
        };
      },

      providesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
    deleteRaviewTour: build.mutation({
      query: (id: string) => {
        return {
          url: `${REVIEW_TOUR_URL}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
    updateRaviewTour: build.mutation({
      query: (data) => {
        return {
          url: `${REVIEW_TOUR_URL}/${data.id}`,
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
  useCreateRaviewTourMutation,
  useRaviewTourQuery,
  useRaviewTourByIdQuery,
  useUpdateRaviewTourMutation,
  useDeleteRaviewTourMutation,
} = reviewBookTourApi;
