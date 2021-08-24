import React from "react";
import { useAppSelector } from "../State";
import ModalAuthtorization from "./ModalAuthtorization";
import ModalUser from "./ModalUser";

function Login() {
  const user = useAppSelector((state) => state.user);

  return <div>{user.loading ? <ModalUser /> : <ModalAuthtorization />}</div>;
}

export default Login;
