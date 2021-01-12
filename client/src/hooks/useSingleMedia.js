import { useState, useEffect } from "react"
import getSingleMedia from "../services/getSingleMedia"

export default function useSingleMedia ({ typeMedia, id }) {

  const [media, setMedia] = useState([])

  useEffect(function () {
    getSingleMedia({ typeMedia, id })
      .then(data => {
        setMedia(data)
      }).catch(err => {
        console.error("useSingleMedia:", err)
      })
  }, [typeMedia, id])

  return { media }
}