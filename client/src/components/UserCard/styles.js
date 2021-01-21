import styled from "styled-components";

export const Card = styled.button`
  width: 13em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 0;
  padding: 0.5em;
  margin-left: 4em;
  margin-bottom: 2em;
  opacity: 0.5;
  transition: all 0.5s ease;
  background: none;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    opacity: 1;
  }

  @media (max-width: 1280px) {
    font-size: 14px;
    margin-bottom: 2em;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    margin-bottom: 2em;
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  max-height: 12em;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: all 0.5s ease;

  ${Card}:hover & {
    box-shadow: 0px 0px 0px 0.4em #f96d00;
  }
`;

export const ImgCard = styled.img`
  width: 100%;
`;

export const NameTitleCard = styled.h3`
  font-size: 1.8em;
  margin-top: 0.35em;
  margin-bottom: 0.2em;
  text-align: center;
`;
