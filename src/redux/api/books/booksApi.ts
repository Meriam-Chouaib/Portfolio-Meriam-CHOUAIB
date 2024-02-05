import { ReducersPaths } from 'redux/redux.constants'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BookServerResponse, IBooks } from 'redux/api/books/books.type'
import { decodeAllBooks } from 'redux/api/books/BooksDecoders'

export const booksApi = createApi({
  reducerPath: ReducersPaths.BOOKS_API,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wizard-world-api.herokuapp.com',
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/Spells',
      transformResponse: (response: BookServerResponse[]): IBooks[] => {
        return decodeAllBooks(response)
      },
    }),
  }),
})
export const { useGetBooksQuery } = booksApi
