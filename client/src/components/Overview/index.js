import React from "react"
import "./Overview.css"

import ListTags from "../ListTags"

const Overview = ({ overview, release_date, typeMedia, genre_ids, full = false }) => {

    return (
        <div className={`${full ? "sm__container-overview--full" : "sm__container-overview"} `}>
            <p className="sm__overview">{overview}</p>
            <ListTags releaseDate={release_date} typeMedia={typeMedia} tags={genre_ids} />
        </div>
    )
}

export default Overview