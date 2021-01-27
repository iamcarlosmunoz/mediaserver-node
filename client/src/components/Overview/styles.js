import styled from "styled-components";

export const Container = styled.div`
  width: ${({ long }) => (long ? "100%" : "90%")};

  @media (min-width: 1366px) {
    font-size: 22px;
  }

  @media (min-width: 1500px) {
    font-size: 24px;
  }
`;

export const Paragraph = styled.p`
  margin-top: 0.6em;
  color: #fff;
  font-size: 1.2em;
  font-weight: 300;
  text-align: justify;
`;
