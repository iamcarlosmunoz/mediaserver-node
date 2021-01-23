import React from "react";

import MainNavigation from "../../components/MainNavigation";
import MainHeader from "../../components/MainHeader";

import { Imposter, Main, MainSimple } from "./styles";
import { SvgSingleWave } from "../../components/common/SvgForms";

const MainLayout = ({ simple = false, children }) => {
  return simple ? (
    <MainSimple>{children}</MainSimple>
  ) : (
    <Imposter>
      <SvgSingleWave />
      <MainNavigation />
      <Main>
        <MainHeader />
        {children}
      </Main>
    </Imposter>
  );
};

export default MainLayout;
