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

  & path {
    fill: ${theme.colors.primary};
  }
`;
