import React, { useEffect } from "react";
import { useLocation } from "wouter";

import "../../components/AppLayout/styles.css";
import "./Login.css";

import useAllUsers from "../../hooks/useAllUsers";
import useGlobalUser from "../../hooks/useGlobalUser";
import SkeletonCardUser from "./SkeletonCardUser";

const Login = () => {
  const { error, isLoaded, users } = useAllUsers();
  const { login, isLoginLoaded, isLoginError, isLogged } = useGlobalUser();
  const [, pushLocation] = useLocation();

  useEffect(() => {
    if (isLoginLoaded && !isLoginError && isLogged) pushLocation("/");
  }, [isLogged, isLoginError, isLoginLoaded, pushLocation]);

  const handleClick = (id) => {
    const userSeleted = users.find((user) => user.id === id);
    login({
      id,
      password: "",
      img_profile: userSeleted.img_profile,
      username: userSeleted.username,
    });
  };

  return (
    <div className="imposter imposter--center">
      <h1 className="login__title">¿Quién está mirando?</h1>
      <div className="user">
        {users &&
          users.map((user) => (
            <button
              className="user__item"
              onClick={() => handleClick(user.id)}
              key={user.id}
            >
              <div className="user__img-container">
                <img
                  className="user__img"
                  src={user.img_profile}
                  alt={user.username}
                />
              </div>
              <h3 className="user__name">{user.username}</h3>
            </button>
          ))}
        {(!users || error || !isLoaded) &&
          [1, 2].map((index) => <SkeletonCardUser key={`ms-${index}`} />)}
      </div>
    </div>
  );
};

export default Login;
