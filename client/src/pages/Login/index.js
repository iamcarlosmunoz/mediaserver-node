import React from "react";

import { SvgWave } from "../../components/common/SvgForms/index";
import UserCardList from "../../components/UserCardList";
import MainLayout from "../../containers/MainLayout";

import { theme } from "../../styles/index";

const Login = () => {
  return (
    <MainLayout simple={true}>
      <SvgWave color={theme.colors.primary} />
      <UserCardList />
    </MainLayout>
  );
};

export default Login;
