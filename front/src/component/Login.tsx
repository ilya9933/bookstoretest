import React from "react";
import { useAppSelector } from "../State";
import ModalAuthtorization from "./ModalAuthtorization";
import ModalUser from "./ModalUser";
import "./style.css";
const logo = "../../public/logo192.png";

function Login() {
  const user = useAppSelector((state) => state.user);
  console.log(`http://localhost:4000/${user.data?.image?.images}`);

  return (
    <div>
      <div>
        {!user.auth || user.data?.image === null || !user.data?.image ? (
          <img
            src="./logo192.png"
            width="25px"
            height="25px"
            alt="avatar"
            className="fit-cover"
          />
        ) : (
          <img
            width="25px"
            height="25px"
            className="fit-cover"
            src={`http://localhost:4000/${user.data?.image.images}`}
          />
        )}
      </div>
      <div>{user.auth ? <ModalUser /> : <ModalAuthtorization />}</div>
    </div>
  );
}

export default Login;
