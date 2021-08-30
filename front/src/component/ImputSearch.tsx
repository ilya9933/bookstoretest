import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

function InputSearch() {
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <form className="form">
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </Space>
    </form>
  );
}

export default InputSearch;
