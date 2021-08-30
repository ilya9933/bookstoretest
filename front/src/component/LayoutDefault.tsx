import React from "react";
import Header from "./Header";
import "./style.css";

interface Props {
  children: any;
}

function LayoutDefault({ children }: Props) {
  return (
    <div className="Default-layout">
      <Header />
      {children}
    </div>
  );
}

export default LayoutDefault;
