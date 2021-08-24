import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useAppSelector } from "../State";
import ModalLogin from "./ModalLogin";
import ModalRegistration from "./ModalRegistration";

function ModalAuthtorization() {
  const [modalIsOpen, setIsOpen] = useState(false);
  let [modalAutor, setModalAutor] = useState("login");
  const user = useAppSelector((state) => state.user);

  function modalType() {
    if (modalAutor === "login") {
      setModalAutor((modalAutor = "authorized"));
    } else {
      setModalAutor((modalAutor = "login"));
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Login</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        {modalAutor === "login" ? (
          <ModalLogin modalType={modalType} />
        ) : (
          <ModalRegistration modalType={modalType} />
        )}
      </Modal>
    </div>
  );
}

export default ModalAuthtorization;
