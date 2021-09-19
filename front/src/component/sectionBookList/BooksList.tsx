import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Pagination, Spin } from "antd";
import { getBooksThunk } from "../../State/bookReducer/bookThunk";
import { useAppSelector } from "../../State";
import BooksItem from "./BookItem";
import { LoadingOutlined } from "@ant-design/icons";
import "./booksStyle.css";
import "../style.css";
import {
  loadingBook,
  paginationBook,
} from "../../State/bookReducer/actionsBook";

export interface filterBook {
  page: number | undefined;
  filterByAuthor: string | string[];
  filterByPublisher: string | string[];
  filterByGenre: string | string[];
}

function BooksList() {
  const books = useAppSelector((state) => state.book);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const dispatch = useDispatch();
  useEffect(() => {
    const filters = {
      page: 1,
      filterByAuthor: books.filter.filterByAuthor,
      filterByPublisher: books.filter.filterByPublisher,
      filterByGenre: books.filter.filterByGenre,
    };
    dispatch(loadingBook());
    dispatch(getBooksThunk(filters));
  }, []);

  const book = books.data?.map(({ id, nameBook, price }) => {
    return <BooksItem id={id} name={nameBook} price={price} />;
  });

  const onchangePagination = (number: number) => {
    console.log("num", number);
    const filters = {
      page: number,
      filterByAuthor: books.filter.filterByAuthor,
      filterByPublisher: books.filter.filterByPublisher,
      filterByGenre: books.filter.filterByGenre,
    };
    dispatch(loadingBook());

    dispatch(getBooksThunk(filters));
  };

  return (
    <div className="books">
      {books.loading ? (
        <Spin className="louding" indicator={antIcon} />
      ) : books.error ? (
        <div className="error">No books found</div>
      ) : (
        <div className="books__field">{book}</div>
      )}
      {books.meta ? (
        <Pagination
          className="booksPagination"
          onChange={(number) => onchangePagination(number)}
          defaultCurrent={books.meta?.current_page}
          total={books.meta?.total}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
export default BooksList;
