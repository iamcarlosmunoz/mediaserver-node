import styled from "styled-components";
import { theme } from "../../styles/index";

export const Button = styled.button`
  height: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  padding-right: 1em;
  padding-left: 1em;
  font-size: 1.1em;
  color: #222;
  border: 0;
  border-radius: 5px;
  background-color: #fae26b;
  transition: background-color 0.3s ease;
  margin-left: ${({ margin_left }) => (margin_left ? margin_left : "0px")};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.primary};
  }

  & svg {
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5em;
  }

  & path {
    fill: ${theme.colors.textDark};
  }
`;
