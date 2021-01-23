import React, { useEffect } from "react";
import { useLocation } from "wouter";

import useGlobalUser from "../../hooks/useGlobalUser";
import ButtonLogout from "../ButtonLogout";
import { Header, ContainerTitle, Title } from "./styles";

const MainHeader = () => {
  const [, pushLocation] = useLocation();
  const { isLogged } = useGlobalUser();

  useEffect(
    function () {
      if (!isLogged) {
        pushLocation("/login");
      }
    },
    [isLogged, pushLocation]
  );

  return (
    <>
      {isLogged && (
        <Header>
          <ContainerTitle>
            <Title>MediaServer</Title>
            <ButtonLogout />
          </ContainerTitle>
        </Header>
      )}
    </>
  );
};

export default MainHeader;
