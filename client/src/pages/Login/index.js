import React from "react"

import { SvgWave } from "../../components/common/SvgForms/index"
import UserCardList from "../../components/UserCardList"
import SimpleAppLayout from "../../containers/SimpleAppLayout"

const Login = () => {
  return (
    <SimpleAppLayout>
      <SvgWave color={"#f96d00"} />
      <SvgWave color={"#f96d00"} bottom={true} />
      <UserCardList />
    </SimpleAppLayout>
  )
}

export default Login
