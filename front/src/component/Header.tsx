import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getBooksThunk } from "../State/userReducer/userThunk";
import InputSearch from "./ImputSearch";
import Loging from "./Login";
import "./style.css";

function Header() {
  return (
    <header className="App-header">
      <div className="App-header__logo">Logo</div>
      <InputSearch />
      <Loging />
    </header>
  );
}

export default Header;
