import React, { useEffect, useState } from "react";

import getAllMediaService from "../services/getAllMedia";
import getAllGenresService from "../services/getAllGenres";

const Context = React.createContext({});

export function MediaProvider({ children }) {
  const [movies, setMovies] = useState(null);
  const [series, setSeries] = useState(null);
  const [genres, setGenres] = useState(null);

  useEffect(function () {
    getAllGenresService()
      .then((result) => {
        setGenres(result);
      })
      .catch(() => {
        setGenres([]);
      });

    getAllMediaService({ typeMedia: "movies" })
      .then((result) => {
        setMovies(result);
      })
      .catch(() => {
        setMovies([]);
      });
  }, []);

  return (
    <Context.Provider
      value={{ genres, setGenres, movies, setMovies, series, setSeries }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
