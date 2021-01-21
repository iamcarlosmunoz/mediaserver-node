import React from "react"
import { useLocation } from "wouter"
import "./CardImage.css"

const CardImage = ({ typeMedia = "movies", data }) => {
  const [path, pushLocation] = useLocation()

  const handleClick = () => {
    pushLocation(`${typeMedia}/${data.id}`)
  }

  return (
    <div className="card-image">
      <img
        className="card-image__image"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
        loading="lazy"
      />
      <div className="card-image__button" role="button" onClick={handleClick}>
        <svg
          className="card-image__icon"
          role="presentation"
          x="0px"
          y="0px"
          viewBox="0 0 320.001 320.001"
        >
          <title>Informacion de la Película</title>
          <path d="M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z" />
        </svg>
        <span className="card-image__tag">
          {typeMedia === "movies" && "Película"}
          {typeMedia === "series" && "Serie"}
        </span>
      </div>
    </div>
  )
}

export default CardImage
