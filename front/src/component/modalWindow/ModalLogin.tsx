import { Alert, Input, Space, Spin } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../../State/userReducer/userThunk";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import "./modalStyle.css";
import "../style.css";

import { userLoding } from "../../State/userReducer/actionsUser";

function ModalLogin() {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

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
    setError(false);
    if (email === "" || password === "") {
      setError(true);
    } else {
      dispatch(userLoding());
      dispatch(loginUserThunk(email, password));

      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="modal__login">
      <div>Enter login and password</div>
      <form
        className="modal__form"
        onSubmit={(e) => handleSubmit(e)}
        method="post"
      >
        <Input
          type="email"
          name="userEmail"
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
            name="userPassword"
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
        <button>Logins</button>
      </form>

      <div className="error">{error ? "All fields must be filled" : ""}</div>
    </div>
  );
}

export default ModalLogin;
