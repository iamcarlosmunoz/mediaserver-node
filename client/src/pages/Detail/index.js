import React, { useState } from "react"
import { useLocation } from "wouter"
import "./Detail.css"

import MainSection from "../../components/MainSection"
import useSingleMedia from "../../hooks/useSingleMedia"
import InfoRanking from "../../components/InfoRanking"
import VideoPlayer from "../../components/VideoPlayer"
import ButtonCheck from "../../components/ButtonCheck"
import ButtonNormal from "../../components/ButtonNormal"
import Overview from "../../components/Overview"

const Detail = ({ params }) => {

    const [ , pushLocation ] = useLocation()
    const [ typeMedia ] = useState((/\w[a-z]+/).exec(window.location.pathname)[0])
    const { media } = useSingleMedia({ typeMedia, id: params.id })
    const [ activePlayerVideo, setActivePlayerVideo ] = useState(false)
    const [ replay ] = useState(false)
    const bgImageSidebar = `https://image.tmdb.org/t/p/original${ media.backdrop_path }`
    const bgImageCard = `https://image.tmdb.org/t/p/w500${ media.poster_path }`

    const handleWatchMedia = (e) => {
        setActivePlayerVideo(true)
    }

    const handleOnClick = (e) => {
        pushLocation("/")
    }

    return (
        <MainSection>
            <div className="sidebar">
                <div className="sidebar__background">
                    <img className="sidebar__img-bg" src={(media.backdrop_path !== undefined) ? bgImageSidebar : ""} alt={media.title + "wallpaper"}/>
                    <div className="sidebar__solid-color"></div>
                    <div className="sidebar__solid-color"></div>
                    <div className="sidebar__solid-color"></div>

                    <div className="sidebar__content">
                        <button className="sidebar__button-back" onClick={ handleOnClick }>
                            <svg className="sidebar__icon-button-back" x="0px" y="0px" viewBox="0 0 492 492">
                                <path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788C492,219.198,479.172,207.418,464.344,207.418z"/>
                            </svg>
                        </button>
                        <div className="sidebar__header">
                            <div className="sidebar__poster">
                                <div className="sidebar__poster-container">
                                    <div className="sidebar__card">
                                        <img className="sidebar__card-img" src={(media.poster_path !== undefined) ? bgImageCard : ""} alt={media.title}/>
                                        <span className="sidebar__card-info">
                                            { typeMedia === "movies" && "Película" }
                                            { typeMedia === "series" && "Serie" }
                                        </span> 
                                    </div>
                                    <InfoRanking ranking={ media.vote_average } />
                                </div>
                            </div>
                            <div className="sidebar__info">
                                <div className="sidebar__container--title">
                                    <h2 className="sidebar__title">{ media.title }</h2>
                                    <div className="sidebar__bar-progress">
                                        <div className="sidebar__bar"></div>
                                    </div>
                                </div>
                                <Overview 
                                    overview={media.overview} 
                                    release_date={media.release_date} 
                                    typeMedia={typeMedia} 
                                    genre_ids={media.genre_ids} 
                                />
                                <div className="sidebar__container-buttons">
                                    <ButtonNormal onClick={ handleWatchMedia } />
                                    { replay && <ButtonNormal value="Volver A Ver" marginLeft="0.5em"/>}
                                    <ButtonCheck />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { activePlayerVideo && <VideoPlayer typeMedia={ typeMedia } mediaData={ media } handleExit={ setActivePlayerVideo }/> }
        </MainSection>
    )
}

export default Detail