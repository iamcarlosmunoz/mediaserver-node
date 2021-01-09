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
                <button className="sidebar__button" type="button" onClick={handleWatchMedia}>
                    <svg className="sidebar__icon" x="0px" y="0px" viewBox="0 0 320.001 320.001">
                        <title>Reproducir Medio</title>
                        <path d="M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z"/>
                    </svg>
                    Reproducir
                </button>
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