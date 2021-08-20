import React from "react";

interface Props {
  modalType(): void;
}

function ModalLogin({ modalType }: Props) {
  const modalTypeLog = (e: any) => {
    e.preventDefault();
    modalType();
  };

  return (
    <div>
      <div>TEST</div>
      <div>Enter login and password</div>
      <form>
        <input placeholder="email" />
        <input placeholder="password" />
        <button>Logins</button>
        <button onClick={(e) => modalTypeLog(e)}>Registration</button>
      </form>
    </div>
  );
}

export default ModalLogin;
