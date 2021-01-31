import React, { useState, useEffect } from "react";
import { Button } from "./styles";
import { IconPlay, IconResume } from "../common/SvgIcons";

const ButtonNormal = ({ value, marginLeft = "0px", onClick }) => {
  const [valueButton, setValueButton] = useState("Reproducir");

  const handleClick = () => {
    if (valueButton !== "Volver A Ver") {
      onClick();
    }
  };

  useEffect(
    function () {
      setValueButton(value);
    },
    [value]
  );

  return (
    <Button onClick={handleClick} margin_left={marginLeft}>
      {value !== "Volver A Ver" && <IconPlay />}
      {value === "Volver A Ver" && <IconResume />}
      {valueButton}
    </Button>
  );
};

export default ButtonNormal;
