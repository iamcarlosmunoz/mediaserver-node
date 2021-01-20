import React, { useEffect } from "react";
import { useLocation } from "wouter";

import UserCard from "../UserCard"
import useAllUsers from "../../hooks/useAllUsers";
import useGlobalUser from "../../hooks/useGlobalUser";

import "./styles.css"

const UserCardList = () => {

  const { error, isLoading, users } = useAllUsers();
  const { login, isLoginLoaded, isLoginError, isLogged } = useGlobalUser();
  const [, pushLocation] = useLocation();

  useEffect(() => {
    if (isLoginLoaded && !isLoginError && isLogged) pushLocation("/");
  }, [isLogged, isLoginError, isLoginLoaded, pushLocation]);

  const handleClick = ({ id }) => {
    const userSeleted = users.find((user) => user.id === id);
    login({
      id,
      password: "",
      img_profile: userSeleted.img_profile,
      username: userSeleted.username,
    });
  };

  return (
    <>
      <h1 className="user-card-list__title">¿Quién está mirando?</h1>
      <div className="user-card-list">
        {users && users.map(user => <UserCard user={user} onClick={handleClick} key={user.username + "ms"} />)}
        {isLoading && <h2>Cargando usuario...</h2>}
        {error && <h2>Algo salio mal</h2>}
      </div>
    </>
  )
}

export default UserCardList