import styled from "styled-components";
import { theme } from "../../styles/index";

export const Control = styled.button`
  background: ${theme.colors.primary};
  width: 3em;
  height: 3em;
  border: 0;
  border-radius: 10px;
  padding: 0.6em;
  margin-left: ${({ flipX }) => (flipX ? "1em" : "0")};
  transform: ${({ flipX }) => (flipX ? "scaleX(-1)" : "none")};
  transition: box-shadow, opacity, box-shadow 0.3s ease;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  outline: none;
  z-index: 1;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    box-shadow: ${({ disabled }) =>
      disabled ? "none" : `0px 0px 0px 0.2em ${theme.colors.textDark}`};
  }

  & svg path {
    width: 100%;
    height: 100%;
  }

  & svg path {
    fill: ${theme.colors.textDark};
  }
`;
