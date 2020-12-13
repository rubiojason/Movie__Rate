import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchGuestTitleMovie, fetchMostPopularData, 
         fetchTopRatedData, fetchNowPlayingData, 
         fetchMostPopularTvData, fetchAiringTodayData } from '../redux'
import './guest.scss'
import GuestMostPopular from './GuestMostPopular'
import GuestWelcomeMovieImg from './GuestWelcomeMovieImg'
import { loginPage, signupPage, guestPage } from '../redux'
import GuestTopRated from './GuestTopRated'
import GuestNowPlaying from './GuestNowPlaying'
import GuestMostPopularTv from './GuestMostPopularTv'
import GuestAiringToday from './GuestAiringToday'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';



function GuestHomePage({ fetchGuestTitleMovie, imgpic, pagestate, fetchMostPopularData, 
                          loginPage, signupPage, guestPage, fetchTopRatedData, 
                          fetchNowPlayingData, fetchMostPopularTvData, fetchAiringTodayData }) {

    document.body.style.background = "unset"
    document.body.style.backgroundColor = "rgb(15, 15, 15)"

    useEffect(() => {
        fetchGuestTitleMovie()
        fetchMostPopularData()
        fetchTopRatedData()
        fetchNowPlayingData()
        fetchMostPopularTvData()
        fetchAiringTodayData()
    }, [fetchGuestTitleMovie, fetchMostPopularData, 
        fetchTopRatedData, fetchNowPlayingData, fetchMostPopularTvData, 
        fetchAiringTodayData])


    return (
        <div className="movie-big-boi-container">
            
            <GuestWelcomeMovieImg/>

            <GuestMostPopular/>

            <GuestTopRated/>

            <GuestNowPlaying/>

            <GuestMostPopularTv/>

            <GuestAiringToday/>

            <div style={{marginBottom: '20px'}}></div>

        </div>
    )
}

const mapStateToProps = state => {
    return { 
        imgpic: state.guesttitlemovie.imgpic, 
        pagestate: state.page.pagestate,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGuestTitleMovie: () => dispatch(fetchGuestTitleMovie()), 
        fetchMostPopularData: () => dispatch(fetchMostPopularData()), 
        fetchTopRatedData: () => dispatch(fetchTopRatedData()),
        fetchNowPlayingData: () => dispatch(fetchNowPlayingData()),
        fetchMostPopularTvData: () => dispatch(fetchMostPopularTvData()), 
        fetchAiringTodayData: () => dispatch(fetchAiringTodayData()),
        loginPage: () => dispatch(loginPage()), 
        signupPage: () => dispatch(signupPage()), 
        guestPage: () => dispatch(guestPage()), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestHomePage)
