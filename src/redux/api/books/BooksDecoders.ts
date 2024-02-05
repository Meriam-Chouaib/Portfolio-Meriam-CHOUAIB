import { BookServerResponse, IBooks } from 'redux/api/books/books.type'

export const decodeAllBooks = (response: BookServerResponse[]): IBooks[] => {
  const books: IBooks[] = response.map((bookResponse: BookServerResponse) => ({
    id: bookResponse.id,
    author: bookResponse.name,
    description: bookResponse.effect,
  }))

  return books
}
