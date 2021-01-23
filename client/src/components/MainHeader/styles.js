import styled from "styled-components";
import { theme } from "../../styles/index";

export const Header = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  padding: 1.5em 0em;
  margin-top: 1em;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-bottom: 1em;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${theme.colors.textDark};
  font-size: 2.5em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.2em;
  }
`;

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
