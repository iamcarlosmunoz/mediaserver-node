import React, { useState } from "react"

const Context = React.createContext({})

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [watchingList, setWatchingList] = useState(null)

  return (
    <Context.Provider value={{ user, setUser, watchingList, setWatchingList }}>
      {children}
    </Context.Provider>
  )
}

export default Context
