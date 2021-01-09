import React, { useEffect, useState } from 'react'
import './styles.css'

import Carousel from 'react-elastic-carousel'
import CardImage from '../CardImage'

import getMedia from '../../services/getMedia' 

const ListCardImage = ({ typeMedia = '' }) => {

    const [media, setMedia] = useState([])

    useEffect(function () {
        getMedia({ typeMedia })
            .then(result => {
                setMedia(result)
            })
    }, [typeMedia])

    return ( 
        <Carousel 

            breakPoints={[
                { width: 1, itemsToShow: 2, itemsToScroll: 1 },
                { width: 550, itemsToShow: 3, itemsToScroll: 1 },
                { width: 850, itemsToShow: 4, itemsToScroll: 1 },
                { width: 1280, itemsToShow: 5, itemsToScroll: 1 },
                { width: 1450, itemsToShow: 7, itemsToScroll: 1 },
                { width: 1750, itemsToShow: 7, itemsToScroll: 1 }
            ]}
        >
            {media.map(element => <CardImage key={element.id} typeMedia={typeMedia} data={element}/>)}
        </Carousel>
    )
}

export default ListCardImage