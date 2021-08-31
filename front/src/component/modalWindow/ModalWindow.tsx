import { Button } from "antd";
import React, { useState } from "react";
import Modal from "react-modal";
import { useAppSelector } from "../../State";
import ModalAuthtorization from "./ModalAuthtorization";
import ModalUser from "./ModalUser";
import { CloseOutlined } from "@ant-design/icons";
import "../style.css";
import "./modalStyle.css";
import { useDispatch } from "react-redux";
import { exitUser } from "../../State/userReducer/actionsUser";

function ModalWindow() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  function buttonExitUserClick() {
    localStorage.removeItem("authToken");
    dispatch(exitUser());
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button type="primary" className="button" onClick={() => openModal()}>
        {user.auth ? user.data?.name : "Login"}
      </Button>
      {user.auth ? (
        <Button
          type="primary"
          className="button"
          onClick={() => buttonExitUserClick()}
        >
          ExitUser
        </Button>
      ) : (
        <div></div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {user.auth ? <h2>`Hello {user.data?.name}`</h2> : <h2>Hello guest</h2>}
        <Button type="primary" onClick={closeModal} className="CloseBtn">
          <CloseOutlined />
        </Button>
        <div>{user.auth ? <ModalUser /> : <ModalAuthtorization />}</div>
      </Modal>
    </div>
  );
}

export default ModalWindow;
