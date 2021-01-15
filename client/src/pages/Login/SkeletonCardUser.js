import React from "react"
import "./SkeletonCardUser.css"

const SkeletonCardUser = () => {

    return (
        <button className="skeleton-user__item">
            <div className="skeleton-user__img-container"></div>
            <h3 className="skeleton-user__name-container"><span className="skeleton-user__name"></span></h3>
        </button>
    )
}

export default SkeletonCardUser