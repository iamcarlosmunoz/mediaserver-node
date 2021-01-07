import React from 'react'
import './styles.css'

const MainSection = ({ titleSection, children }) => {
    
    return (
        <div className="main-section">
            <h2 className="main-section__title">{ titleSection }</h2>
            { children }
        </div>
    )
}

export default MainSection