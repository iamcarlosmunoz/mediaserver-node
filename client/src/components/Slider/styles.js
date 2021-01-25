import styled from "styled-components";
import { theme } from "../../styles/index";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 28em;
  margin-bottom: 1.5em;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  background: rgba(34, 34, 34, 0.8);

  @media (min-width: 1400px) {
    height: 35em;
  }

  @media (min-width: 1700px) {
    height: 38em;
  }
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 1.5em;
  right: 1.5em;

  @media (max-width: 768px) {
    right: 1.5em;
    bottom: 1.2em;
  }
`;

export const TitleSlider = styled.h2`
  position: absolute;
  left: 1em;
  bottom: 1em;
  color: ${theme.colors.textDark};
  font-size: 1.8em;

  @media (max-width: 768px) {
    left: 1em;
    bottom: 0.7em;
  }
`;
