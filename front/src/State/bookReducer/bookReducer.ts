import { actions } from "./constBook";

export interface DataBook {
  id: number;
  nameBook: string;
  price: number;
  description: string;
  author: DataAuthor;
  publisher: DataPublisher;
  genre: DataGenre[];
}

interface DataAuthor {
  authorName: string;
}

interface DataPublisher {
  publisherName: string;
}

interface DataGenre {
  genreName: string;
}

export interface DataFilter {
  filterByAuthor: string[] | string;
  filterByPublisher: string[] | string;
  filterByGenre: string[] | string;
}

export interface DataMeta {
  total: number;
  per_page: number;
  from: number;
  to: number;
  current_page: number;
  last_page: number;
}

export interface BooksInfo {
  arrayGenres: string[];
  arrayAuthors: string[];
  arrayPublishers: string[];
}

interface BookState {
  data?: DataBook[];
  meta?: DataMeta;
  booksInfo: BooksInfo;
  filter: DataFilter;
  loading: boolean;
  error: boolean;
}

interface actionBook {
  type: string;
  payload?: any;
}

const defaultState: BookState = {
  booksInfo: {
    arrayGenres: [],
    arrayAuthors: [],
    arrayPublishers: [],
  },
  filter: {
    filterByAuthor: "",
    filterByPublisher: "",
    filterByGenre: "",
  },
  loading: false,
  error: false,
};
const book = (state = defaultState, action: actionBook): BookState => {
  switch (action.type) {
    case actions.ADD_BOOK:
      const { message, meta } = action.payload;

      return {
        ...state,
        data: message,
        meta: meta,
        loading: false,
        error: false,
      };
    case actions.LOADING_BOOK:
      return {
        ...state,
        loading: true,
      };
    case actions.PAGINATION_BOOK:
      if (!state.meta) {
        return state;
      }
      return {
        ...state,
        meta: { ...state.meta, current_page: action.payload },
      };
    case actions.GET_BOOKS_INFO:
      return {
        ...state,
        booksInfo: action.payload,
      };
    case actions.FILTER_BOOKS_INFO:
      return {
        ...state,
        filter: action.payload,
      };
    case actions.ERROR_REQUEST:
      if (state.error) {
        return {
          ...state,
          error: false,
        };
      } else {
        return {
          ...state,
          error: true,
        };
      }

    default:
      return state;
  }
};

export default book;
