import styled from "styled-components";

export const Imposter = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const MainSimple = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Main = styled.main`
  width: calc(100% - 10em);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0;
  padding-left: 0;
  padding-right: 2em;
  padding-bottom: 2em;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    margin-bottom: 6em;
  }
`;
