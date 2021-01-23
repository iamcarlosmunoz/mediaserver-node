import React, { useEffect } from "react";
import { useLocation } from "wouter";

import useGlobalUser from "../../hooks/useGlobalUser";
import { Header, ContainerTitle, Title } from "./styles";

const MainHeader = () => {
  const [, pushLocation] = useLocation();
  const { logout, isLogged, user } = useGlobalUser();

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

  return (
    <>
      {isLogged && (
        <Header>
          <ContainerTitle>
            <Title>MediaServer</Title>
          </ContainerTitle>
        </Header>
      )}
    </>
  );
};

export default MainHeader;
