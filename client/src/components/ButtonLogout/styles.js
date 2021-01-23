import styled from "styled-components";
import { theme } from "../../styles/index";

export const ButtonUser = styled.button`
  background: ${theme.colors.textLight};
  min-width: 9.75em;
  outline: none;
  border: none;
  border-radius: 10px;
  border: 0.2em solid ${theme.colors.textLight};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 0px 0.2em ${theme.colors.textDark};
  }
`;

export const ImgUser = styled.img`
  width: 3.5em;
  height: 3.5em;
  border-radius: 10px;
`;

export const NameUser = styled.span`
  padding-left: 1em;
  padding-right: 1em;
  font-weight: 600;
  font-size: 1.2em;
  color: ${theme.colors.textDark};
`;
