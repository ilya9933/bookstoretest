import { Menu, Dropdown, message, Switch, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "../style.css";
import "./filterBook.css";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../State";
import {
  getBooksThunk,
  getInfoBooksThunk,
} from "../../State/bookReducer/bookThunk";
import CustomSwitch from "../customSwitch/CustomSwitch";
import {
  filterBooksInfo,
  loadingBook,
} from "../../State/bookReducer/actionsBook";

function FilterBook() {
  const books = useAppSelector((state) => state.book);
  const dispatch = useDispatch();
  const [genres, setGenres] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);
  const [publishers, setPublishers] = useState<string[]>([]);

  const keyBooks = {
    genre: "genre",
    author: "author",
    publisher: "",
  };
  const filter = {
    filterByAuthor: authors,
    filterByPublisher: publishers,
    filterByGenre: genres,
  };

  useEffect(() => {
    dispatch(getInfoBooksThunk());
  }, []);

  const onClickButtonFilter = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    dispatch(loadingBook());
    dispatch(filterBooksInfo(filter));
    const filters = {
      page: 1,
      filterByAuthor: authors,
      filterByPublisher: publishers,
      filterByGenre: genres,
    };
    dispatch(getBooksThunk(filters));
  };

  const onClick = ({ key }: any) => {
    message.info(`Click on item ${key}`);
  };

  const inputClick = (id: string, name: string) => {
    if (id === "genre") {
      const genre = genres.indexOf(name);
      if (genre === -1) {
        setGenres(genres.concat(name));
      } else {
        setGenres(
          genres.filter(function (i) {
            return i !== genres[genre];
          })
        );
      }
    } else if (id === "author") {
      const author = authors.indexOf(name);
      if (author === -1) {
        setAuthors(authors.concat(name));
      } else {
        setAuthors(
          authors.filter(function (i) {
            return i !== authors[author];
          })
        );
      }
    } else {
      const publisher = publishers.indexOf(name);
      if (publisher === -1) {
        setPublishers(publishers.concat(name));
      } else {
        setPublishers(
          publishers.filter(function (i) {
            return i !== publishers[publisher];
          })
        );
      }
    }
  };

  const menuGenre = books.booksInfo.arrayGenres.map((name) => {
    return (
      <CustomSwitch id={keyBooks.genre} name={name} inputClick={inputClick} />
    );
  });
  const menuAuthor = books.booksInfo.arrayAuthors.map((name) => {
    return (
      <CustomSwitch id={keyBooks.author} name={name} inputClick={inputClick} />
    );
  });
  const menuPublishers = books.booksInfo.arrayPublishers.map((name) => {
    return (
      <CustomSwitch
        id={keyBooks.publisher}
        name={name}
        inputClick={inputClick}
      />
    );
  });

  const menuItem = (key: string) => {
    if (key === "genre") {
      return menuGenre;
    } else if (key === "author") {
      return menuAuthor;
    } else {
      return menuPublishers;
    }
  };
  const menu = (key: string) => (
    <Menu className="dropDownMenu" onClick={onClick}>
      {menuItem(key)}
    </Menu>
  );

  return (
    <div className="filter__field">
      <div className="filter__titel">CATEGORIES</div>

      <Dropdown overlay={menu("genre")}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Choose genre <DownOutlined />
        </a>
      </Dropdown>
      <Dropdown overlay={menu("author")}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Choose author <DownOutlined />
        </a>
      </Dropdown>
      <Dropdown overlay={menu("")}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Choose publisher <DownOutlined />
        </a>
      </Dropdown>
      <Button type="primary" onClick={(e) => onClickButtonFilter(e)}>
        Filter
      </Button>
    </div>
  );
}

export default FilterBook;
