/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    contact: builder.mutation<
      any,
      { name: string; email: string; mobileNo: string; message: string }
    >({
      query: (body) => ({
        url: "/contact",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useContactMutation } = contactApi;
