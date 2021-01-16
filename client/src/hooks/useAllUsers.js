import { useState, useEffect } from "react"
import getAllUsers from "../services/getAllUsers"

export default function useAllUsers() {

  const [error, setError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [users, setUsers] = useState(null)

  useEffect(function () {
    getAllUsers()
      .then(
        (result) => {
          setIsLoaded(true)
          setUsers(result)
        }
      )
      .catch(err => {
        console.error(err)
        setIsLoaded(true)
        setError(true)
      })
  }, [])

  return { error, isLoaded, users }
}