import React, { useEffect } from "react";

import MainSection from "../../components/MainSection";
import ListCardImage from "../../components/ListCardImage";
import MainLayout from "../../containers/MainLayout";
import useGlobalMedia from "../../hooks/useGlobalMedia";
import useGlobalUser from "../../hooks/useGlobalUser";
import Slider from "../../components/Slider";

const Home = () => {
  const { movies, isMoviesLoading, isMoviesError } = useGlobalMedia();
  const { getWatchingList } = useGlobalUser();

  useEffect(() => {
    getWatchingList();
  }, [getWatchingList]);

  return (
    <MainLayout>
      <Slider />
      <MainSection titleSection={"Peliculas Agregadas"}>
        <ListCardImage
          typeMedia={"movies"}
          media={movies}
          isLoading={isMoviesLoading}
          isError={isMoviesError}
        />
      </MainSection>
    </MainLayout>
  );
};

export default Home;
