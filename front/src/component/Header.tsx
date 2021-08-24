import React from "react";
import ImputSearch from "./ImputSearch";
import Loging from "./Login";

function Header() {
  return (
    <header className="App-header">
      <div>Logo</div>
      <ImputSearch />
      <Loging />
    </header>
  );
}

export default Header;
