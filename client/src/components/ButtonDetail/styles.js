import styled from "styled-components";
import { theme } from "../../styles/index";

export const Button = styled.button`
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
    width: 4em;
    height: 4em;
  }

  @media (min-width: 1400px) {
    right: 22em;
    top: 13.5em;
    width: 8em;
    height: 8em;
  }
`;
