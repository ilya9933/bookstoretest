import React from "react";
import Header from "./Header";
import "./style.css";
import { useAppSelector } from "../State";
import Section from "./Section";

function LayoutDefault() {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="Default-layout">
      <Header />
      <Section />
    </div>
  );
}

export default LayoutDefault;
