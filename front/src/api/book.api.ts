import { async } from "q";
import { filterBook } from "../component/sectionBookList/BooksList";

import axios from "./index";

const url = "/book/get";

export const getBooksAPI = async (filters: filterBook) => {
  const res = await axios.get(url, {
    params: {
      page: filters.page,
      filterByAuthor: filters.filterByAuthor,
      filterByPublisher: filters.filterByPublisher,
      filterByGenre: filters.filterByGenre,
    },
  });

  console.log("data", res.data);

  return res.data;
};

export const getInfoBooksAPI = async () => {
  const res = await axios.get(`${url}/info`);

  console.log("data", res.data);

  return res.data;
};
