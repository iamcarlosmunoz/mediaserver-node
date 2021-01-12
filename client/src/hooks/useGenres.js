import { useState, useEffect } from "react"
import getGenres from "../services/getGenres"

export default function useGenres ({ tags = [] }) {

  const [genres, setGenres] = useState([])

  useEffect(function () {
    getGenres({ })
      .then(data => {
        setGenres(data.filter(element => tags.find( tag => tag === element.id)))
      }).catch(err => {
        console.error("useGenres: ", err)
      })
  }, [ tags ])

  return { genres }
}