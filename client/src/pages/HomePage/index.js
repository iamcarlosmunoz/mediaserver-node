import React from "react"

import MainSection from "../../components/MainSection"
import ListCardImage from "../../components/ListCardImage"

const Home = () => {

    return (
        <>
            <MainSection titleSection={"Peliculas Agregadas"}>
                <ListCardImage typeMedia={"movies"}/>
            </MainSection>
        </>
    )
}

export default Home