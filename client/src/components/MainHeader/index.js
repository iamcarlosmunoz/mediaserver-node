import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";

import useGlobalUser from "../../hooks/useGlobalUser";
import {
  Header,
  ContainerTitle,
  Title,
  ButtonUser,
  ImgUser,
  NameUser,
} from "./styles";

const MainHeader = () => {
  const [, pushLocation] = useLocation();
  const { logout, isLogged, user } = useGlobalUser();
  const [mouseOverButton, setMouseOverButton] = useState(false);

  useEffect(
    function () {
      if (!isLogged) {
        pushLocation("/login");
      }
    },
    [isLogged, pushLocation]
  );

  const handleClick = () => {
    logout();
  };

  const handleMouseOverEvent = () => {
    setMouseOverButton(() => !mouseOverButton);
  };

  return (
    <>
      {isLogged && (
        <Header>
          <ContainerTitle>
            <Title>MediaServer</Title>
            <ButtonUser
              onClick={handleClick}
              onMouseOver={handleMouseOverEvent}
              onMouseOut={handleMouseOverEvent}
            >
              <NameUser> {!mouseOverButton ? user.username : "Salir"}</NameUser>
              <ImgUser src={user.img_profile} />
            </ButtonUser>
          </ContainerTitle>
        </Header>
      )}
    </>
  );
};

export default MainHeader;
