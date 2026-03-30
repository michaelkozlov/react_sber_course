import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JWT_LS_KEY } from "shared/config/constants";
import { loadFromLS } from "shared/lib/localStorage";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    prepareHeaders: (headers) => {
        const tokens = loadFromLS<Record<'access' | 'refresh', string>>({
            key: JWT_LS_KEY,
        });

    if (tokens?.access) {
      console.log(tokens?.access);
      
      headers.set('Authorization', `${tokens?.access}`);
    }
    return headers;
}
  }),
  tagTypes: ["Tasks"],
  endpoints: () => ({}),
  
});
