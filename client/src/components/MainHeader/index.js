import React from 'react'
import './styles.css'

import ImageProfile from '../../images/users/0001.jpg'

const MainHeader = () => {

    return (
        <header className="main-header">
            <form action="" className="main-header__search">
                <button className="main-header__button focus--box-shadow" type="submit">
                    <svg className="main-header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/>
                    </svg>
                </button>
                <input className="main-header__input focus--box-shadow" id="main-header__input" type="text" placeholder="Buscar"/>
            </form>
            <button className="account-btn focus--box-shadow" type="button">
                <span className="account-btn__name">Administrador</span>
                <img className="account-btn__img" src={ImageProfile} alt={ImageProfile} loading="lazy"/>
            </button>
        </header>
    )
}

export default MainHeader