import React from "react";
import {
  Container,
  DegradedLayer,
  InfoContainer,
  ControlsContainer,
  Control,
  TitleSlider,
} from "./styles";
import { IconBack } from "../common/SvgIcons";
import { SvgSingleWave2 } from "../common/SvgForms";

const LongSection = () => {
  return (
    <Container>
      <DegradedLayer />
      <InfoContainer>
        <h2>Escandalosos: La película</h2>
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
  );
};

export default LongSection;
