import styled from "styled-components";
import { theme } from "../../styles/index";

export const List = styled.div`
  width: fit-content;
  margin-top: 0.8em;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;

  & svg {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.5em;
  }
`;

export const ItemRanking = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  margin-right: 0.5em;
  min-width: 2.5em;
  min-height: 2.1875em;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textDark};
  border-radius: 10px;
  font-weight: bold;
`;
