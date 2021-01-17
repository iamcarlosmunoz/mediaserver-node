import React, { useEffect } from "react"

import MainSection from "../../components/MainSection"
import ListCardImage from "../../components/ListCardImage"
import AppLayout from "../../components/AppLayout"
import useGlobalMedia from "../../hooks/useGlobalMedia"
import useGlobalUser from "../../hooks/useGlobalUser"

const Home = () => {

    const { getMovies, movies, isMoviesLoading, isMoviesError } = useGlobalMedia()
    const { getWatchingList } = useGlobalUser()

    useEffect(function () {
        let mounted = true
        if (mounted) {
            getMovies()
            getWatchingList()
        }
        return () => mounted = false
    }, [getMovies, getWatchingList])

    return (
        <AppLayout>
            <MainSection titleSection={"Peliculas Agregadas"}>
                <ListCardImage typeMedia={"movies"} media={movies} isLoading={isMoviesLoading} isError={isMoviesError} />
            </MainSection>
        </AppLayout>
    )
}

export default Home