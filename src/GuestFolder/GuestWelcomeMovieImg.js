import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { fetchGuestTitleMovie, fetchMovieChangeSearchData, fetchMovieChangeSearchTvData, guestAnimationState } from '../redux'
import './guest.scss'
import { loginPage, signupPage, guestPage, guestSearchPage, guestAccountPage } from '../redux'
import gsap from 'gsap'
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function GuestWelcomeMovieImg({ imgpic, imgtitle, imgrate, imggenre, loginPage, 
                                signupPage, guestPage, guestSearchPage, fetchMovieChangeSearchData, 
                                fetchMovieChangeSearchTvData, guestAccountPage, animationstate, guestAnimationState, pagestate }) {
                                
    const API_KEY = '0949161fd6bf6f1127a37c1d3530c80d'
    const IMG_URL = 'http://image.tmdb.org/t/p/'
    const data = Array.from(imggenre)

    const history = useHistory()

    //usestate 
    const [search, setSearch] = useState('')
    const [redirectState, setRedirectState] = useState(false)
    //usestate 

    //useRef 
        const navImg = useRef(null)
        const inputAnim = useRef(null)
        const inputImgAnim = useRef(null)
        const movieImgAnim = useRef(null)
        const movieTitleAnim = useRef(null)
        const movieRateAnim = useRef(null)
        const movieGenreAnim = useRef(null)
    //useRef 

    //useEffect 
    useEffect(() => {
        gsap.fromTo(navImg.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.25 })

        gsap.fromTo([inputAnim.current, inputImgAnim.current], { y: -200 }, { y: 0, duration: 0.75, delay: 0.75 })

        gsap.fromTo(movieImgAnim.current, { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 1.5 })

        gsap.fromTo(movieTitleAnim.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 2 })
    
        gsap.fromTo(movieRateAnim.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 2.25 })

        gsap.fromTo(movieGenreAnim.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 2.5 })
    }, [])
    //useEffect 

    //functions 
    const handleSubmitSearch = e => {
        e.preventDefault()
        if (!search || !search.trim()) {
            return 
        }
        else {
            fetchMovieChangeSearchData(search)
            fetchMovieChangeSearchTvData(search)
            //guestSearchPage()
            history.push('/movie_project/')
            setRedirectState(true)      
        }
    }

    const handleOnChangeSearch = e => {
        e.preventDefault()

        setSearch(e.target.value)
    }
    //functions 

    //conditionals 
    if (redirectState) {
        return <Redirect to="/movie_project/guestsearchpage/" />
    }
    //conditionals 

    return (
        <div className="big-welcome-img">

            <nav>
                <div className="img-movie-container" ref={navImg}>
                    <img onClick={guestPage} src="https://www.nicepng.com/png/full/670-6708259_action-icon-png.png" alt="" />
                </div>

                <div className="login-signup">
                    <form className="search-button" onSubmit={handleSubmitSearch} onChange={handleOnChangeSearch} >
                        <div style={{width: '100%', padding: '0px 15px'}}>
                            <input type="text" placeholder="Search" ref={inputAnim} />
                        </div>

                        <button className="search-icon-container" ref={inputImgAnim}>
                            <img className="dis-img" alt="" src="https://rubiojason.github.io/Around-The-World/static/media/SearchIcon.e1a3c478.svg"/>
                        </button>
                    </form>
                </div>

                <div className="nav-overlay"></div>
            </nav>

            <div className="opening-movie-img-bottom-container">

                <div className="big-welcome-img-overlay" style={{background: `url(${IMG_URL}original${imgpic})`, 
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover !important', backgroundPosition: 'center'}} ref={movieImgAnim} ></div>

                <div className="inside-big-movie-img">
                    <div className="movie-title" ref={movieTitleAnim} >{imgtitle}</div>
                    <div className="rating" ref={movieRateAnim}>{Math.round(imgrate * 10)}%</div>
                    <div className="genre-box-container" ref={movieGenreAnim}>
                        {
                            data.map(p => <div className="genre-box" key={p}>{p}</div>)
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        info: state.guesttitlemovie, 
        imgpic: state.guesttitlemovie.imgpic, 
        imgtitle: state.guesttitlemovie.imgtitle, 
        imgrate: state.guesttitlemovie.imgrate,
        imggenre: state.guesttitlemovie.imggenre,
        pagestate: state.page.pagestate, 
        animationstate: state.guesttitlemovie.animationstate, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGuestTitleMovie: () => dispatch(fetchGuestTitleMovie()), 
        loginPage: () => dispatch(loginPage()), 
        signupPage: () => dispatch(signupPage()), 
        guestPage: () => dispatch(guestPage()), 
        guestSearchPage: () => dispatch(guestSearchPage()), 
        guestAccountPage: () => dispatch(guestAccountPage()), 
        fetchMovieChangeSearchData: (i) => dispatch(fetchMovieChangeSearchData(i)), 
        fetchMovieChangeSearchTvData: (i) => dispatch(fetchMovieChangeSearchTvData(i)), 
        guestAnimationState: () => dispatch(guestAnimationState()), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestWelcomeMovieImg)
