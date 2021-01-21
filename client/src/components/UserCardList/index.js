import React, { useEffect } from "react";
import { useLocation } from "wouter";

import UserCard from "../UserCard";
import useAllUsers from "../../hooks/useAllUsers";
import useGlobalUser from "../../hooks/useGlobalUser";

import { List, TitleList } from "./styles";

const UserCardList = () => {
  const { error, isLoading, users } = useAllUsers();
  const { isLoginLoading, isLoginError, isLogged } = useGlobalUser();
  const [, pushLocation] = useLocation();

  useEffect(() => {
    if (isLogged && !isLoginError && !isLoginLoading) pushLocation("/");
  }, [isLogged, isLoginError, isLoginLoading, pushLocation]);

  return (
    <>
      <TitleList className="user-card-list__title">
        ¿Quién está mirando?
      </TitleList>
      <List className="user-card-list">
        {users &&
          users.map((user) => (
            <UserCard user={user} key={user.username + "ms"} />
          ))}
        {isLoading && <h2>Cargando usuario...</h2>}
        {(error || isLoginError) && <h2>Algo salio mal</h2>}
      </List>
    </>
  );
};

export default UserCardList;
