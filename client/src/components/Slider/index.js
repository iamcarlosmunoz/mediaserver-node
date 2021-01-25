import React, { useCallback, useState } from "react";
import { Container, Controls, TitleSlider } from "./styles";
import { SvgSingleWave2 } from "../common/SvgForms";
import useGlobalMedia from "../../hooks/useGlobalMedia";
import ButtonControl from "../ButtonControl";
import SliderItem from "../SliderItem";

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
            <SliderItem
              item={item}
              current={current}
              media={movies}
              typeMedia={"movies"}
              key={"ms-slider-item" + item}
            />
          ))}
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
