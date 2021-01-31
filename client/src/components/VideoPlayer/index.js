import React, { useState, useRef, useEffect } from "react";
import { VideoContainer, VideoElement } from "./styles";
import "./VideoPlayer.css";

import { ButtonPlayVideo, ButtonPauseVideo } from "./buttons";

const toggleFullScreen = (element) => {
  if (!document.fullscreenElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

const secondsToString = (seconds) => {
  let hour = Math.floor(seconds / 3600);
  hour = hour < 10 ? "0" + hour : hour;

  let minute = Math.floor((seconds / 60) % 60);
  minute = minute < 10 ? "0" + minute : minute;

  let second = seconds % 60;
  second = second < 10 ? "0" + second : second;

  return hour + ":" + minute + ":" + second;
};

const VideoPlayer = ({ typeMedia, mediaData, handleExit }) => {
  const [stateVideoPlayer, setStateVideoPlayer] = useState("pause");
  const [timeVideo, setTimeVideo] = useState({ timeCurrent: 0, time: 0 });
  const video = useRef(null);
  const videoContainer = useRef(null);
  const BarProgressVideo = useRef(null);

  const handlePlayPauseVideo = () => {
    if (stateVideoPlayer === "pause") {
      setStateVideoPlayer("play");
      video.current.play();
    } else if (stateVideoPlayer === "play") {
      setStateVideoPlayer("pause");
      video.current.pause();
    }
  };

  const handleExitVideoPlayer = () => {
    setStateVideoPlayer("pause");
    toggleFullScreen(video.current);
    handleExit();
  };

  const handleBarProgress = () => {
    let progress = video.current.currentTime / video.current.duration;
    BarProgressVideo.current.style.width = progress * 100 + "%";

    setTimeVideo({
      timeCurrent: video.current.currentTime,
      time: video.current.duration,
    });

    if (video.current.ended) {
      setStateVideoPlayer("pause");
    }
  };

  const handleBarProgressClick = (e) => {
    let pos = (e.pageX - e.target.offsetLeft) / e.target.offsetWidth;
    video.current.currentTime = pos * video.current.duration;
  };

  useEffect(
    function () {
      // Get latest playing time

      // Fullscreen and play video
      toggleFullScreen(videoContainer.current);
      setStateVideoPlayer("play");
      video.current.play();
    },
    [mediaData.id, typeMedia]
  );

  return (
    <VideoContainer ref={videoContainer}>
      <VideoElement
        ref={video}
        preload="auto"
        onTimeUpdate={handleBarProgress}
        onClick={handlePlayPauseVideo}
        src={`/api/${typeMedia}/file/${mediaData.id}`}
      ></VideoElement>
      <div
        onClick={handlePlayPauseVideo}
        className={`video-player__container-title ${
          stateVideoPlayer === "pause" &&
          " video-player__container-title--hover"
        }`}
      >
        <img
          className="video-player__img"
          src={`https://image.tmdb.org/t/p/w500${mediaData.poster_path}`}
          alt="video-img"
        />
        <div className="video-player__container-info">
          <h2 className="video-player__title">{mediaData.title}</h2>
        </div>
      </div>
      <div
        className={`video-player__hover-controls ${
          stateVideoPlayer === "play" ? "video-player__hover" : "pause-hover"
        }`}
        role="presentation"
      ></div>
      <div
        className={`video-player__controls video-player__hover ${
          stateVideoPlayer === "play" ? "video-player__hover" : "pause-hover"
        }`}
      >
        <div
          className="video-player__bar-container"
          role="presentation"
          onClick={handleBarProgressClick}
        >
          <div
            className="video-player__bar-progress"
            ref={BarProgressVideo}
          ></div>
        </div>
        <div className="video-player__buttons">
          {timeVideo.time !== 0 && (
            <span className="video-player__time">{`${secondsToString(
              Math.floor(video.current.currentTime)
            )} / ${secondsToString(Math.floor(timeVideo.time))}`}</span>
          )}
          {timeVideo.time === 0 && (
            <span className="video-player__time">00:00:00 / 00:00:00</span>
          )}
          <button
            className="video-player__btn-play"
            type="button"
            onClick={handlePlayPauseVideo}
          >
            {stateVideoPlayer === "pause" && <ButtonPlayVideo />}
            {stateVideoPlayer === "play" && <ButtonPauseVideo />}
          </button>
          <button
            className="video-player__btn-exit"
            type="button"
            onClick={handleExitVideoPlayer}
          >
            Salir
          </button>
        </div>
      </div>
    </VideoContainer>
  );
};

export default VideoPlayer;
