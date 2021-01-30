import React from "react";
import { Control, ControlBackground } from "./styles";
import { IconBack } from "../common/SvgIcons";

const ButtonControl = ({
  background = true,
  flipX = false,
  children = null,
  onClick,
  disabled,
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <>
      {background && (
        <ControlBackground
          onClick={handleClick}
          flipX={flipX}
          disabled={disabled}
        >
          {children ? children : <IconBack />}
        </ControlBackground>
      )}
      {!background && (
        <Control onClick={handleClick}>
          <IconBack />
        </Control>
      )}
    </>
  );
};

export default ButtonControl;
