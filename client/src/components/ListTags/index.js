import React from "react";
import useGlobalMedia from "../../hooks/useGlobalMedia";
import "./ListTags.css";

import Tag from "./Tag";

const ListTags = ({ typeMedia, releaseDate, tags }) => {
  const { getGenresById } = useGlobalMedia();
  const genres = getGenresById({ tags });

  return (
    <div className="ms__container-tags">
      <Tag data={releaseDate} date={true} />
      {genres.map((element) => (
        <Tag data={element} key={element.id} typeMedia={typeMedia} />
      ))}
    </div>
  );
};

export default ListTags;
