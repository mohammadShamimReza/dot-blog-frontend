import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const ADD_TO_CART_PACKAGE_URL = "/add_to_cart_package";

export const appToCartPackageTourApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAddTo: build.mutation({
      query: (data) => {
        return {
          url: `${ADD_TO_CART_PACKAGE_URL}`,
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
    AddToCartPackageTours: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ADD_TO_CART_PACKAGE_URL,
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

    deleteAddToCartPackageTour: build.mutation({
      query: (id: string) => {
        return {
          url: `${ADD_TO_CART_PACKAGE_URL}/${id}`,
          method: "DELETE",
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
  useAddToCartPackageToursQuery,
  useCreateAddToMutation,
  useDeleteAddToCartPackageTourMutation,
} = appToCartPackageTourApi;
