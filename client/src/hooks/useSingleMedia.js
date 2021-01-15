import { useState, useEffect } from "react"
import getSingleMedia from "../services/getSingleMedia"

export default function useSingleMedia({ typeMedia, id }) {

  const [media, setMedia] = useState([])

  useEffect(function () {

    let mounted = true

    getSingleMedia({ typeMedia, id })
      .then(data => {
        if (mounted) setMedia(data)
      }).catch(err => {
        console.error("useSingleMedia:", err)
      })

    return () => mounted = false
  }, [typeMedia, id])

  return { media }
}