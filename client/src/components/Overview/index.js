import React from "react";
import { Container, Paragraph } from "./styles";

import Tags from "../Tags";

const Overview = ({ overview, release_date, genre_ids, full = false }) => {
  return (
    <Container long={full}>
      <Paragraph>{overview}</Paragraph>
      <Tags releaseDate={release_date} tags={genre_ids} long={"100%"} />
    </Container>
  );
};

export default Overview;
