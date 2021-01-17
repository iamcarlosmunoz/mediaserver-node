import { useCallback, useContext, useState } from "react"
import Context from "../context/UserContext"
import signinService from "../services/signin"
import getWatchingListService from "../services/getWatchingList"

export default function useGlobalUser() {

    const { user, setUser, watchingList, setWatchingList } = useContext(Context)
    const [state, setState] = useState({ isLoaded: false, error: false })

    const login = useCallback(({ id, password, img_profile, username }) => {
        signinService({ id, password })
            .then(
                (token) => {
                    setState({ isLoaded: true, error: false })
                    setUser({ token, img_profile, username })
                }
            )
            .catch(err => {
                setState({ isLoaded: true, error: true })
            })
    }, [setUser])

    const getWatchingList = useCallback(() => {
        if (user) {
            getWatchingListService({ token: user.token })
            .then(
                (result) => {
                    setWatchingList(result)
                }
            )
            .catch(err => {
                setWatchingList(null)
            })
        }
    }, [setWatchingList, user])

    const logout = useCallback(() => {
        setUser(null)
    }, [setUser])

    return {
        isLogged: Boolean(user),
        isLoginLoaded: state.isLoaded,
        isLoginError: state.error,
        login,
        logout,
        getWatchingList,
        watchingList,
        user
    }
}