import React from "react";
import { Container, ContainerTitle, Title, ContainerButtons } from "./styles";
import Overview from "./Overview";
import BarProgress from "./BarProgress";
import ButtonNormal from "../ButtonNormal";
import ButtonCheck from "../ButtonCheck";

const InfoDetail = ({
  id,
  title,
  overview,
  release_date,
  typeMedia,
  genre_ids,
  replay = false,
  onClick,
}) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <Container>
      <ContainerTitle>
        <Title>{title}</Title>
        <BarProgress typeMedia={typeMedia} id={id} />
      </ContainerTitle>
      <Overview
        overview={overview}
        release_date={release_date}
        typeMedia={typeMedia}
        genre_ids={genre_ids}
      />
      <ContainerButtons>
        <ButtonNormal
          onClick={handleClick}
          value={replay ? "Reanudar" : "Reproducir"}
        />
        {replay && <ButtonNormal value="Volver A Ver" marginLeft="0.5em" />}
        <ButtonCheck />
      </ContainerButtons>
    </Container>
  );
};

export default InfoDetail;
