import styled from "styled-components";
import { theme } from "../../styles/index";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 8.625em);
  max-height: calc(100vh - 8.625em);
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${theme.colors.textDark};

  @media (max-width: 768px) {
    height: 100vh;
    max-height: 100vh;
  }
`;

export const ContainerImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const BackgroundImage = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    width: auto;
    height: 70%;
  }
`;

export const DegradedSolidColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, #000);
`;
