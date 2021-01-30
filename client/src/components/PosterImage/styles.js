import styled from "styled-components";

export const Poster = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    max-height: 48%;
  }

  @media (min-width: 1366px) {
    font-size: 22px;
  }

  @media (min-width: 1500px) {
    font-size: 24px;
  }
`;

export const Container = styled.div`
  position: relative;
  flex-direction: column;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Front = styled.div`
  width: 13.5em;
  height: 20.75em;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Type = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #222;
  font-weight: 700;
  text-align: center;
  padding: 0.4em 0;
  box-shadow: 0px 3px 10px 10px rgba(36, 34, 33, 0.8);
  background-color: #fff;
`;
