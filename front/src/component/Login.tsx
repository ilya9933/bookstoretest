import React from "react";
import { Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAppSelector } from "../State";
import ModalWindow from "./modalWindow/ModalWindow";
import "./style.css";
import "./loginStyle.css";
const logo = "../../public/logo192.png";

function Login() {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="login">
      <div>
        {!user.auth || user.data?.image === null || !user.data?.image ? (
          <span>
            <Badge dot>
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
          </span>
        ) : (
          <span>
            <img
              width="25px"
              height="25px"
              className="fit-cover"
              src={`http://localhost:4000/${user.data?.image.images}`}
            />
          </span>
        )}
      </div>

      <ModalWindow />
    </div>
  );
}

export default Login;
