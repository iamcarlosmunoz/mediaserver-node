import React from "react";
import useGlobalMedia from "../../hooks/useGlobalMedia";
import { Container, Item } from "./styles";

const Tags = ({ releaseDate, tags }) => {
  const { getGenresById } = useGlobalMedia();
  const genres = getGenresById({ tags });

  return (
    <Container>
      <Item> {releaseDate} </Item>
      {genres.map((element) => (
        <Item key={"ms-tag-" + element.id}> {element.name} </Item>
      ))}
    </Container>
  );
};

export default Tags;
