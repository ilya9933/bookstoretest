import { BooksInfo, DataBook, DataFilter, DataMeta } from "./bookReducer";
import { actions } from "./constBook";

export const addBook = (message: DataBook[], meta: DataMeta) => ({
  type: actions.ADD_BOOK,
  payload: { message, meta },
});

export const loadingBook = () => ({
  type: actions.LOADING_BOOK,
});

export const paginationBook = (e: number) => ({
  type: actions.PAGINATION_BOOK,
  payload: e,
});

export const getBooksInfo = (booksInfo: BooksInfo) => ({
  type: actions.GET_BOOKS_INFO,
  payload: booksInfo,
});

export const filterBooksInfo = (filter: DataFilter) => ({
  type: actions.FILTER_BOOKS_INFO,
  payload: filter,
});

export const errorRequest = () => ({
  type: actions.ERROR_REQUEST,
});
