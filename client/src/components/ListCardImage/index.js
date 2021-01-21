import React from "react"
import "./ListCardImage.css"

import Carousel from "react-elastic-carousel"
import CardImage from "../CardImage"
import SkeletonCardImage from "../SkeletonCardImage"

const ListCardImage = ({ media, typeMedia, isLoading, isError }) => {
  return (
    <Carousel
      breakPoints={[
        { width: 1, itemsToShow: 2, itemsToScroll: 1 },
        { width: 550, itemsToShow: 3, itemsToScroll: 1 },
        { width: 850, itemsToShow: 5, itemsToScroll: 1 },
        { width: 1270, itemsToShow: 5, itemsToScroll: 1 },
        { width: 1450, itemsToShow: 7, itemsToScroll: 1 },
        { width: 1750, itemsToShow: 7, itemsToScroll: 1 },
      ]}
    >
      {media &&
        media
          .slice(0)
          .reverse()
          .map((element) => (
            <CardImage key={element.id} typeMedia={typeMedia} data={element} />
          ))}
      {!media &&
        isLoading &&
        !isError &&
        [1, 2, 3, 4, 5, 6, 7, 8].map((element) => (
          <SkeletonCardImage key={element} />
        ))}
    </Carousel>
  )
}

export default ListCardImage
