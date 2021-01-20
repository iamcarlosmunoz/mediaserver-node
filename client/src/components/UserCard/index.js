import React from "react"
import "./styles.css"

const UserCard = ({ user, onClick }) => {

  const handleClickUserCard = ({ id }) => {
    onClick({ id })
  }

  return (
    <button
      className="user-card"
      onClick={() => handleClickUserCard(user.id)}
      key={user.id + "user-card"}
    >
      <div className="user-card__container">
        <img
          className="user-card__img"
          src={user.img_profile}
          alt={user.username}
        />
      </div>
      <h3 className="user-card__name">{user.username}</h3>
    </button>
  )
}

export default UserCard