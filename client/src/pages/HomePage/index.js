import React from "react"

import MainSection from "../../components/MainSection"
import ListCardImage from "../../components/ListCardImage"
import AppLayout from "../../components/AppLayout"

const Home = () => {

    return (
        <AppLayout>
            <MainSection titleSection={"Peliculas Agregadas"}>
                <ListCardImage typeMedia={"movies"} />
            </MainSection>
        </AppLayout>
    )
}

export default Home