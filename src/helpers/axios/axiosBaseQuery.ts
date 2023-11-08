import { IMeta } from "@/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { instance as axiosInstance } from "./axiosInstance";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      meta?: IMeta;
      contentType?: string;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, contentType }) => {
    try {
      const response = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          "Content-Type": contentType || "application/json",
        },
        withCredentials: true,
      });

      // console.log(result);

      // return result;

      if (response.status >= 200 && response.status < 300) {
        const result: AxiosResponse = {
          data: response.data,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          config: response.config,
        };
        return result;
      } else {
        const error: AxiosError = {
          response: response,
          message: `Request failed with status ${response.status}`,
          config: response.config,
          isAxiosError: false,
          name: "",
          toJSON: function (): object {
            return {
              response: this.response,
              message: this.message,
              config: this.config,
              // ... other properties
            };
          },
        };

        return { error };
      }
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
