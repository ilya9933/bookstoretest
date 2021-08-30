import React from "react";
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
