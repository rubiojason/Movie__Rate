import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { loginPage, signupPage, guestPage, fetchMovieChangeSearchData, fetchMovieChangeSearchTvData, guestSearchPage, nowPlayingOverview, guestAccountPage } from '../redux'

gsap.registerPlugin(ScrollTrigger)

function GuestAboutMoviePage({ mostpopindex, mostpopfrontpic, mostpopbackpic, 
                              mostpoptitle, mostpoprate, mostpopgenre, mostpopoverview, 

                              pagestate, loginPage, signupPage, guestPage, guestAccountPage, 

                              topratedindex, topratedfrontpic, topratedbackpic, 
                              topratedtitle, topratedrate, topratedgenre, topratedoverview, 

                              nowplayindex, nowplayfrontpic, nowplaybackpic, 
                              nowplaytitle, nowplayrate, nowplaygenre, nowplayoverview, 

                              mostpoptvindex, mostpoptvfrontpic, mostpoptvbackpic, 
                              mostpoptvtitle, mostpoptvrate, mostpoptvgenre, mostpoptvoverview, 

                              airingtodayindex, airingtodayfrontpic, airingtodaybackpic, 
                              airingtodaytitle, airingtodayrate, airingtodaygenre, airingtodayoverview,

                              guestsearchindex, guestsearchfrontpic, guestsearchbackpic, 
                              guestsearchtitle, guestsearchrate, guestsearchgenre, guestsearchoverview,

                              guestsearchtvindex, guestsearchtvfrontpic, guestsearchtvbackpic, 
                              guestsearchtvtitle, guestsearchtvrate, guestsearchtvgenre, guestsearchtvoverview,

                              fetchMovieChangeSearchData, fetchMovieChangeSearchTvData, guestSearchPage
                               }) {

    const popIndex = mostpopindex.split(' ')
    const topRatedIndex = topratedindex.split(' ')
    const nowPlayingIndex = nowplayindex.split(' ')
    const popTvIndex = mostpoptvindex.split(' ')
    const airingTodayIndex = airingtodayindex.split(' ')
    const guestSearchIndex = guestsearchindex.split(' ')
    const guestSearchTvIndex = guestsearchtvindex.split(' ')

    const API_KEY = '0949161fd6bf6f1127a37c1d3530c80d'
    const IMG_URL = 'http://image.tmdb.org/t/p/'
    const IMG_SIZE = 'w200'

    //useState 
    const [rateColor, setRateColor] = useState('')
    const [rateZindex, setRateZindex] = useState(-10)
    const [imgOpacity, setImgOpacity] = useState(0)
    const [darkenPageZindex, setDarkenPageZindex] = useState(-9)
    const [aboutMovieZindex, setAboutMovieZindex] = useState(-10)
    
    const [search, setSearch] = useState('')
    const [redirectState, setRedirectState] = useState(false)
    //useState 

    //useRef 
        //popular movie
    const popNavImgAnim = useRef()
    const popNavSearchAnim = useRef()
    const popNavSearchImgAnim = useRef()

    const popTitleAnim = useRef()
    const popMovieImgAnim = useRef()
    const popScoreItAnim = useRef()
    const popScoreAnim = useRef()
    const popGenreAnim = useRef()
    const popSynopisAnim = useRef()
    const popBackgroundAnim = useRef()
        //popular movie

        //top rated 
    const ratedNavImgAnim = useRef()
    const ratedNavSearchAnim = useRef()
    const ratedNavSearchImgAnim = useRef()

    const ratedTitleAnim = useRef()
    const ratedMovieImgAnim = useRef()
    const ratedScoreItAnim = useRef()
    const ratedScoreAnim = useRef()
    const ratedGenreAnim = useRef()
    const ratedSynopisAnim = useRef()
    const ratedBackgroundAnim = useRef()
        //top rated 
    
        //now playing 
    const playingNavImgAnim = useRef()
    const playingNavSearchAnim = useRef()
    const playingNavSearchImgAnim = useRef()
    
    const playingTitleAnim = useRef()
    const playingMovieImgAnim = useRef()
    const playingScoreItAnim = useRef()
    const playingScoreAnim = useRef()
    const playingGenreAnim = useRef()
    const playingSynopisAnim = useRef()
    const playingBackgroundAnim = useRef()
        //now playing 

        //popular tv
    const popTvNavImgAnim = useRef()
    const popTvNavSearchAnim = useRef()
    const popTvNavSearchImgAnim = useRef()
        
    const popTvTitleAnim = useRef()
    const popTvMovieImgAnim = useRef()
    const popTvScoreItAnim = useRef()
    const popTvScoreAnim = useRef()
    const popTvGenreAnim = useRef()
    const popTvSynopisAnim = useRef()
    const popTvBackgroundAnim = useRef()
        //popular tv

        //airing today 
    const airingNavImgAnim = useRef()
    const airingNavSearchAnim = useRef()
    const airingNavSearchImgAnim = useRef()
            
    const airingTitleAnim = useRef()
    const airingMovieImgAnim = useRef()
    const airingScoreItAnim = useRef()
    const airingScoreAnim = useRef()
    const airingGenreAnim = useRef()
    const airingSynopisAnim = useRef()
    const airingBackgroundAnim = useRef()
        //airing today

        //search movie 
    const searchNavImgAnim = useRef()
    const searchNavSearchAnim = useRef()
    const searchNavSearchImgAnim = useRef()
                
    const searchTitleAnim = useRef()
    const searchMovieImgAnim = useRef()
    const searchScoreItAnim = useRef()
    const searchScoreAnim = useRef()
    const searchGenreAnim = useRef()
    const searchSynopisAnim = useRef()
    const searchBackgroundAnim = useRef()
        //search movie 

        //search tv 
    const searchTvNavImgAnim = useRef()
    const searchTvNavSearchAnim = useRef()
    const searchTvNavSearchImgAnim = useRef()
                    
    const searchTvTitleAnim = useRef()
    const searchTvMovieImgAnim = useRef()
    const searchTvScoreItAnim = useRef()
    const searchTvScoreAnim = useRef()
    const searchTvGenreAnim = useRef()
    const searchTvSynopisAnim = useRef()
    const searchTvBackgroundAnim = useRef()
        //search tv
    //useRef 

    //functions 
    const handleRateClick = () => {
        setRateZindex(10)
        setImgOpacity(1)
        setDarkenPageZindex(9)
    }

    const handleRateUnClick = () => {
        setRateZindex(-10)
        setImgOpacity(0)
        setDarkenPageZindex(-9)
    }

    const handleAboutMovieClick = () => {
        setAboutMovieZindex(10)
        setDarkenPageZindex(9)
        setImgOpacity(1)
    }

    const handleAboutMovieUnClick = () => {
        setAboutMovieZindex(-10)
        setDarkenPageZindex(-9)
        setImgOpacity(0)
    }
    //functions 
    
    //useEffect 
    useEffect(() => {

        if (popIndex[0] !== '') {
            if (mostpoprate[popIndex[0]] >= 7) {
                setRateColor('lime')
            }
            else if (mostpoprate[popIndex[0]] >= 5) {
                setRateColor('orange')
            }
            else {
                setRateColor('red')
            }
        }

        else if (topRatedIndex[0] !== '') {
            if (topratedrate[topRatedIndex[0]] >= 7) {
                setRateColor('lime')
            }
            else if (topratedrate[topRatedIndex[0]] >= 5) {
                setRateColor('orange')
            }
            else {
                setRateColor('red')
            }
        }

        else if (nowPlayingIndex[0] !== '') {
            if (nowplayrate[nowPlayingIndex[0]] >= 7) {
                setRateColor('lime')
            }
            else if (nowplayrate[nowPlayingIndex[0]] >= 5) {
                setRateColor('orange')
            }
            else {
                setRateColor('red')
            }
        }

        else if (popTvIndex[0] !== '') {
            if (mostpoptvrate[popTvIndex[0]] >= 7) {
                setRateColor('lime')
            }
            else if (mostpoptvrate[popTvIndex[0]] >= 5) {
                setRateColor('orange')
            }
            else {
                setRateColor('red')
            }
        }

        else if (airingTodayIndex[0] !== '') {
            if (airingtodayrate[airingTodayIndex[0]] >= 7) {
                setRateColor('lime')
            }
            else if (airingtodayrate[airingTodayIndex[0]] >= 5) {
                setRateColor('orange')
            }
            else {
                setRateColor('red')
            }
        }

        else if (guestSearchIndex[0] !== '') {
            if (guestsearchrate[guestSearchIndex[0]] >= 7) {
                setRateColor('lime')
            }
            else if (guestsearchrate[guestSearchIndex[0]] >= 5) {
                setRateColor('orange')
            }
            else {
                setRateColor('red')
            }
        }

        else {
            if (guestSearchTvIndex[0] !== '') {
                if (guestsearchtvrate[guestSearchTvIndex[0]] >= 7) {
                    setRateColor('lime')
                }
                else if (guestsearchtvrate[guestSearchTvIndex[0]] >= 5) {
                    setRateColor('orange')
                }
                else {
                    setRateColor('red')
                }
            }
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)

        if (popIndex[0] !== '') {
            gsap.fromTo(popNavImgAnim.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.25 })

            gsap.fromTo([popNavSearchAnim.current, popNavSearchImgAnim.current], { y: -200 }, { y: 0, duration: 0.75, delay: 0.75 })

            gsap.fromTo([popTitleAnim.current, popMovieImgAnim.current], { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1.5 })

            gsap.fromTo([popScoreItAnim.current, popScoreAnim.current, popGenreAnim.current], { opacity: 0, y:50 }, { opacity: 1, y: 0, duration: 1, delay: 2.25 })

            gsap.fromTo(popSynopisAnim.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 2.5 })

            gsap.fromTo(popBackgroundAnim.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 3 })
        }

        else if (topRatedIndex[0] !== '') {
            gsap.fromTo(ratedNavImgAnim.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.25 })

            gsap.fromTo([ratedNavSearchAnim.current, ratedNavSearchImgAnim.current], { y: -200 }, { y: 0, duration: 0.75, delay: 0.75 })

            gsap.fromTo([ratedTitleAnim.current, ratedMovieImgAnim.current], { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1.5 })

            gsap.fromTo([ratedScoreItAnim.current, ratedScoreAnim.current, ratedGenreAnim.current], { opacity: 0, y:50 }, { opacity: 1, y: 0, duration: 1, delay: 2.25 })

            gsap.fromTo(ratedSynopisAnim.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 2.5 })

            gsap.fromTo(ratedBackgroundAnim.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 3 })
        }

        else if (nowPlayingIndex[0] !== '') {
            gsap.fromTo(playingNavImgAnim.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.25 })

            gsap.fromTo([playingNavSearchAnim.current, playingNavSearchImgAnim.current], { y: -200 }, { y: 0, duration: 0.75, delay: 0.75 })

            gsap.fromTo([playingTitleAnim.current, playingMovieImgAnim.current], { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1.5 })

            gsap.fromTo([playingScoreItAnim.current, playingScoreAnim.current, playingGenreAnim.current], { opacity: 0, y:50 }, { opacity: 1, y: 0, duration: 1, delay: 2.25 })

            gsap.fromTo(playingSynopisAnim.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 2.5 })

            gsap.fromTo(playingBackgroundAnim.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 3 })
        }

        else if (popTvIndex[0] !== '') {
            gsap.fromTo(popTvNavImgAnim.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.25 })

            gsap.fromTo([popTvNavSearchAnim.current, popTvNavSearchImgAnim.current], { y: -200 }, { y: 0, duration: 0.75, delay: 0.75 })

            gsap.fromTo([popTvTitleAnim.current, popTvMovieImgAnim.current], { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1.5 })

            gsap.fromTo([popTvScoreItAnim.current, popTvScoreAnim.current, popTvGenreAnim.current], { opacity: 0, y:50 }, { opacity: 1, y: 0, duration: 1, delay: 2.25 })

            gsap.fromTo(popTvSynopisAnim.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 2.5 })

            gsap.fromTo(popTvBackgroundAnim.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 3 })
        }

        else if (airingTodayIndex[0] !== '') {
            gsap.fromTo(airingNavImgAnim.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.25 })

            gsap.fromTo([airingNavSearchAnim.current, airingNavSearchImgAnim.current], { y: -200 }, { y: 0, duration: 0.75, delay: 0.75 })

            gsap.fromTo([airingTitleAnim.current, airingMovieImgAnim.current], { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1.5 })

            gsap.fromTo([airingScoreItAnim.current, airingScoreAnim.current, airingGenreAnim.current], { opacity: 0, y:50 }, { opacity: 1, y: 0, duration: 1, delay: 2.25 })

            gsap.fromTo(airingSynopisAnim.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 2.5 })

            gsap.fromTo(airingBackgroundAnim.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 3 })
        }

        else if (guestSearchIndex[0] !== '') {
            gsap.fromTo(searchNavImgAnim.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.25 })

            gsap.fromTo([searchNavSearchAnim.current, searchNavSearchImgAnim.current], { y: -200 }, { y: 0, duration: 0.75, delay: 0.75 })

            gsap.fromTo([searchTitleAnim.current, searchMovieImgAnim.current], { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1.5 })

            gsap.fromTo([searchScoreItAnim.current, searchScoreAnim.current, searchGenreAnim.current], { opacity: 0, y:50 }, { opacity: 1, y: 0, duration: 1, delay: 2.25 })

            gsap.fromTo(searchSynopisAnim.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 2.5 })

            gsap.fromTo(searchBackgroundAnim.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 3 })
        }

        else if (guestSearchTvIndex[0] !== '') {
            gsap.fromTo(searchTvNavImgAnim.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.25 })

            gsap.fromTo([searchTvNavSearchAnim.current, searchTvNavSearchImgAnim.current], { y: -200 }, { y: 0, duration: 0.75, delay: 0.75 })

            gsap.fromTo([searchTvTitleAnim.current, searchTvMovieImgAnim.current], { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1.5 })

            gsap.fromTo([searchTvScoreItAnim.current, searchTvScoreAnim.current, searchTvGenreAnim.current], { opacity: 0, y:50 }, { opacity: 1, y: 0, duration: 1, delay: 2.25 })

            gsap.fromTo(searchTvSynopisAnim.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 2.5 })

            gsap.fromTo(searchTvBackgroundAnim.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 3 })
        }
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
            guestSearchPage()
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
        return <Redirect to="/guestsearchpage" />
    }

    if (guestSearchIndex[0] === '' && airingTodayIndex[0] === '' && 
        popIndex[0] === '' && topRatedIndex[0] === '' && nowPlayingIndex[0] === '' && 
        popTvIndex[0] === '' && guestSearchTvIndex[0] === '') {
        return <Redirect to="/" />
    }  
    //conditionals 


    return (
        <div className="about-movie-page">

            {
                popIndex[0] !== '' && 
                topRatedIndex[0] === '' &&
                nowPlayingIndex[0] === ''  && 
                popTvIndex[0] === '' && 
                airingTodayIndex[0] === '' && 
                guestSearchIndex[0] === '' && 
                guestSearchTvIndex[0] === '' ? 

                    <div className="about-movie-top-container" >

                        <nav>
                            <div className="img-movie-container" ref={popNavImgAnim} >
                                <Link to="/">
                                    <img onClick={guestPage} src="https://www.nicepng.com/png/full/670-6708259_action-icon-png.png" alt="" />
                                </Link>
                            </div>

                            <div className="login-signup">
                                <form className="search-button" onSubmit={handleSubmitSearch} onChange={handleOnChangeSearch}>
                                    <input type="text" placeholder="Search" ref={popNavSearchAnim} />
                                    <button className="search-icon-container" ref={popNavSearchImgAnim}>
                                        <img className="dis-img" alt="" src="https://rubiojason.github.io/Around-The-World/static/media/SearchIcon.e1a3c478.svg" />
                                    </button>
                                </form>
                            </div>

                            <div className="nav-overlay"></div>
                        </nav>


                        <div className="about-movie-overlay" style={{background: `url(${IMG_URL}original${mostpopbackpic[popIndex[0]]})`, 
                            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} ref={popBackgroundAnim}></div>

                        <div className="about-movie-title-container" ref={popTitleAnim}>
                            {mostpoptitle[popIndex[0]]}
                        </div>

                        <div className="about-movie-img-container">

                            <div className="about-movie-img-inside" >
                                <img alt="" src={IMG_URL + IMG_SIZE + mostpopfrontpic[popIndex[0]]} ref={popMovieImgAnim} />
                            </div>

                            <div className="right-content">

                                <div className="top-content-in-right">

                                    <div className="score-it-container" ref={popScoreItAnim}>
                                        <div className="side-title">Score it</div>
                                        {/*<input placeholder="1/10"  list="data"/>*/}
                                            <select id="data" >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                            
                                    </div>

                                    <div className="score-container" ref={popScoreAnim}>
                                        <div className="side-title">Score</div>
                                        <div className="actual-score" 
                                        style={{ color: rateColor }}>
                                            {mostpoprate[popIndex[0]]} / 10
                                        </div>
                                    </div>
                                    
                                    <div className="genre-container" ref={popGenreAnim}>
                                        <div className="side-title">Genre</div>
                                        <div className="genre-box-container">
                                            {
                                                mostpopgenre[popIndex[0]].map( p => 
                                                <div className="genre-box-about" key={p}>{p}</div>)
                                            }
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bottom-content-in-right">
                                    <div className="overview-text"></div>
                                </div>
                                
                            </div>

                        </div>

                        <div className="overview-container-two">
                            <div className="overview-text-two" ref={popSynopisAnim}>
                                {mostpopoverview[popIndex[0]]}
                                {/*<p className="read-more" onClick={handleAboutMovieClick}>Read More</p>*/}
                            </div>   
                        </div>
        
                    </div>

                : 

                topRatedIndex[0] !== '' &&
                popIndex[0] === '' && 
                nowPlayingIndex[0] === '' &&
                popTvIndex[0] === '' && 
                airingTodayIndex[0] === '' && 
                guestSearchIndex[0] === '' && 
                guestSearchTvIndex[0] === '' ? 


                    <div className="about-movie-top-container" >

                        <nav>
                            <div className="img-movie-container" ref={ratedNavImgAnim}>
                                <Link to="/">
                                    <img onClick={guestPage} src="https://www.nicepng.com/png/full/670-6708259_action-icon-png.png" alt="" />
                                </Link>
                                
                            </div>

                            <div className="login-signup">
                                <form className="search-button" onSubmit={handleSubmitSearch} onChange={handleOnChangeSearch}>
                                    <input type="text" placeholder="Search" ref={ratedNavSearchAnim} />
                                    <button className="search-icon-container" type="submit" ref={ratedNavSearchImgAnim} >
                                        <img className="dis-img" alt="" src="https://rubiojason.github.io/Around-The-World/static/media/SearchIcon.e1a3c478.svg" />
                                    </button>
                                </form>
                            </div>

                            <div className="nav-overlay"></div>
                        </nav>


                        <div className="about-movie-overlay" style={{background: `url(${IMG_URL}original${topratedbackpic[topRatedIndex[0]]})`, 
                            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} ref={ratedBackgroundAnim}></div>

                        <div className="about-movie-title-container" ref={ratedTitleAnim}>
                            {topratedtitle[topRatedIndex[0]]}
                        </div>

                        <div className="about-movie-img-container">

                            <div className="about-movie-img-inside" >
                                <img alt="" src={IMG_URL + IMG_SIZE + topratedfrontpic[topRatedIndex[0]]} ref={ratedMovieImgAnim} />
                            </div>

                            <div className="right-content">

                                <div className="top-content-in-right">

                                    <div className="score-it-container" ref={ratedScoreItAnim} >
                                        <div className="side-title">Score it</div>
                                        {/*<input placeholder="1/10" type="" list="data" onClick={handleRateClick} />*/}
                                            <select id="data" >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                                
                                    </div>

                                    <div className="score-container" ref={ratedScoreAnim} >
                                        <div className="side-title">Score</div>
                                        <div className="actual-score" 
                                        style={{ color: rateColor }}>
                                            {topratedrate[topRatedIndex[0]]} / 10
                                        </div>
                                    </div>
                                
                                    <div className="genre-container" ref={ratedGenreAnim} >
                                        <div className="side-title">Genre</div>
                                        <div className="genre-box-container">
                                            {
                                                topratedgenre[topRatedIndex[0]].map( p => 
                                                <div className="genre-box-about" key={p}>{p}</div>)
                                            }
                                        </div>
                                    </div>
                                </div>
                                    
                                <div className="bottom-content-in-right">
                                    <div className="overview-text"></div>
                                </div>
                                
                            </div>

                        </div>

                        <div className="overview-container-two">
                            <div className="overview-text-two" ref={ratedSynopisAnim} >
                                {topratedoverview[topRatedIndex[0]]}
                                {/*<p className="read-more" onClick={handleAboutMovieClick}>Read More</p>*/}
                            </div>   
                        </div>
            
                    </div>

                : 

                nowPlayingIndex[0] !== '' &&
                popIndex[0] === '' && 
                topRatedIndex[0] === '' && 
                popTvIndex[0] === '' && 
                airingTodayIndex[0] === '' &&
                guestSearchIndex[0] === '' && 
                guestSearchTvIndex[0] === '' ? 

                <div className="about-movie-top-container" >

                    <nav>
                        <div className="img-movie-container" ref={playingNavImgAnim} >
                            <Link to="/">
                                <img onClick={guestPage} src="https://www.nicepng.com/png/full/670-6708259_action-icon-png.png" alt="" />
                            </Link>
                            
                        </div>

                        <div className="login-signup">
                            <form className="search-button" onSubmit={handleSubmitSearch} onChange={handleOnChangeSearch} >
                                <input type="text" placeholder="Search" ref={playingNavSearchAnim} />
                                <button className="search-icon-container" type="submit" ref={playingNavSearchImgAnim} >
                                   <img className="dis-img" alt="" src="https://rubiojason.github.io/Around-The-World/static/media/SearchIcon.e1a3c478.svg" /> 
                                </button>
                            </form>
                        </div>

                        <div className="nav-overlay"></div>
                    </nav>


                    <div className="about-movie-overlay" style={{background: `url(${IMG_URL}original${nowplaybackpic[nowPlayingIndex[0]]})`, 
                        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} ref={playingBackgroundAnim} ></div>

                    <div className="about-movie-title-container" ref={playingTitleAnim} >
                        {nowplaytitle[nowPlayingIndex[0]]}
                    </div>

                    <div className="about-movie-img-container">

                        <div className="about-movie-img-inside" >
                            <img alt="" src={IMG_URL + IMG_SIZE + nowplayfrontpic[nowPlayingIndex[0]]} ref={playingMovieImgAnim} />
                        </div>

                        <div className="right-content">

                            <div className="top-content-in-right">

                                <div className="score-it-container" ref={playingScoreItAnim} >
                                    <div className="side-title">Score it</div>
                                        {/*<input placeholder="1/10" type="" list="data" onClick={handleRateClick} />*/}
                                            <select id="data" >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                                                
                                </div>

                                <div className="score-container" ref={playingScoreAnim} >
                                    <div className="side-title">Score</div>
                                    <div className="actual-score" 
                                        style={{ color: rateColor }}>
                                            {nowplayrate[nowPlayingIndex[0]]} / 10
                                    </div>
                                </div>
                                                
                                <div className="genre-container" ref={playingGenreAnim} >
                                    <div className="side-title">Genre</div>
                                    <div className="genre-box-container">
                                        {
                                            nowplaygenre[nowPlayingIndex[0]].map( p => 
                                            <div className="genre-box-about" key={p}>{p}</div>)
                                        }
                                    </div>

                                </div>
                            </div>
                                                    
                            <div className="bottom-content-in-right">
                                <div className="overview-text"></div>
                            </div>
                                                
                        </div>

                    </div>

                    <div className="overview-container-two">
                        <div className="overview-text-two" ref={playingSynopisAnim} >
                            {nowplayoverview[nowPlayingIndex[0]]}
                            {/*<p className="read-more" onClick={handleAboutMovieClick}>Read More</p>*/}
                        </div>   
                    </div>

                </div>

                : 

                popTvIndex[0] !== '' &&
                popIndex[0] === '' && 
                topRatedIndex[0] === '' && 
                nowPlayingIndex[0] === '' && 
                airingTodayIndex[0] === '' && 
                guestSearchIndex[0] === '' &&
                guestSearchTvIndex[0] === '' ? 

                <div className="about-movie-top-container" >

                    <nav>
                        <div className="img-movie-container" ref={popTvNavImgAnim} >
                            <Link to="/">
                                <img onClick={guestPage} src="https://www.nicepng.com/png/full/670-6708259_action-icon-png.png" alt="" />
                            </Link>
                            
                        </div>

                        <div className="login-signup">
                            <form className="search-button" onSubmit={handleSubmitSearch} onChange={handleOnChangeSearch}>
                                <input type="text" placeholder="Search" ref={popTvNavSearchAnim} />
                                <button className="search-icon-container" type="submit" ref={popTvNavSearchImgAnim} >
                                    <img className="dis-img" alt="" src="https://rubiojason.github.io/Around-The-World/static/media/SearchIcon.e1a3c478.svg" />
                                </button>
                            </form>
                        </div>

                        <div className="nav-overlay"></div>
                    </nav>


                    <div className="about-movie-overlay" style={{background: `url(${IMG_URL}original${mostpoptvbackpic[popTvIndex[0]]})`, 
                        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} ref={popTvBackgroundAnim} ></div>

                    <div className="about-movie-title-container" ref={popTvTitleAnim} >
                        {mostpoptvtitle[popTvIndex[0]]}
                    </div>

                    <div className="about-movie-img-container">

                        <div className="about-movie-img-inside" >
                            <img alt="" src={IMG_URL + IMG_SIZE + mostpoptvfrontpic[popTvIndex[0]]} ref={popTvMovieImgAnim} />
                        </div>

                        <div className="right-content">

                            <div className="top-content-in-right">

                                <div className="score-it-container" ref={popTvScoreItAnim} >
                                    <div className="side-title">Score it</div>
                                        {/*<input placeholder="1/10" type="" list="data" onClick={handleRateClick} />*/}
                                            <select id="data" >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>                        
                                </div>

                                <div className="score-container" ref={popTvScoreAnim} >
                                    <div className="side-title">Score</div>
                                    <div className="actual-score" 
                                        style={{ color: rateColor }}>
                                            {mostpoptvrate[popTvIndex[0]]} / 10
                                    </div>
                                </div>
                                                
                                <div className="genre-container" ref={popTvGenreAnim} >
                                    <div className="side-title">Genre</div>
                                    <div className="genre-box-container">
                                        {
                                            nowplaygenre[popTvIndex[0]].map( p => 
                                            <div className="genre-box-about" key={p}>{p}</div>)
                                        }
                                    </div>

                                </div>
                            </div>
                                                    
                            <div className="bottom-content-in-right">
                                <div className="overview-text"></div>
                            </div>
                                                
                        </div>

                    </div>

                    <div className="overview-container-two">
                        <div className="overview-text-two" ref={popTvSynopisAnim} >
                            {mostpoptvoverview[popTvIndex[0]]}
                            {/*<p className="read-more" onClick={handleAboutMovieClick}>Read More</p>*/}
                        </div>   
                    </div>

                </div>

                : 

                airingTodayIndex[0] !== '' &&
                popIndex[0] === '' && 
                topRatedIndex[0] === '' && 
                nowPlayingIndex[0] === '' && 
                popTvIndex[0] === '' && 
                guestSearchIndex[0] === '' && 
                guestSearchTvIndex[0] === '' ? 

                <div className="about-movie-top-container" >

                    <nav>
                        <div className="img-movie-container" ref={airingNavImgAnim} >
                            <Link to="/">
                               <img onClick={guestPage} src="https://www.nicepng.com/png/full/670-6708259_action-icon-png.png" alt="" /> 
                            </Link>
                        </div>

                        <div className="login-signup">
                            <form className="search-button" onSubmit={handleSubmitSearch} onChange={handleOnChangeSearch} >
                                <input type="text" placeholder="Search" ref={airingNavSearchAnim} />
                                <button className="search-icon-container" type="submit" ref={airingNavSearchImgAnim} >
                                    <img className="dis-img" alt="" src="https://rubiojason.github.io/Around-The-World/static/media/SearchIcon.e1a3c478.svg" />
                                </button>
                            </form>
                        </div>

                        <div className="nav-overlay"></div>
                    </nav>


                    <div className="about-movie-overlay" style={{background: `url(${IMG_URL}original${airingtodaybackpic[airingTodayIndex[0]]})`, 
                        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} ref={airingBackgroundAnim} ></div>

                    <div className="about-movie-title-container" ref={airingTitleAnim} >
                        {airingtodaytitle[airingTodayIndex[0]]}
                    </div>

                    <div className="about-movie-img-container">

                        <div className="about-movie-img-inside" >
                            <img alt="" src={IMG_URL + IMG_SIZE + airingtodayfrontpic[airingTodayIndex[0]]} ref={airingMovieImgAnim} />
                        </div>

                        <div className="right-content">

                            <div className="top-content-in-right">

                                <div className="score-it-container" ref={airingScoreItAnim} >
                                    <div className="side-title">Score it</div>
                                        {/*<input placeholder="1/10" type="" list="data" onClick={handleRateClick} />*/}
                                            <select id="data" >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                                                
                                </div>

                                <div className="score-container" ref={airingScoreAnim} >
                                    <div className="side-title">Score</div>
                                    <div className="actual-score" 
                                        style={{ color: rateColor }}>
                                            {airingtodayrate[airingTodayIndex[0]]} / 10
                                    </div>
                                </div>
                                                
                                <div className="genre-container" ref={airingGenreAnim} >
                                    <div className="side-title">Genre</div>
                                    <div className="genre-box-container">
                                        {
                                            airingtodaygenre[airingTodayIndex[0]].map( p => 
                                            <div className="genre-box-about" key={p}>{p}</div>)
                                        }
                                    </div>

                                </div>
                            </div>
                                                    
                            <div className="bottom-content-in-right">
                                <div className="overview-text"></div>
                            </div>
                                                
                        </div>

                    </div>

                    <div className="overview-container-two">
                        <div className="overview-text-two" ref={airingSynopisAnim} >
                            {airingtodayoverview[airingTodayIndex[0]]}
                            {/*<p className="read-more" onClick={handleAboutMovieClick}>Read More</p>*/}
                        </div>   
                    </div>

                </div>

                : 

                guestSearchIndex[0] !== '' && 
                airingTodayIndex[0] === '' && 
                popIndex[0] === '' && 
                topRatedIndex[0] === '' && 
                nowPlayingIndex[0] === '' && 
                popTvIndex[0] === '' && 
                guestSearchTvIndex[0] === '' ? 

                <div className="about-movie-top-container" >

                    <nav>
                        <div className="img-movie-container" ref={searchNavImgAnim} >
                            <Link to="/">
                                <img onClick={guestPage} src="https://www.nicepng.com/png/full/670-6708259_action-icon-png.png" alt="" /> 
                            </Link>
                        </div>

                        <div className="login-signup">
                            <form className="search-button" onSubmit={handleSubmitSearch} onChange={handleOnChangeSearch} >
                                <input type="text" placeholder="Search" ref={searchNavSearchAnim} />
                                <button className="search-icon-container" type="submit" ref={searchNavSearchImgAnim} >
                                    <img className="dis-img" alt="" src="https://rubiojason.github.io/Around-The-World/static/media/SearchIcon.e1a3c478.svg" />
                                </button>
                            </form>
                        </div>

                        <div className="nav-overlay"></div>
                    </nav>


                    <div className="about-movie-overlay" style={{background: `url(${IMG_URL}original${guestsearchbackpic[guestSearchIndex[0]]})`, 
                        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} ref={searchBackgroundAnim} ></div>

                    <div className="about-movie-title-container" ref={searchTitleAnim} >
                        {guestsearchtitle[guestSearchIndex[0]]}
                    </div>

                    <div className="about-movie-img-container">

                        <div className="about-movie-img-inside" >
                            <img alt="" src={IMG_URL + IMG_SIZE + guestsearchfrontpic[guestSearchIndex[0]]} ref={searchMovieImgAnim} />
                        </div>

                        <div className="right-content">

                            <div className="top-content-in-right">

                                <div className="score-it-container" ref={searchScoreItAnim} >
                                    <div className="side-title">Score it</div>
                                        {/*<input placeholder="1/10" type="" list="data" onClick={handleRateClick} />*/}
                                            <select id="data" >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                                                
                                </div>

                                <div className="score-container" ref={searchScoreAnim} >
                                    <div className="side-title">Score</div>
                                    <div className="actual-score" 
                                        style={{ color: rateColor }}>
                                            {guestsearchrate[guestSearchIndex[0]]} / 10
                                    </div>
                                </div>
                                                
                                <div className="genre-container" ref={searchGenreAnim} >
                                    <div className="side-title">Genre</div>
                                    <div className="genre-box-container">
                                        {
                                            guestsearchgenre[guestSearchIndex[0]].map( p => 
                                            <div className="genre-box-about" key={p}>{p}</div>)
                                        }
                                    </div>

                                </div>
                            </div>
                                                    
                            <div className="bottom-content-in-right">
                                <div className="overview-text"></div>
                            </div>
                                                
                        </div>

                    </div>

                    <div className="overview-container-two">
                        <div className="overview-text-two" ref={searchSynopisAnim} >
                            {guestsearchoverview[guestSearchIndex[0]]}
                            {/*<p className="read-more" onClick={handleAboutMovieClick}>Read More</p>*/}
                        </div>   
                    </div>

                </div>

                : 

                guestSearchTvIndex[0] !== '' &&
                guestSearchIndex[0] === '' && 
                airingTodayIndex[0] === '' && 
                popIndex[0] === '' && 
                topRatedIndex[0] === '' && 
                nowPlayingIndex[0] === '' && 
                popTvIndex[0] === '' ? 
                
                    <div className="about-movie-top-container" >

                        <nav>
                            <div className="img-movie-container" ref={searchTvNavImgAnim} >
                                <Link to="/">
                                    <img onClick={guestPage} src="https://www.nicepng.com/png/full/670-6708259_action-icon-png.png" alt="" />
                                </Link>
                            </div>

                            <div className="login-signup">
                                <form className="search-button" onSubmit={handleSubmitSearch} onChange={handleOnChangeSearch} >
                                    <input type="text" placeholder="Search" ref={searchTvNavSearchAnim} />
                                    <button className="search-icon-container" type="submit" ref={searchTvNavSearchImgAnim} >
                                        <img className="dis-img" alt="" src="https://rubiojason.github.io/Around-The-World/static/media/SearchIcon.e1a3c478.svg" />
                                    </button>
                                </form>
                            </div>

                            <div className="nav-overlay"></div>
                        </nav>


                        <div className="about-movie-overlay" style={{background: `url(${IMG_URL}original${guestsearchtvbackpic[guestSearchTvIndex[0]]})`, 
                            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} ref={searchTvBackgroundAnim} ></div>

                        <div className="about-movie-title-container" ref={searchTvTitleAnim} >
                            {guestsearchtvtitle[guestSearchTvIndex[0]]}
                        </div>

                        <div className="about-movie-img-container">

                            <div className="about-movie-img-inside" >
                                <img alt="" src={IMG_URL + IMG_SIZE + guestsearchtvfrontpic[guestSearchTvIndex[0]]} ref={searchTvMovieImgAnim} />
                            </div>

                            <div className="right-content">

                                <div className="top-content-in-right">

                                    <div className="score-it-container" ref={searchTvScoreItAnim} >
                                        <div className="side-title">Score it</div>
                                            {/*<input placeholder="1/10" type="" list="data" onClick={handleRateClick} />*/}
                                                <select id="data" >
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                </select>
                                                                    
                                    </div>

                                    <div className="score-container" ref={searchTvScoreAnim} >
                                        <div className="side-title">Score</div>
                                        <div className="actual-score" 
                                            style={{ color: rateColor }}>
                                                {guestsearchtvrate[guestSearchTvIndex[0]]} / 10
                                        </div>
                                    </div>
                                                    
                                    <div className="genre-container" ref={searchTvGenreAnim} >
                                        <div className="side-title">Genre</div>
                                        <div className="genre-box-container">
                                            {
                                                guestsearchtvgenre[guestSearchTvIndex[0]].map( p => 
                                                <div className="genre-box-about" key={p}>{p}</div>)
                                            }
                                        </div>

                                    </div>
                                </div>
                                                        
                                <div className="bottom-content-in-right">
                                    <div className="overview-text"></div>
                                </div>
                                                    
                            </div>

                        </div>

                        <div className="overview-container-two">
                            <div className="overview-text-two" ref={searchTvSynopisAnim} >
                                {guestsearchtvoverview[guestSearchTvIndex[0]]}
                                {/*<p className="read-more" onClick={handleAboutMovieClick}>Read More</p>*/}
                            </div>   
                        </div>

                        </div>

                :

                <div>your done</div>
                                                        
            }

        </div>
    )
}

const mapStateToProps = state => {
    return { 
        imgpic: state.guesttitlemovie.imgpic, 
        pagestate: state.page.pagestate,

        mostpopfailure: state.mostpop.mostpopfailure,
        mostpoploading: state.mostpop.mostpoploading,  

        mostpopfrontpic: state.mostpop.mostpopfrontpic,
        mostpopbackpic: state.mostpop.mostpopbackpic, 
        mostpoptitle: state.mostpop.mostpoptitle, 
        mostpoprate: state.mostpop.mostpoprate,
        mostpopgenre: state.mostpop.mostpopgenre,
        mostpopoverview: state.mostpop.mostpopoverview, 
        mostpopindex: state.mostpop.mostpopindex, 

        topratedfailure: state.toprated.topratedfailure,
        topratedloading: state.toprated.topratedloading,  

        topratedfrontpic: state.toprated.topratedfrontpic,
        topratedbackpic: state.toprated.topratedbackpic, 
        topratedtitle: state.toprated.topratedtitle, 
        topratedrate: state.toprated.topratedrate,
        topratedgenre: state.toprated.topratedgenre,
        topratedoverview: state.toprated.topratedoverview, 
        topratedindex: state.toprated.topratedindex, 

        nowplayfailure: state.nowplay.nowplayfailure,
        nowplayloading: state.nowplay.nowplayloading,  

        nowplayfrontpic: state.nowplay.nowplayfrontpic,
        nowplaybackpic: state.nowplay.nowplaybackpic, 
        nowplaytitle: state.nowplay.nowplaytitle, 
        nowplayrate: state.nowplay.nowplayrate,
        nowplaygenre: state.nowplay.nowplaygenre,
        nowplayoverview: state.nowplay.nowplayoverview, 
        nowplayindex: state.nowplay.nowplayindex, 

        mostpoptvfailure: state.mostpoptv.mostpoptvfailure,
        mostpoptvloading: state.mostpoptv.mostpoptvloading,  

        mostpoptvfrontpic: state.mostpoptv.mostpoptvfrontpic,
        mostpoptvbackpic: state.mostpoptv.mostpoptvbackpic, 
        mostpoptvtitle: state.mostpoptv.mostpoptvtitle, 
        mostpoptvrate: state.mostpoptv.mostpoptvrate,
        mostpoptvgenre: state.mostpoptv.mostpoptvgenre,
        mostpoptvoverview: state.mostpoptv.mostpoptvoverview, 
        mostpoptvindex: state.mostpoptv.mostpoptvindex, 

        airingtodayfailure: state.airingtoday.airingtodayfailure,
        airingtodayloading: state.airingtoday.airingtodayloading,  

        airingtodayfrontpic: state.airingtoday.airingtodayfrontpic,
        airingtodaybackpic: state.airingtoday.airingtodaybackpic, 
        airingtodaytitle: state.airingtoday.airingtodaytitle, 
        airingtodayrate: state.airingtoday.airingtodayrate,
        airingtodaygenre: state.airingtoday.airingtodaygenre,
        airingtodayoverview: state.airingtoday.airingtodayoverview, 
        airingtodayindex: state.airingtoday.airingtodayindex, 

        guestsearchfailure: state.guestsearch.guestsearchfailure,
        guestsearchloading: state.guestsearch.guestsearchloading,  

        guestsearchfrontpic: state.guestsearch.guestsearchfrontpic,
        guestsearchbackpic: state.guestsearch.guestsearchbackpic, 
        guestsearchtitle: state.guestsearch.guestsearchtitle, 
        guestsearchrate: state.guestsearch.guestsearchrate,
        guestsearchgenre: state.guestsearch.guestsearchgenre,
        guestsearchoverview: state.guestsearch.guestsearchoverview, 
        guestsearchindex: state.guestsearch.guestsearchindex, 

        guestsearchtvfailure: state.guestsearchtv.guestsearchtvfailure,
        guestsearchtvloading: state.guestsearchtv.guestsearchtvloading,  

        guestsearchtvfrontpic: state.guestsearchtv.guestsearchtvfrontpic,
        guestsearchtvbackpic: state.guestsearchtv.guestsearchtvbackpic, 
        guestsearchtvtitle: state.guestsearchtv.guestsearchtvtitle, 
        guestsearchtvrate: state.guestsearchtv.guestsearchtvrate,
        guestsearchtvgenre: state.guestsearchtv.guestsearchtvgenre,
        guestsearchtvoverview: state.guestsearchtv.guestsearchtvoverview, 
        guestsearchtvindex: state.guestsearchtv.guestsearchtvindex, 
    }
}

const mapDispatchToProps = dispatch => {
  return {
    loginPage: () => dispatch(loginPage()), 
    signupPage: () => dispatch(signupPage()), 
    guestPage: () => dispatch(guestPage()), 
    guestSearchPage: () => dispatch(guestSearchPage()),
    guestAccountPage: () => dispatch(guestAccountPage()),  
    fetchMovieChangeSearchData: (i) => dispatch(fetchMovieChangeSearchData(i)), 
    fetchMovieChangeSearchTvData: (i) => dispatch(fetchMovieChangeSearchTvData(i)), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestAboutMoviePage)
