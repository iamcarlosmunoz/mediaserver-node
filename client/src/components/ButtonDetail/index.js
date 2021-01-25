import React from "react";
import { useLocation } from "wouter";
import { IconPlay } from "../common/SvgIcons/index";
import { Button } from "./styles";

const ButtonDetail = ({ parentPath, id }) => {
  const [, pushLocation] = useLocation();

  const handleClick = () => {
    pushLocation(`${parentPath}/${id}`);
  };

  return (
    <Button onClick={handleClick}>
      <IconPlay />
    </Button>
  );
};

export default ButtonDetail;
