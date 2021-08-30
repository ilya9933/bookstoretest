import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../State";
import { loginUser } from "../State/userReducer/actionsUser";
import user from "../State/userReducer/userReducer";
import { loginUserThunk } from "../State/userReducer/userThunk";

interface IProps {
  modalType(): void;
}

function ModalLogin({ modalType }: IProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);

  const modalTypeLog = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    modalType();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "userEmail":
        return setEmail(e.target.value);
      case "userPassword":
        return setPassword(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUserThunk(email, password));

    setEmail("");
    setPassword("");
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div>Enter login and password</div>
      <form onSubmit={(e) => handleSubmit(e)} method="get">
        <input
          type="email"
          name="userEmail"
          placeholder="email"
          value={email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="password"
          name="userPassword"
          placeholder="password"
          value={password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button>Logins</button>
        <button onClick={(e) => modalTypeLog(e)}>Registration</button>
      </form>
    </div>
  );
}

export default ModalLogin;
