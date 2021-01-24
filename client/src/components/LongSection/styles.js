import styled from "styled-components";
import { theme } from "../../styles/index";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 28em;
  margin-bottom: 1.5em;
  border-radius: 10px;
  display: flex;
  background-image: ${({ img }) => `url(img/movies/${img})`};
  background-size: cover;
  overflow: hidden;

  @media (min-width: 1400px) {
    height: 35em;
  }

  @media (min-width: 1700px) {
    height: 38em;
  }
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
  height: 85%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5em;

  @media (min-width: 1400px) {
    padding-left: 10em;
  }
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
  outline: none;
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

export const ButtonDetail = styled.button`
  position: absolute;
  right: 18em;
  top: 10em;
  background: none;
  width: 5em;
  height: 5em;
  border: 0;
  border-radius: 10px;
  padding: 0.6em;
  transition: transform 0.3s ease;
  cursor: pointer;
  outline: none;
  z-index: 1;

  &:hover {
    transform: scale(1.2);
  }

  & svg path {
    width: 100%;
    height: 100%;
  }

  & svg path {
    fill: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    right: 2em;
    top: 2em;
  }

  @media (min-width: 1400px) {
    right: 22em;
    top: 13.5em;
    width: 8em;
    height: 8em;
  }
`;
