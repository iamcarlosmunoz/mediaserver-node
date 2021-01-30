import React from "react";
import { Poster, Container, Front, Img, Type } from "./styles";
import InfoRanking from "../InfoRanking";

const PosterImage = ({ poster_path, title, typeMedia, vote_average }) => {
  return (
    <Poster>
      <Container>
        <Front>
          <Img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title + "-poster"}
          />
          <Type>
            {typeMedia === "movies" && "Película"}
            {typeMedia === "series" && "Serie"}
          </Type>
        </Front>
        <InfoRanking ranking={vote_average} />
      </Container>
    </Poster>
  );
};

export default PosterImage;
