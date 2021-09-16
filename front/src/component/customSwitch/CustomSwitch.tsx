import { Switch } from "antd";
import { useState } from "react";

interface IProps {
  id: string;
  name: string;
  inputClick: (key: string, name: string) => void;
}

const CustomSwitch = ({ id, name, inputClick }: IProps) => {
  const [input, setInput] = useState(false);

  const handleChange = () => {
    setInput(!input);
    inputClick(id, name);
  };
  return (
    <Switch
      checked={input}
      checkedChildren={name}
      unCheckedChildren={name}
      onChange={handleChange}
    />
  );
};
export default CustomSwitch;
