import styled from "styled-components";

export const List = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const TitleList = styled.h1`
  font-size: 4em;
  margin-bottom: 1em;

  @media (max-width: 1280px) {
    font-size: 3.2em;
    margin-bottom: 1em;
  }

  @media (max-width: 768px) {
    font-size: 3em;
    margin-bottom: 1em;
  }
`;
