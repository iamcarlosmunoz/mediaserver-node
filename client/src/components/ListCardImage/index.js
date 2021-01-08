import React from 'react'
import './styles.css'

import CardImage from '../CardImage'

const ListCardImage = () => {

    return ( 
        <div className="list-card-image">
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
        </div>
    )
}

export default ListCardImage