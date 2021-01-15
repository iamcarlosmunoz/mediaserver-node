import { useCallback, useContext } from "react"
import Context from "../context/UserContext"
import uploadUser from "../services/uploadUser"

export default function useGlobalUser() {
    const { user, setUser } = useContext(Context)

    const login = useCallback((newUser) => {
        setUser(newUser)
    }, [setUser])

    const logout = useCallback(() => {
        setUser(null)
    }, [setUser])

    const updateUserState = useCallback(() => {
        if (user) {
            uploadUser(user)
        }
    }, [user])

    const updateMovieStatus = useCallback((data) => {

        let movie = user.movies_watching.find(element => element.id === data.id)

        if (movie === undefined) {

            setUser(prev => {
                return {
                    ...prev,
                    movies_watching: [...user.movies_watching, data]
                }
            })

        } else if (movie !== undefined) {

            let newMoviesWatching = user.movies_watching.slice()

            newMoviesWatching.map(element => {
                if (element.id === movie.id) {
                    element.time = data.time
                }
                return element;
            });

            setUser(prev => {
                return {
                    ...prev,
                    movies_watching: newMoviesWatching
                }
            })
        }

    }, [setUser, user])

    const getTimeMovieWatching = useCallback((id) => {

        let timeCurrent = 0
        let timeDuration = 0
        let errorFunction = null

        try {

            let movie = user.movies_watching.find(element => element.id === id)

            if (movie !== undefined) {

                timeDuration = movie.duration

                if (movie.time > 180 && movie.time < movie.duration) {
                    timeCurrent = (movie.time - 30)
                } else if (movie.time < 300 && movie.time < movie.duration) {
                    timeCurrent = movie.time
                }

            }

        } catch (error) {
            errorFunction = error;
        }

        return { timeCurrent, timeDuration, errorFunction }

    }, [user])

    return {
        isLogged: Boolean(user),
        updateMovieStatus,
        getTimeMovieWatching,
        updateUserState,
        login,
        logout,
        user
    }
}