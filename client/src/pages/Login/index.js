import React from "react"
import { useLocation } from "wouter"

import "../../components/AppLayout/normalize.css"
import "../../components/AppLayout/AppLayout.css"
import "./Login.css"

import useUsers from "../../hooks/useUsers"
import useGlobalUser from "../../hooks/useGlobalUser"
import SkeletonCardUser from "./SkeletonCardUser"

const Login = () => {

    const { users } = useUsers()
    const { login } = useGlobalUser()
    const [ , pushLocation ] = useLocation()

    const handleClick = (id) => {
        login(users.find(element => element.id === id));
        pushLocation("/")
    }

    return(
        <div className="imposter imposter--center">
            <h1 className="login__title">¿Quién está mirando?</h1>
            <div className="user">
                {
                    users && users.map(element => <button className="user__item" onClick={() => handleClick(element.id)} key={ element.name }>
                        <div className="user__img-container"><img className="user__img" src={element.img} alt={element.id}/></div>
                        <h3 className="user__name">{element.name}</h3>
                    </button>)
                }
                {
                    !users && <SkeletonCardUser /> 
                }
            </div>
        </div>
    )
}

export default Login