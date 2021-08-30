import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { useAppSelector } from "../State";
import ModalUserCreat from "./ModalUserUpdate";
import { exitUser } from "../State/userReducer/actionsUser";
import { Button } from "antd";

function ModalUser() {
  const user = useAppSelector((state) => state.user);
  const [modalIsOpen, setIsOpen] = useState(false);
  let [updateUser, setUpdateUsern] = useState(false);
  let [deleteUser, setDeleteUse] = useState(false);
  const dispatch = useDispatch();

  function buttonUpdateUserClick() {
    setUpdateUsern((updateUser = !updateUser));
    console.log("updateUsern", updateUser);
  }

  function buttonExitUserClick() {
    localStorage.removeItem("authToken");
    dispatch(exitUser());
  }

  function buttonDeleteUserClick() {
    setDeleteUse((deleteUser = !deleteUser));
    console.log("deleteUse", deleteUser);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button type="primary" onClick={openModal}>
        {user.data?.name}
      </Button>
      <Button type="primary" onClick={() => buttonExitUserClick()}>
        Exit user
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={(e) => buttonUpdateUserClick()}>
          {updateUser ? "Clouse" : "Update user data"}
        </button>
        <div>{updateUser ? <ModalUserCreat /> : <div></div>}</div>

        <button onClick={(e) => buttonDeleteUserClick()}>Delete user</button>
        <button>Clouse</button>
      </Modal>
    </div>
  );
}
export default ModalUser;
