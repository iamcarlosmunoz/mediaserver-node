import React from "react"
import { Link } from "wouter"

const Tag = ({ data, link = false , typeMedia, date = false }) => {

    return (
        <>
            { (link && !date) && <Link className="ms__tag" href={`genres/${ data.id }`}> { data.name }</Link>}
            { (!link && !date) && <span className="ms__tag">{ data.name }</span>}
            { (!link && date) && <span className="ms__tag">{ data }</span>}
        </>
    )
}

export default Tag