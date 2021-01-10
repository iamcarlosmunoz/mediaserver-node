import React, { useState } from 'react'
import './styles.css'

import MainSection from '../../components/MainSection'
import useSingleMedia from '../../hooks/useSingleMedia'
import InfoRanking from '../../components/InfoRanking'
import VideoPlayer from '../../components/VideoPlayer'

const styleSidebar = ({ media }) => {
    const bgImageSidebar = `linear-gradient(rgba(255, 255, 255, 0),rgba(0, 0, 0, 1)),url(https://image.tmdb.org/t/p/original${media.backdrop_path})`
    const bgImageWallpaper = `url(https://image.tmdb.org/t/p/w500${media.poster_path})`
    return { bgImageSidebar, bgImageWallpaper}
}

const Detail = ({ params }) => {

    const [ typeMedia ] = useState((/\w[a-z]+/).exec(window.location.pathname)[0])
    const [ replay ] = useState(false)
    const { media } = useSingleMedia({ typeMedia, id: params.id })
    const { bgImageSidebar, bgImageWallpaper } = styleSidebar({ media })
    const [ activePlayerVideo, setActivePlayerVideo ] = useState(false)

    const handleWatchMedia = (e) => {
        setActivePlayerVideo(true)
    }

    return (
        <MainSection>
            <div className="sidebar" style={{ backgroundImage: (media.backdrop_path !== undefined) ? bgImageSidebar : ''}}>
                <div className="sidebar__wallpaper" style={{ backgroundImage: (media.backdrop_path !== undefined) ? bgImageWallpaper : ''}}>
                    { <span className="sidebar__tag-media sidebar__tag-media--color-movie">Pelicula</span> }
                </div>
                <div className="sidebar__button-group">
                    { replay && <button className="sidebar__button sidebar__button--replay" type="button" onClick={handleWatchMedia}>
                        <svg className="sidebar__icon sidebar__icon--replay" x="0px" y="0px" viewBox="0 0 305.836 305.836">
                            <title>Reiniciar Medio</title>
                            <path d="M152.924,300.748c84.319,0,152.912-68.6,152.912-152.918c0-39.476-15.312-77.231-42.346-105.564c0,0,3.938-8.857,8.814-19.783c4.864-10.926-2.138-18.636-15.648-17.228l-79.125,8.289c-13.511,1.411-17.999,11.467-10.021,22.461l46.741,64.393c7.986,10.992,17.834,12.31,22.008,2.937l7.56-16.964c12.172,18.012,18.976,39.329,18.976,61.459c0,60.594-49.288,109.875-109.87,109.875c-60.591,0-109.882-49.287-109.882-109.875c0-19.086,4.96-37.878,14.357-54.337c5.891-10.325,2.3-23.467-8.025-29.357c-10.328-5.896-23.464-2.3-29.36,8.031C6.923,95.107,0,121.27,0,147.829C0,232.148,68.602,300.748,152.924,300.748z"/>
                        </svg>
                    </button> }
                    <button className="sidebar__button sidebar__button--play" type="button" onClick={handleWatchMedia}>
                        <svg className="sidebar__icon" x="0px" y="0px" viewBox="0 0 320.001 320.001">
                            <title>Reproducir Medio</title>
                            <path d="M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z"/>
                        </svg>
                        Reproducir <span className="sidebar__button--progress"><span className="sidebar__button--bar"></span></span>
                    </button>

                </div>
            </div>
            <div className="movie-info">
                <div className="movie-info__titles">
                    <h2 className="movie-infor__title-movie">{media.title}</h2>
                    <InfoRanking ranking={media.vote_average} />
                </div>
                <div className="movie-info__overview">
                    <h3 className="movie-info__title">Resumen</h3>
                    <p className="movie-info__description">{media.overview}</p>
                </div>
            </div>
            { activePlayerVideo && <VideoPlayer typeMedia={typeMedia} idMedia={params.id} handleExit={setActivePlayerVideo}/> }
        </MainSection>
    )
}

export default Detail