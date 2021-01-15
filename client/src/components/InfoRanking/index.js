import React from "react"
import "./InfoRanking.css"

import Star from "./Star"

const InfoRanking = ({ ranking }) => {

    return (
        <div className="stars__list">
            <span className="stars__rancking">{ranking}</span>
            <Star starDark={(ranking > 2)} />
            <Star starDark={(ranking > 4)} />
            <Star starDark={(ranking > 6)} />
            <Star starDark={(ranking > 8)} />
            <Star starDark={(ranking > 10)} />
        </div>
    )
}

export default InfoRanking