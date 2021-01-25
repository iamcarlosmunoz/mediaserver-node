import React from "react";
import "./Overview.css";

import Tags from "../Tags";

const Overview = ({ overview, release_date, genre_ids, full = false }) => {
  return (
    <div
      className={`${
        full ? "sm__container-overview--full" : "sm__container-overview"
      } `}
    >
      <p className="sm__overview">{overview}</p>
      <Tags releaseDate={release_date} tags={genre_ids} long={"100%"} />
    </div>
  );
};

export default Overview;
