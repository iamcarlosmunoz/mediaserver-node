import styled from "styled-components";
import { theme } from "../../styles/index";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 25em;
  margin-bottom: 1.5em;
  border-radius: 10px;
  display: flex;
  background-image: url("img/movies/pO1SnM5a1fEsYrFaVZW78Wb0zRJ.jpg");
  background-size: cover;
  overflow: hidden;
`;

export const DegradedLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.8);
`;

export const InfoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 1.5em;
  right: 1.5em;

  @media (max-width: 768px) {
    right: 1.5em;
    bottom: 1.2em;
  }
`;

export const Control = styled.button`
  background: ${theme.colors.primary};
  width: 3em;
  height: 3em;
  border: 0;
  border-radius: 10px;
  padding: 0.6em;
  margin-left: ${({ flipX }) => (flipX ? "1em" : "0")};
  transform: ${({ flipX }) => (flipX ? "scaleX(-1)" : "none")};
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  z-index: 1;

  &:hover {
    box-shadow: 0px 0px 0px 0.2em ${theme.colors.textDark};
  }

  & svg path {
    width: 100%;
    height: 100%;
  }

  & svg path {
    fill: ${theme.colors.textDark};
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
