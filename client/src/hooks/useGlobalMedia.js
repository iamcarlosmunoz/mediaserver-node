import { useCallback, useContext, useState } from "react"
import Context from "../context/MediaContext"

import getAllMediaService from "../services/getAllMedia"
import getAllGenresService from "../services/getAllGenres" 

export default function useGlobalMedia() {

    const { genres, setGenres, movies, series, setMovies, setSeries } = useContext(Context)
    const [stateGenres, setStateGenres] = useState({ isLoading: false, error: false })
    const [stateMovies, setStateMovies] = useState({ isLoading: false, error: false })
    const [stateSeries, setStateSeries] = useState({ isLoading: false, error: false })

    const getGenres = useCallback(() => {

        setStateGenres({ isLoading: true, error: false })

        getAllGenresService()
            .then(
                (result) => {
                    setStateGenres({ isLoading: false, error: false })
                    setGenres(result)
                }
            )
            .catch(() => {
                setStateGenres({ isLoading: false, error: true })
            })
    }, [setGenres])

    const getMovies = useCallback(() => {

        setStateMovies({ isLoading: true, error: false })

        getAllMediaService({ typeMedia: "movies" })
            .then(
                (result) => {
                    setStateMovies({ isLoading: false, error: false })
                    setMovies(result)
                }
            )
            .catch(() => {
                setStateMovies({ isLoading: false, error: true })
            })

    }, [setMovies])

    const getSeries = useCallback(() => {

        setStateSeries({ isLoading: true, error: false })

        getAllMediaService({ typeMedia: "series" })
            .then(
                (result) => {
                    setStateSeries({ isLoading: false, error: false })
                    setSeries(result)
                }
            )
            .catch(() => {
                setStateSeries({ isLoading: false, error: true })
            })

    }, [setSeries])

    const getSingleMedia = useCallback(({ id, typeMedia }) => {
        if (typeMedia === "movies" && movies) {
            const movieFound = movies.find(movie => movie.id === parseInt(id, 10))
            return !movieFound ? null : movieFound
        }
    }, [movies])

    return {
        getGenres,
        getMovies,
        getSeries,
        getSingleMedia,
        genres,
        movies,
        series,
        isGenresLoading: stateGenres.isLoading,
        isGenresError: stateGenres.error,
        isMoviesLoading: stateMovies.isLoading,
        isMoviesError: stateMovies.error,
        isSeriesLoading: stateSeries.isLoading,
        isseriesError: stateSeries.error
    }
}