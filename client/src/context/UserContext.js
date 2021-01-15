import React, { useState } from "react"

const Context = React.createContext({})

export function UserProvider({ children }) {

    const [user, setUser] = useState(null)

    return <Context.Provider value={{ user, setUser }}>
        {children}
    </Context.Provider>
}

export default Context
