import { useState, useEffect } from "react";
import getGenres from "../services/getGenres";

export default function useGenres({ tags = [] }) {
  const [genres, setGenres] = useState([]);

  useEffect(
    function () {
      let mounted = true;

      getGenres()
        .then((data) => {
          if (mounted)
            setGenres(
              data.filter((element) => tags.find((tag) => tag === element.id))
            );
        })
        .catch((err) => {
          console.error("useGenres: ", err);
        });

      return () => (mounted = false);
    },
    [tags]
  );

  return { genres };
}
