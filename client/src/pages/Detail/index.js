import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import "./Detail.css";

import MainSection from "../../components/MainSection";
import InfoRanking from "../../components/InfoRanking";
import VideoPlayer from "../../components/VideoPlayer";
import ButtonCheck from "../../components/ButtonCheck";
import ButtonNormal from "../../components/ButtonNormal";
import Overview from "../../components/Overview";
import MainLayout from "../../containers/MainLayout";
import useGlobalUser from "../../hooks/useGlobalUser";
import useGlobalMedia from "../../hooks/useGlobalMedia";

import {
  Container,
  ContainerImage,
  BackgroundImage,
  DegradedSolidColor,
  Content,
} from "./styles";
import ButtonControl from "../../components/ButtonControl";

const setValueBarProgress = ({ bar, time, duration }) => {
  if (time > 0) {
    bar.current.style.width = (time / duration) * 100 + "%";
  }
};

const Detail = ({ params }) => {
  const typeMedia = /\w[a-z]+/.exec(window.location.pathname)[0];
  const [, pushLocation] = useLocation();
  const [media, setMedia] = useState(null);
  const { getSingleMedia } = useGlobalMedia();
  const { getTimeMovie } = useGlobalUser();
  const [activePlayerVideo, setActivePlayerVideo] = useState(false);
  const [replay, setReplay] = useState(false);
  const barProgress = useRef(null);

  const handleWatchMedia = () => {
    setActivePlayerVideo(true);
  };

  const handleOnClick = () => {
    pushLocation("/");
  };

  const handleExitVideoPlayer = () => {
    setActivePlayerVideo(false);
  };

  useEffect(
    function () {
      const { time, duration } = getTimeMovie({ id: params.id });
      if (typeMedia === "movies")
        setValueBarProgress({ bar: barProgress, time, duration });
      setMedia(getSingleMedia({ id: params.id, typeMedia: typeMedia }));
      setReplay(() => (time > 0 ? true : false));

      // return () => updateUserState()
    },
    [getTimeMovie, getSingleMedia, params.id, typeMedia]
  );

  return (
    <MainLayout>
      <MainSection>
        {media && (
          <Container>
            <ContainerImage>
              <BackgroundImage
                src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
                alt={media.title + "wallpaper"}
              />
              <DegradedSolidColor />
              <DegradedSolidColor />
              <Content>
                <ButtonControl background={false} onClick={handleOnClick} />
                <div className="sidebar__header">
                  <div className="sidebar__poster">
                    <div className="sidebar__poster-container">
                      <div className="sidebar__card">
                        <img
                          className="sidebar__card-img"
                          src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                          alt={media.title}
                        />
                        <span className="sidebar__card-info">
                          {typeMedia === "movies" && "Película"}
                          {typeMedia === "series" && "Serie"}
                        </span>
                      </div>
                      <InfoRanking ranking={media.vote_average} />
                    </div>
                  </div>
                  <div className="sidebar__info">
                    <div className="sidebar__container--title">
                      <h2 className="sidebar__title">{media.title}</h2>
                      <div className="sidebar__bar-progress">
                        <div ref={barProgress} className="sidebar__bar"></div>
                      </div>
                    </div>
                    <Overview
                      overview={media.overview}
                      release_date={media.release_date}
                      typeMedia={typeMedia}
                      genre_ids={media.genre_ids}
                    />
                    <div className="sidebar__container-buttons">
                      <ButtonNormal
                        value={replay ? "Reanudar" : "Reproducir"}
                        onClick={handleWatchMedia}
                      />
                      {replay && (
                        <ButtonNormal value="Volver A Ver" marginLeft="0.5em" />
                      )}
                      <ButtonCheck />
                    </div>
                  </div>
                </div>
              </Content>
            </ContainerImage>
          </Container>
        )}
        {activePlayerVideo && (
          <VideoPlayer
            typeMedia={typeMedia}
            mediaData={media}
            handleExit={handleExitVideoPlayer}
          />
        )}
      </MainSection>
    </MainLayout>
  );
};

export default Detail;
