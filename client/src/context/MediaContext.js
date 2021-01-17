import React, { useState } from "react"

const Context = React.createContext({})

export function MediaProvider({ children }) {

    const [movies, setMovies] = useState(null)
    const [series, setSeries] = useState(null)

    return <Context.Provider value={{ movies, setMovies, series, setSeries }}>
        {children}
    </Context.Provider>
}

export default Context
