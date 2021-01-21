import React from "react"
import useGlobalUser from "../../hooks/useGlobalUser"

import { Card, ContainerCard, ImgCard, NameTitleCard } from "./styles"

const UserCard = ({ user }) => {
  const { login, isLoginLoading, isLoginError, isLogged } = useGlobalUser()

  const handleClickUserCard = () => {
    if (!isLoginLoading || !isLoginError || isLogged) {
      login({
        id: user.id,
        password: "",
        img_profile: user.img_profile,
        username: user.username,
      })
    }
  }

  return (
    <Card onClick={handleClickUserCard} key={user.id + "user-card"}>
      <ContainerCard>
        <ImgCard src={user.img_profile} alt={user.username} />
      </ContainerCard>
      <NameTitleCard>{user.username}</NameTitleCard>
    </Card>
  )
}

export default UserCard
