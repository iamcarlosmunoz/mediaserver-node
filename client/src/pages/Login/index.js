import React from "react"
import { useLocation } from "wouter"

import "../../components/AppLayout/normalize.css"
import "../../components/AppLayout/AppLayout.css"
import "./Login.css"

import useAllUsers from "../../hooks/useAllUsers"
import useGlobalUser from "../../hooks/useGlobalUser"
import SkeletonCardUser from "./SkeletonCardUser"

const Login = () => {

    const { error, isLoaded, users } = useAllUsers()
    // const { login } = useGlobalUser()
    const [, pushLocation] = useLocation()

    const handleClick = (id) => {
        // login(users.find(element => element.id === id));
        pushLocation("/")
    }

    return (
        <div className="imposter imposter--center">
            <h1 className="login__title">¿Quién está mirando?</h1>
            <div className="user">
                {
                    users && users.map(user => <button className="user__item" onClick={() => handleClick(user.id)} key={user.id}>
                        <div className="user__img-container"><img className="user__img" src={user.img_profile} alt={user.username} /></div>
                        <h3 className="user__name">{user.username}</h3>
                    </button>)
                }
                {
                    (!users || error || !isLoaded) && <SkeletonCardUser />
                }
            </div>
        </div>
    )
}

export default Login