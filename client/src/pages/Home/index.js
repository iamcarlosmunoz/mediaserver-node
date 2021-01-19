import React, { useEffect } from "react";

import MainSection from "../../components/MainSection";
import ListCardImage from "../../components/ListCardImage";
import AppLayout from "../../components/AppLayout";
import useGlobalMedia from "../../hooks/useGlobalMedia";
import useGlobalUser from "../../hooks/useGlobalUser";

const Home = () => {
  const {
    getGenres,
    getMovies,
    movies,
    isMoviesLoading,
    isMoviesError,
  } = useGlobalMedia();
  const { getWatchingList } = useGlobalUser();

  useEffect(() => {
    getGenres();
    getMovies();
    getWatchingList();
  }, [getGenres, getMovies, getWatchingList]);

  return (
    <AppLayout>
      <MainSection titleSection={"Peliculas Agregadas"}>
        <ListCardImage
          typeMedia={"movies"}
          media={movies}
          isLoading={isMoviesLoading}
          isError={isMoviesError}
        />
      </MainSection>
    </AppLayout>
  );
};

export default Home;
