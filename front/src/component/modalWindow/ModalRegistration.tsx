import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../../State/userReducer/userThunk";
import "./modalStyle.css";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  QqOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input, Space } from "antd";
import { userLoding } from "../../State/userReducer/actionsUser";

function ModalRegistration() {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [dob, setDob] = useState<string>(new Date().toDateString());
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

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
    setError(false);
    if (email === "" || password === "" || name === "" || dob === "") {
      setError(true);
    } else {
      dispatch(userLoding());
      dispatch(registerUserThunk(email, name, password, dob));

      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="modal__login">
      <form
        className="modal__form"
        onSubmit={(e) => handleSubmit(e)}
        method="get"
      >
        <Input
          placeholder="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            handleChange(e);
          }}
          prefix={<QqOutlined />}
        />
        <Input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            handleChange(e);
          }}
          prefix={<UserOutlined />}
        />
        <Space direction="vertical">
          <Input.Password
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              handleChange(e);
            }}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Space>
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
      <div className="error">{error ? "All fields must be filled" : ""}</div>
    </div>
  );
}

export default ModalRegistration;
