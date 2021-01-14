import React, { useEffect, useState } from "react"
import "./ListCardImage.css"

import Carousel from "react-elastic-carousel"
import CardImage from "../CardImage"
import SkeletonCardImage from "../SkeletonCardImage"

import getMedia from "../../services/getMedia" 

const ListCardImage = ({ typeMedia = "" }) => {

    const [media, setMedia] = useState(null)

    useEffect(function () {

        let mounted = true
        
        getMedia({ typeMedia })
            .then(result => {
                if(mounted) setMedia(result)
            })

        return () => mounted = false 
        
    }, [typeMedia])

    return ( 
        <Carousel 
            breakPoints={[
                { width: 1, itemsToShow: 2, itemsToScroll: 1 },
                { width: 550, itemsToShow: 3, itemsToScroll: 1 },
                { width: 850, itemsToShow: 5, itemsToScroll: 1 },
                { width: 1270, itemsToShow: 5, itemsToScroll: 1 },
                { width: 1450, itemsToShow: 7, itemsToScroll: 1 },
                { width: 1750, itemsToShow: 7, itemsToScroll: 1 }
            ]}
        >
            { media && media.slice(0).reverse().map(element => <CardImage key={element.id} typeMedia={typeMedia} data={element}/>) }
            { !media && [1,2,3,4,5,6,7,8,9,10,11,12].map(element => <SkeletonCardImage key={element}/>) }
        </Carousel>
        
    )
}

export default ListCardImage