import React, { useRef, useEffect } from "react";
import useGlobalUser from "../../../hooks/useGlobalUser";
import { Container, Bar } from "./styles";

const setValueBarProgress = ({ bar, time, duration }) => {
  if (time > 0) {
    bar.current.style.width = (time / duration) * 100 + "%";
  }
};

const BarProgress = ({ typeMedia, id }) => {
  const barProgress = useRef(null);
  const { getTimeMovie } = useGlobalUser();

  useEffect(
    function () {
      const { time, duration } = getTimeMovie({ id: id });
      if (typeMedia === "movies")
        setValueBarProgress({ bar: barProgress, time, duration });
    },
    [getTimeMovie, id, typeMedia]
  );

  return (
    <Container>
      <Bar ref={barProgress}></Bar>
    </Container>
  );
};

export default BarProgress;
