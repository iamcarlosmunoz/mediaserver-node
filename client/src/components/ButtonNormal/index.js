import React, { useState, useEffect } from "react"
import "./ButtonNormal.css"

const ButtonNormal = ({ value, marginLeft = "0px", onClick }) => {

    const [ valueButton, setValueButton ] = useState("Reproducir") 

    const handleClick = () =>  {
        if (valueButton !== "Volver A Ver") {
            onClick()
        }
    }

    useEffect(function() {
        setValueButton(value)
    }, [value])

    return (
        <button className="ms__button" onClick={handleClick} style={{ marginLeft: marginLeft}}>
            { (value !== "Volver A Ver") &&
                <svg className="ms__icon-button" x="0px" y="0px" viewBox="0 0 320.001 320.001">
                    <title>{valueButton}</title>
                    <path d="M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z"/>
                </svg>
            }
            { (value === "Volver A Ver") &&
                <svg className="ms__icon-button" x="0px" y="0px" viewBox="0 0 300.003 300.003">
                    <title>{valueButton}</title>
                    <path d="M150.005,0C67.164,0,0.001,67.159,0.001,150c0,82.838,67.162,150.003,150.003,150.003S300.002,232.838,300.002,150C300.002,67.159,232.844,0,150.005,0z M230.091,172.444c-9.921,37.083-43.801,64.477-83.969,64.477c-47.93,0-86.923-38.99-86.923-86.923s38.99-86.92,86.923-86.92c21.906,0,41.931,8.157,57.228,21.579l-13.637,23.623c-11-11.487-26.468-18.664-43.594-18.664c-33.294,0-60.38,27.088-60.38,60.38c0,33.294,27.085,60.38,60.38,60.38c25.363,0,47.113-15.728,56.038-37.937h-20.765l36.168-62.636l36.166,62.641H230.091z"/>
                </svg>
            }
            {valueButton}
        </button> 
    )
}

export default ButtonNormal