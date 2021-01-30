import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 4.5em;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    max-height: 52%;
    margin-top: 1em;
    padding: 0;
  }
`;

export const ContainerTitle = styled.div`
  width: 90%;
  position: relative;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 2.5em;
  margin-bottom: 0.5em;
`;

export const ContainerButtons = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 1em;
`;
