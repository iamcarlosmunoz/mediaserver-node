import React from "react"
import "./ListTags.css"

import Tag from "./Tag"
import useGenres from "../../hooks/useGenres"

const ListTags = ({ typeMedia, releaseDate, tags }) => {

    const { genres } = useGenres({ tags })

    return (
        <div className="ms__container-tags">
            <Tag data={ releaseDate } date={ true }/>
            { genres.map(element => <Tag data={element} key={element.id} typeMedia={typeMedia} />)}
        </div>
    )
}

export default ListTags