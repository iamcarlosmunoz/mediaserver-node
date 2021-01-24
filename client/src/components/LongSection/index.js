import React from "react";
import {
  Container,
  DegradedLayer,
  InfoContainer,
  ControlsContainer,
  Control,
  TitleSlider,
  ButtonDetail,
} from "./styles";
import { IconBack, IconPlay } from "../common/SvgIcons";
import { SvgSingleWave2 } from "../common/SvgForms";
import InfoRanking from "../InfoRanking";
import ListTags from "../ListTags";
import useGlobalMedia from "../../hooks/useGlobalMedia";

const LongSection = () => {
  const { movies } = useGlobalMedia();
  return (
    <>
      {movies && (
        <Container img={movies[movies.length - 1].backdrop_path}>
          <DegradedLayer />
          <ButtonDetail>
            <IconPlay />
          </ButtonDetail>
          <InfoContainer>
            <h1>{movies[movies.length - 1].title}</h1>
            <InfoRanking ranking={movies[movies.length - 1].vote_average} />
            <ListTags
              releaseDate={movies[movies.length - 1].release_date}
              typeMedia={"movies"}
              tags={movies[movies.length - 1].genre_ids}
            />
          </InfoContainer>
          <SvgSingleWave2 />
          <TitleSlider> Últimos Agregados</TitleSlider>
          <ControlsContainer>
            <Control>
              <IconBack />
            </Control>
            <Control flipX={true}>
              <IconBack />
            </Control>
          </ControlsContainer>
        </Container>
      )}
    </>
  );
};

export default LongSection;
