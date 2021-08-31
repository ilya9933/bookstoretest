import { Spin } from "antd";
import React from "react";
import Header from "./Header";
import "./style.css";
import { LoadingOutlined } from "@ant-design/icons";
import { useAppSelector } from "../State";

interface Props {
  children: any;
}

function LayoutDefault({ children }: Props) {
  const user = useAppSelector((state) => state.user);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <div className="Default-layout">
      <Header />
      {children}
      {user.loading ? (
        <Spin className="louding" indicator={antIcon} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default LayoutDefault;
