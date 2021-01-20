import React from "react"

import { Card, ContainerCard, ImgCard, NameTitleCard } from "./styles"

const UserCard = ({ user, onClick }) => {

  const handleClickUserCard = ({ id }) => {
    onClick({ id })
  }

  return (
    <Card
      onClick={() => handleClickUserCard({ id: user.id })}
      key={user.id + "user-card"}
    >
      <ContainerCard>
        <ImgCard
          src={user.img_profile}
          alt={user.username}
        />
      </ContainerCard>
      <NameTitleCard>{user.username}</NameTitleCard>
    </Card>
  )
}

export default UserCard