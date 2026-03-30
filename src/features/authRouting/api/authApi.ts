import { baseApi } from "shared/api/baseApi";
import type { ISignInRequest, IUserInfo, TSignResponse } from "./types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<TSignResponse, ISignInRequest>({
        query: (credentials) => ({
        url: "https://api.v2.react-learning.ru/auth/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: TSignResponse) => response,
    }),
     getUserInfo: build.query<IUserInfo, void>({
          query: () => "https://api.v2.react-learning.ru/users/me",
          transformResponse: (response: IUserInfo) => response,
      }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useGetUserInfoQuery } = authApi;