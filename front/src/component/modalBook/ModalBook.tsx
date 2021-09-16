import React, { useState } from "react";
import "../style.css";
import "../modalWindow//modalStyle.css";
import { useAppSelector } from "../../State";

interface Props {
  id: number;
}

function ModalBook({ id }: Props) {
  const books = useAppSelector((state) => state.book.data);
  let [modalAutor, setModalAutor] = useState(true);

  const book = books ? books.find((book) => book.id === id) : undefined;
  console.log(book);

  function modalTypeLog(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    setModalAutor((modalAutor = !modalAutor));
  }

  const genre = book?.genre.map(({ genreName }) => {
    return <div className="book__title">Genre: {genreName}</div>;
  });

  return (
    <div>
      <img
        width="200px"
        height="250px"
        className="fit-cover"
        src={`http://localhost:4000/static/1605773614766`}
      />
      <div className="book__title">Title: {book?.nameBook}</div>
      <div>{genre}</div>
      <div className="book__title">Author: {book?.author.authorName}</div>
      <div className="book__title">
        Publisher: {book?.publisher.publisherName}
      </div>
      <div className="book__title">Publisher: {book?.description}</div>
      <div className="book__price">Price-{book?.price}$</div>
      <div></div>
      <div></div>
    </div>
  );
}

export default ModalBook;
