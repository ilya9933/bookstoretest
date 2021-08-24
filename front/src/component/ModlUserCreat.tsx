import React, { useState } from "react";
import Modal from "react-modal";
import { useAppSelector } from "../State";

function ModalUserCreat() {
  const user = useAppSelector((state) => state.user);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>{user.data?.name}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      ></Modal>
    </div>
  );
}
export default ModalUserCreat;
