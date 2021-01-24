import styled from "styled-components";
import { theme } from "../../../styles/index";

export const FormWave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: -1;

  & svg {
    position: relative;
    display: block;
    width: 300%;
    height: 450px;
  }

  & svg path {
    fill: ${theme.colors.primary};
  }
`;

export const FormWave2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  & svg {
    position: relative;
    display: block;
    width: calc(300% + 1.3px);
    height: 10em;
  }

  & svg path {
    fill: ${theme.colors.textLight};
  }
`;
