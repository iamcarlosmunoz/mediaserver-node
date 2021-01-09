import React, { useState, useRef, useEffect } from 'react'
import './styles.css'

import { ButtonPlayVideo, ButtonPauseVideo } from './buttons'
import useEventListener from '../../hooks/useEventListener'

const VideoPlayer = ({ typeMedia, idMedia, handleExit }) => {

    const [ stateVideoPlayer, setStateVideoPlayer ] = useState('pause')
    const video = useRef(null)
    const containerVideo = useRef(null)
    const containerProgressBarVideoPlayer = useRef(null)
    const progressBarVideoPlayer = useRef(null)

    const toggleFullScreen = (element) => {
        if (!document.fullscreenElement) {
            if(element.requestFullscreen) {
                element.requestFullscreen();
            } else if(element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if(element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if(element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
    }

    const handlePlayPauseVideo = () => {
        if (stateVideoPlayer === 'pause') {
            setStateVideoPlayer('play')
            video.current.play()
        } else if (stateVideoPlayer === 'play'){
            setStateVideoPlayer('pause')
            video.current.pause()
        }
    }

    const handleExitVideoPlayer = () => {
        setStateVideoPlayer('pause')
        toggleFullScreen(video.current)
        handleExit(false)
    }

    const handleBarProgress = () => {
        let progress = video.current.currentTime / video.current.duration;
        progressBarVideoPlayer.current.style.width = progress * 100 + '%';
    
        if (video.current.ended) {
            setStateVideoPlayer('pause')
        }
    }

    useEffect(function () {
        // Fullscreen and play video
        toggleFullScreen(containerVideo.current)
        setStateVideoPlayer('play')
        video.current.play()
    }, [])

    useEventListener(video, 'timeupdate', handleBarProgress)
    useEventListener(video, 'click', handlePlayPauseVideo)
    useEventListener(containerProgressBarVideoPlayer, 'click', function(e) {
        let pos = (e.pageX  - this.offsetLeft) / this.offsetWidth;
        video.current.currentTime = pos * video.current.duration;
    })

    return (
        <div className="video-player" ref={containerVideo}>
            <video ref={video} className="video-player__source" preload="auto" src={`/api/${typeMedia}/file/${idMedia}`}></video>
            <div className={`video-player__hover-controls ${(stateVideoPlayer === 'play' ? 'video-player__hover' : 'pause-hover')}`} role="presentation"></div>
            <div className={`video-player__controls video-player__hover ${(stateVideoPlayer === 'play' ? 'video-player__hover' : 'pause-hover')}`}>
                <div className="video-player__bar-container" role="presentation" ref={containerProgressBarVideoPlayer}>
                    <div className="video-player__bar-progress" ref={progressBarVideoPlayer}></div>
                </div>
                <div className="video-player__buttons">
                    <button className="video-player__btn-play" type="button" onClick={handlePlayPauseVideo}>
                        { (stateVideoPlayer === 'pause') && <ButtonPlayVideo /> }
                        { (stateVideoPlayer === 'play') && <ButtonPauseVideo /> }
                    </button>
                    <button className="video-player__btn-exit" type="button" onClick={handleExitVideoPlayer}>Salir</button>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer