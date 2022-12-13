import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://129.153.134.51:5231/user'
    }),
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: ({ email, password }) => {
                console.log("Query Request received: ", email, password)
                return {
                    url: "/login",
                    method: 'POST',
                    body: { email, password },
                    headers: { 'Content-Type': 'application/json' }
                }
            }
        })
    })
})

export const { useUserLoginMutation } = authApi