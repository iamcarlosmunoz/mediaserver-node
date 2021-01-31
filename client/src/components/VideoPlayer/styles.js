import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;

  @media (min-width: 1366px) {
    font-size: 22px;
  }

  @media (min-width: 1500px) {
    font-size: 24px;
  }
`;

export const VideoElement = styled.video`
  width: 100%;
  height: 100%;
`;
