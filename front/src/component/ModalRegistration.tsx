import React from "react";

interface Props {
  modalType(): void;
}

function ModalRegistration({ modalType }: Props) {
  const modalTypeLog = (e: any) => {
    e.preventDefault();
    modalType();
  };

  return (
    <div>
      <form>
        <input placeholder="email" />
        <input placeholder="name" />
        <input placeholder="password" />
        <input type="date" value="2018-07-22" />
        <button>Registration</button>
      </form>
      <button onClick={(e) => modalTypeLog(e)}>Login</button>
    </div>
  );
}

export default ModalRegistration;
