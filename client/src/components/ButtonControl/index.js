import React from "react";
import { Control } from "./styles";
import { IconBack } from "../common/SvgIcons";

const ButtonControl = ({
  flipX = false,
  children = null,
  onClick,
  disabled,
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Control onClick={handleClick} flipX={flipX} disabled={disabled}>
      {children ? children : <IconBack />}
    </Control>
  );
};

export default ButtonControl;
