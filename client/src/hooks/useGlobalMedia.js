import { useCallback, useContext, useState } from "react"
import Context from "../context/MediaContext"

import getAllMedia from "../services/getAllMedia"

export default function useGlobalMedia() {

    const { movies, series, setMovies, setSeries } = useContext(Context)
    const [stateMovies, setStateMovies] = useState({ isLoading: false, error: false })
    const [stateSeries, setStateSeries] = useState({ isLoading: false, error: false })

    const getMovies = useCallback(() => {

        setStateMovies({ isLoading: true, error: false })

        getAllMedia({ typeMedia: "movies" })
            .then(
                (result) => {
                    setStateMovies({ isLoading: false, error: false })
                    setMovies(result)
                }
            )
            .catch(err => {
                setStateMovies({ isLoading: false, error: true })
            })

    }, [setMovies])

    const getSeries = useCallback(() => {

        setStateSeries({ isLoading: true, error: false })

        getAllMedia({ typeMedia: "series" })
            .then(
                (result) => {
                    setStateSeries({ isLoading: false, error: false })
                    setSeries(result)
                }
            )
            .catch(err => {
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
        getMovies,
        getSeries,
        getSingleMedia,
        movies,
        series,
        isMoviesLoading: stateMovies.isLoading,
        isMoviesError: stateMovies.error,
        isSeriesLoading: stateSeries.isLoading,
        isseriesError: stateSeries.error
    }
}