import { Button } from "antd";
import React, { useState } from "react";
import ModalLogin from "./ModalLogin";
import ModalRegistration from "./ModalRegistration";
import "../style.css";
import "./modalStyle.css";

function ModalAuthtorization() {
  let [modalAutor, setModalAutor] = useState(true);

  function modalTypeLog(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    setModalAutor((modalAutor = !modalAutor));
  }

  return (
    <div>
      <div>
        <Button
          type="primary"
          className="button__modal"
          onClick={(e) => modalTypeLog(e)}
        >
          {modalAutor ? "Register" : "Login"}
        </Button>
      </div>
      <div>{modalAutor ? <ModalLogin /> : <ModalRegistration />}</div>
    </div>
  );
}

export default ModalAuthtorization;
