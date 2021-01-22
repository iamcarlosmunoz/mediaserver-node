import React from "react";

import MainNavigation from "../../components/MainNavigation";
import MainHeader from "../../components/MainHeader";

import { Imposter, Main, MainSimple } from "./styles";

const MainLayout = ({ simple = false, children }) => {
  return simple ? (
    <MainSimple>{children}</MainSimple>
  ) : (
    <Imposter>
      <MainNavigation />
      <Main className="container container--long-width">
        <MainHeader />
        {children}
      </Main>
    </Imposter>
  );
};

export default MainLayout;
