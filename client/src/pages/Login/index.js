import React from "react";

import { SvgWave } from "../../components/common/SvgForms/index";
import UserCardList from "../../components/UserCardList";
import SimpleAppLayout from "../../containers/SimpleAppLayout";

import { theme } from "../../styles/index";

const Login = () => {
  return (
    <SimpleAppLayout>
      <SvgWave color={theme.colors.primary} />
      <UserCardList />
    </SimpleAppLayout>
  );
};

export default Login;
