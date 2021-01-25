import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.6s ease;
`;

export const DegradedLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: inset 0 0 0 2000px rgba(34, 34, 34, 0.8);
`;

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    width: auto;
    height: 100%;
  }
`;

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 85%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5em;

  @media (max-width: 768px) {
    padding-left: 3em;
    height: 90%;
  }

  @media (min-width: 1400px) {
    padding-left: 10em;
  }
`;
