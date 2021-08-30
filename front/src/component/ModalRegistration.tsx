import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../State";
import { loginUser } from "../State/userReducer/actionsUser";
import user from "../State/userReducer/userReducer";
import { registerUserThunk } from "../State/userReducer/userThunk";
interface Props {
  modalType(): void;
}

function ModalRegistration({ modalType }: Props) {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [dob, setDob] = useState<string>(new Date().toDateString());
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);

  const modalTypeLog = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    modalType();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);
      case "name":
        return setName(e.target.value);
      case "dob":
        return setDob(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUserThunk(email, name, password, dob));

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} method="get">
        <input
          placeholder="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="date"
          name="dob"
          value={dob}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button>Registration</button>
      </form>
      <button onClick={(e) => modalTypeLog(e)}>Login</button>
      <button className="CloseBtn">X</button>
    </div>
  );
}

export default ModalRegistration;
