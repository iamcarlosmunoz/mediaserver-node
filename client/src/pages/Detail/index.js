import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import "./Detail.css";

import MainSection from "../../components/MainSection";
import VideoPlayer from "../../components/VideoPlayer";
import MainLayout from "../../containers/MainLayout";
import useGlobalUser from "../../hooks/useGlobalUser";
import useGlobalMedia from "../../hooks/useGlobalMedia";

import {
  Container,
  ContainerImage,
  BackgroundImage,
  DegradedSolidColor,
  Content,
  Section,
} from "./styles";
import ButtonControl from "../../components/ButtonControl";
import PosterImage from "../../components/PosterImage";
import InfoDetail from "../../components/InfoDetail";

const Detail = ({ params }) => {
  const typeMedia = /\w[a-z]+/.exec(window.location.pathname)[0];
  const [, pushLocation] = useLocation();
  const [media, setMedia] = useState(null);
  const { getSingleMedia } = useGlobalMedia();
  const { getTimeMovie } = useGlobalUser();
  const [activePlayerVideo, setActivePlayerVideo] = useState(false);

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
      setMedia(getSingleMedia({ id: params.id, typeMedia: typeMedia }));
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
                <Section>
                  <PosterImage
                    poster_path={media.poster_path}
                    title={media.title}
                    typeMedia={typeMedia}
                    vote_average={media.vote_average}
                  />
                  <InfoDetail
                    id={media.id}
                    title={media.title}
                    overview={media.overview}
                    release_date={media.release_date}
                    typeMedia={typeMedia}
                    genre_ids={media.genre_ids}
                    onClick={handleWatchMedia}
                  />
                </Section>
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
