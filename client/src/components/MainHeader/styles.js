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
