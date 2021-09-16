import { Button, Spin } from "antd";
import React, { useState } from "react";
import Modal from "react-modal";
import { useAppSelector } from "../../State";
import ModalAuthtorization from "./ModalAuthtorization";
import ModalUser from "./ModalUser";
import { CloseOutlined, LoadingOutlined } from "@ant-design/icons";
import "../style.css";
import "./modalStyle.css";

import { useDispatch } from "react-redux";
import { exitUser } from "../../State/userReducer/actionsUser";

function ModalWindow() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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
        <></>
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
        <div className="modal relative">
          {user.loading ? (
            <Spin className="louding" indicator={antIcon} />
          ) : (
            <div>{user.auth ? <ModalUser /> : <ModalAuthtorization />}</div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default ModalWindow;
