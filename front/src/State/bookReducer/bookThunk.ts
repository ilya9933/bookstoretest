import { AppDispatch } from "..";
import { getBooksAPI, getInfoBooksAPI } from "../../api/book.api";
import { filterBook } from "../../component/sectionBookList/BooksList";
import {
  addBook,
  errorRequest,
  getBooksInfo,
  loadingBook,
} from "./actionsBook";

export const getBooksThunk =
  (filters: filterBook) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const { message, meta } = await getBooksAPI(filters);
      dispatch(addBook(message, meta));
    } catch (error) {
      console.error(error.message);
    }
  };

export const getInfoBooksThunk =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const { booksInfo } = await getInfoBooksAPI();
      dispatch(getBooksInfo(booksInfo));
    } catch (error) {
      console.error(error);
      dispatch(loadingBook());
      dispatch(errorRequest());
    }
  };
