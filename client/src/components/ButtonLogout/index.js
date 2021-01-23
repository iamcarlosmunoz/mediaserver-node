import React, { useState } from "react";
import useGlobalUser from "../../hooks/useGlobalUser";
import { ButtonUser, ImgUser, NameUser } from "./styles";

const ButtonLogout = () => {
  const { logout, user } = useGlobalUser();
  const [mouseOverButton, setMouseOverButton] = useState(false);

  const handleClick = () => {
    logout();
  };

  const handleMouseOverEvent = () => {
    setMouseOverButton(() => !mouseOverButton);
  };

  return (
    <ButtonUser
      onClick={handleClick}
      onMouseOver={handleMouseOverEvent}
      onMouseOut={handleMouseOverEvent}
    >
      <NameUser> {!mouseOverButton ? user.username : "Salir"}</NameUser>
      <ImgUser src={user.img_profile} />
    </ButtonUser>
  );
};

export default ButtonLogout;
