import React, { useState } from "react";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import {
  addPictureThunk,
  updateUserThunk,
} from "../State/userReducer/userThunk";

// interface img {
//   fieldname: string;
//   originalname: string;
//   encoding: string;
//   mimetype: string;
//   destination: string;
//   filename: string;
//   path: string;
//   size: string;
// }

function ModalUserUpdate() {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [oldEmail, setOldEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [userAvatar, setUserAvatar] = useState<string | Blob>("");
  const [dob, setDob] = useState<string>(new Date().toDateString());
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "newEmail":
        return setNewEmail(e.target.value);
      case "oldEmail":
        return setOldEmail(e.target.value);
      case "oldPassword":
        return setOldPassword(e.target.value);
      case "newPassword":
        return setNewPassword(e.target.value);
      case "name":
        return setName(e.target.value);
      case "dob":
        return setDob(e.target.value);
    }
  };

  const submitUserImg = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    const token = localStorage.getItem("authToken");
    console.log("token", token);
    if (!token) {
      return;
    }

    formData.append("file", userAvatar);
    console.log("avatar>>>>>>>>>>>>>>", token);

    dispatch(addPictureThunk(formData, token));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    console.log("token", token);
    if (!token) {
      return;
    }
    dispatch(
      updateUserThunk(
        oldEmail,
        newEmail,
        name,
        oldPassword,
        newPassword,
        dob,
        token
      )
    );
  };

  const addPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
      const currentAvatar = e.currentTarget.files[0];
      console.log("AV");
      setUserAvatar(currentAvatar);
    }
    // if (e.target.files[0]) {
    //   const currentAvatar = e.target.files[0];
    //   setUserAvatar(currentAvatar);
    // }
  };

  console.log("AVState", userAvatar);
  const updateUser = () => {};

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
          name="oldEmail"
          placeholder="Old email"
          value={oldEmail}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="email"
          name="newEmail"
          placeholder="New email"
          value={newEmail}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Space direction="vertical">
          <Input.Password
            type="password"
            name="oldPassword"
            placeholder="Old password"
            value={oldPassword}
            onChange={(e) => {
              handleChange(e);
            }}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Input.Password
            type="password"
            name="newPassword"
            placeholder="New password"
            value={newPassword}
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

        <button>Update</button>
      </form>
      <form>
        <input type="file" onChange={(e) => addPhoto(e)} />
        <button type="submit" value="Load" onClick={(e) => submitUserImg(e)}>
          Loud image
        </button>
      </form>
    </div>
  );
}

export default ModalUserUpdate;
