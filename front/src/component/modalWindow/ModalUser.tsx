import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../State";
import ModalUserCreat from "./ModalUserUpdate";
import { exitUser } from "../../State/userReducer/actionsUser";
import { Button } from "antd";

function ModalUser() {
  const user = useAppSelector((state) => state.user);

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

  return (
    <div>
      <button onClick={(e) => buttonUpdateUserClick()}>
        {updateUser ? "Clouse" : "Update user data"}
      </button>
      {updateUser ? <ModalUserCreat /> : <div></div>}

      {/* <button onClick={(e) => buttonDeleteUserClick()}>Delete user</button> */}
    </div>
  );
}
export default ModalUser;
