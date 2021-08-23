
import React, { useState } from "react";
import Modal from "react-modal";
import ModalLogin from "./ModalLogin";
import ModalRegistration from "./ModalRegistration";

function Loging() {
  const [modalIsOpen, setIsOpen] = useState(false);
  let [modalAutor, setModalAutor] = useState("login");

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

export default Loging;
