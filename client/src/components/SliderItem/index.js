import React from "react";

import InfoRanking from "../InfoRanking";
import ListTags from "../ListTags";
import ButtonDetail from "../ButtonDetail";

import { Container, DegradedLayer, Info, Img } from "./styled";

const SliderItem = ({ current, item, media, typeMedia }) => {
  const urlImg = `img/${typeMedia}/${media[media.length - item].backdrop_path}`;
  return (
    <Container active={current === item ? true : false}>
      <Img src={urlImg} />
      <DegradedLayer />
      <ButtonDetail parentPath={typeMedia} id={media[media.length - item].id} />
      <Info>
        <h1>{media[media.length - item].title}</h1>
        <InfoRanking ranking={media[media.length - item].vote_average} />
        <ListTags
          releaseDate={media[media.length - item].release_date}
          typeMedia={typeMedia}
          tags={media[media.length - item].genre_ids}
        />
      </Info>
    </Container>
  );
};

export default SliderItem;
