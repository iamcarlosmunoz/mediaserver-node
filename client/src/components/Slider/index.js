import React, { useCallback, useState } from "react";
import {
  Container,
  DegradedLayer,
  Info,
  Controls,
  TitleSlider,
} from "./styles";
import { SvgSingleWave2 } from "../common/SvgForms";
import InfoRanking from "../InfoRanking";
import ListTags from "../ListTags";
import useGlobalMedia from "../../hooks/useGlobalMedia";
import ButtonControl from "../ButtonControl";
import ButtonDetail from "../ButtonDetail";

const Slider = () => {
  const { movies } = useGlobalMedia();
  const [current, setCurrent] = useState(1);
  const [disabled, setDisabled] = useState({ prev: true, next: false });
  const maxCount = 5;

  const handleClickNext = useCallback(() => {
    if (current < maxCount) {
      setCurrent((props) => props + 1);
      if (current === maxCount - 1) setDisabled({ ...disabled, next: true });
      else setDisabled({ prev: false, next: false });
    }
  }, [current, disabled]);

  const handleClickPrev = useCallback(() => {
    if (current > 1) {
      setCurrent((props) => props - 1);
      if (current === 2) setDisabled({ ...disabled, prev: true });
      else setDisabled({ prev: false, next: false });
    }
  }, [current, disabled]);

  return (
    <>
      {movies && (
        <Container>
          {[1, 2, 3, 4, 5].map((item) => (
            <DegradedLayer
              active={current === item ? true : false}
              img={movies[movies.length - item].backdrop_path}
            />
          ))}
          <ButtonDetail
            parentPath={"movies"}
            id={movies[movies.length - current].id}
          />
          <Info>
            <h1>{movies[movies.length - current].title}</h1>
            <InfoRanking
              ranking={movies[movies.length - current].vote_average}
            />
            <ListTags
              releaseDate={movies[movies.length - current].release_date}
              typeMedia={"movies"}
              tags={movies[movies.length - current].genre_ids}
            />
          </Info>
          <SvgSingleWave2 />
          <TitleSlider> Últimos Agregados</TitleSlider>
          <Controls>
            <ButtonControl onClick={handleClickPrev} disabled={disabled.prev} />
            <ButtonControl
              onClick={handleClickNext}
              disabled={disabled.next}
              flipX={true}
            />
          </Controls>
        </Container>
      )}
      {!movies && (
        <Container>
          <SvgSingleWave2 />
          <TitleSlider> Últimos Agregados</TitleSlider>
          <Controls>
            <ButtonControl disabled={true} />
            <ButtonControl disabled={true} flipX={true} />
          </Controls>
        </Container>
      )}
    </>
  );
};

export default Slider;
