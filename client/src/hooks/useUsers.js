import { useState, useEffect } from "react"
import getUsers from "../services/getUsers"

export default function useGenres () {

  const [users, setUsers] = useState(null)

  useEffect(function () {
    getUsers()
        .then(data => {setUsers(data)})
        .catch(err => {console.error("useUsers: ", err)})
  }, [])

  return { users }
}