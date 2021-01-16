import { useState, useEffect } from "react"
import getAllMedia from "../services/getAllMedia"

export default function useAllMedia({ typeMedia }) {

    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [media, setMedia] = useState(null)

    useEffect(function () {

        let mounted = true

        getAllMedia({ typeMedia })
            .then(
                (result) => {
                    if (mounted) {
                        setIsLoaded(true)
                        setMedia(result)
                    }
                }
            )
            .catch(err => {
                setIsLoaded(true)
                setError(true)
            })

        return () => mounted = false

    }, [typeMedia])

    return { error, isLoaded, media }
}