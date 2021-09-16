import { Button } from "antd";
import Modal from "react-modal";
import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import "./booksStyle.css";
import "../style.css";
import ModalBook from "../modalBook/ModalBook";

interface Props {
  id: number;
  name: string;
  price: number;
}

function BooksItem({ id, name, price }: Props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div className="book" onClick={() => openModal()}>
        <img
          width="70px"
          height="90px"
          className="fit-cover"
          src={`http://localhost:4000/static/1605773614766`}
        />
        <div className="book__title">Title: {name}</div>
        <div className="book__price">Price-{price}$</div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <Button type="primary" onClick={closeModal} className="CloseBtn">
          <CloseOutlined />
        </Button>
        <div className="modal relative">
          <ModalBook id={id} />
        </div>
      </Modal>
    </div>
  );
}
export default BooksItem;
