import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { changeMovieSearchIndex, guestAboutMoviePage, changeMovieSearchResetIndex, 
         loginPage, signupPage, guestPage, fetchMovieChangeSearchData,  
         changeMovieSearchTvIndex, changeMovieSearchTvResetIndex, 
         fetchMovieChangeSearchTvData, guestSearchPage, mostPopularResetIndex,
         topRatedResetIndex, nowPlayingResetIndex, mostPopularTvResetIndex, 
         airingTodayResetIndex } from '../redux'

gsap.registerPlugin(ScrollTrigger)


function GuestSearchPage({ changeMovieSearchIndex, guestAboutMoviePage, changeMovieSearchResetIndex, 
                           loginPage, signupPage, guestPage, guestsearchfrontpic, guestsearchbackpic, 
                           guestsearchtitle, guestsearchrate, guestsearchgenre, 
                           guestsearchtvfrontpic, guestsearchtvbackpic, guestsearchtvtitle, 
                           guestsearchtvrate, guestsearchtvgenre, fetchMovieChangeSearchData, 
                           fetchMovieChangeSearchTvData, changeMovieSearchTvIndex, changeMovieSearchTvResetIndex, 
                            guestSearchPage, mostPopularResetIndex, 
                           topRatedResetIndex, nowPlayingResetIndex, mostPopularTvResetIndex, 
                           airingTodayResetIndex }) 
    {

    document.body.style.background = "unset"
    document.body.style.backgroundColor = "rgb(15, 15, 15)"

    const movieFrontPic = Array.from(guestsearchfrontpic)
    const movieTitle = Array.from(guestsearchtitle)

    const tvFrontPic = Array.from(guestsearchtvfrontpic)
    const tvTitle = Array.from(guestsearchtvtitle)

    const IMG_URL = 'http://image.tmdb.org/t/p/'
    const IMG_SIZE = 'w200'

    //useState 
    const [search, setSearch] = useState('')
    const [redirectState, setRedirectState] = useState(false)
    //useState 

    //useRef 
    const movieTitleAnim = useRef(null)

    const tvTitleAnim = useRef(null)
    //useRef 

    //functions 
    const putUpOpacity = () => {
        setOpacity('1')
    }

    const putDownOpacity = () => {
        setOpacity('0')
    }

    const handleSubmitSearch = e => {
        e.preventDefault()
        if (!search || !search.trim()) {
            return 
        }
        else {
            fetchMovieChangeSearchData(search)
            fetchMovieChangeSearchTvData(search)
            //guestSearchPage()
            setRedirectState(true)
        }
    }

    const handleOnChangeSearch = e => {
        e.preventDefault()

        setSearch(e.target.value)
    }

    const [opacity, setOpacity] = useState('0')

    const handleMovieImgClick = e => {
        setOpacity('0')
        mostPopularResetIndex()
        topRatedResetIndex()
        nowPlayingResetIndex()
        mostPopularTvResetIndex()
        airingTodayResetIndex()
        changeMovieSearchResetIndex()
        changeMovieSearchTvResetIndex()
        changeMovieSearchIndex(movieFrontPic.indexOf(e) + ' moviesearch')
        guestAboutMoviePage()
    }

    const handleTvImgClick = e => {
        setOpacity('0')
        mostPopularResetIndex()
        topRatedResetIndex()
        nowPlayingResetIndex()
        mostPopularTvResetIndex()
        airingTodayResetIndex()
        changeMovieSearchResetIndex()
        changeMovieSearchTvResetIndex()
        changeMovieSearchTvIndex(tvFrontPic.indexOf(e) + ' tvsearch')
        guestAboutMoviePage()
    }
    //functions 

    //useEffect 
    useEffect(() => {
        gsap.fromTo(movieTitleAnim.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 0.1, 
            scrollTrigger: 
                {
                    trigger: movieTitleAnim.current, 
                    id: 'movie-title', 
                    start: 'top 80%', 
                    markers: false 
                } 
            })

        gsap.fromTo(tvTitleAnim.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 0.1, 
            scrollTrigger: 
                {
                    trigger: tvTitleAnim.current, 
                    id: 'tv-title', 
                    start: 'top 80%', 
                    markers: false  
                } 
            })
    }, [])
    //useEffect 


    return (
        <div className="search-page-container">

                <nav>
                    <div className="img-movie-container">
                        <Link to="/">
                            <img className="this-aint-working" onClick={guestPage} src="https://www.nicepng.com/png/full/670-6708259_action-icon-png.png" alt="" />
                        </Link>
                    </div>

                    <div className="login-signup">
                        <form className="search-button" onSubmit={handleSubmitSearch} onChange={handleOnChangeSearch} >
                            <input type="text" placeholder="Search" />
                            <button className="search-icon-container" type="submit">
                                <img className="dis-img" alt="" src="https://rubiojason.github.io/Around-The-World/static/media/SearchIcon.e1a3c478.svg"/>
                            </button>
                        </form>
                    </div>

                    <div className="nav-overlay"></div>
                </nav>

                <div className="movies-search-title" ref={movieTitleAnim} id="movie-title">Movies</div>

                <div className="few">
                    <div className="row">
                        {
                            movieFrontPic.map(pic => 

                                    movieFrontPic.length === 0 ? <div>No Results Found</div> : 

                                    pic === null ? <div style={{display: 'none'}}></div> : 
                                
                                    <div className="row__inner">
                                        <Link to="/guestaboutmovie">
                                            <div className="tile" onMouseLeave={putDownOpacity} onClick={() => handleMovieImgClick(pic)} >
                                                <div className="tile__media">
                                                    <img key={pic} alt="" src={IMG_URL + IMG_SIZE + pic} />
                                                </div>
                                                <div className="tile__details">
                                                    <div className="tile-details-overlay">
                                                        {/*<div className="tile__options">
                                                            <img onMouseOver={putUpOpacity} alt="" src="https://freight.cargo.site/t/original/i/3a220666904fe9d4aabaa1a088a202b1b23f8f5cb38b75b7c23bbc3e1a287aff/Menu-White-Dots.png" />
                                                        </div>
                                                        <div className="pop-up-options" style={{opacity: opacity}}>
                                                            <Link to="/guestaboutmovie">
                                                                <div className="inside-pop-up" onClick={() => handleMovieImgClick(pic)}>
                                                                    Description
                                                                </div>
                                                            </Link>
                                                        </div>*/}
                                                        <div className="tile__title" key={pic}>
                                                            {movieTitle[movieFrontPic.indexOf(pic)]}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    

                                </div>
                                )
                        }
                    </div>
                </div>

                <div className="movies-search-title" ref={tvTitleAnim} id="tv-title">TV Shows</div>

                <div className="few">
                    <div className="row">
                        {
                            tvFrontPic.map(pic => 

                                    pic === null ? <div style={{display: 'none'}}></div> : 
                                
                                    <div className="row__inner">
                                        <Link to="/guestaboutmovie">
                                            <div className="tile" onMouseLeave={putDownOpacity} onClick={() => handleTvImgClick(pic)}>
                                                <div className="tile__media">
                                                    <img alt="" src={IMG_URL + IMG_SIZE + pic} />
                                                </div>
                                                <div className="tile__details">
                                                    <div className="tile-details-overlay">
                                                        {/*<div className="tile__options">
                                                            <img onMouseOver={putUpOpacity} alt="" src="https://freight.cargo.site/t/original/i/3a220666904fe9d4aabaa1a088a202b1b23f8f5cb38b75b7c23bbc3e1a287aff/Menu-White-Dots.png" />
                                                        </div>
                                                        <div className="pop-up-options" style={{opacity: opacity}}>
                                                            <Link to="/guestaboutmovie">
                                                               <div className="inside-pop-up" onClick={() => handleTvImgClick(pic)}>
                                                                    Description
                                                                </div> 
                                                            </Link>
                                                        </div>*/}
                                                        <div className="tile__title">
                                                            {tvTitle[tvFrontPic.indexOf(pic)]}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                </div>
                                
                                )
                            }
                        
                    </div>
                </div>

                <div style={{margin: '30px 0px'}}></div>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        imgpic: state.guesttitlemovie.imgpic, 
        pagestate: state.page.pagestate,

        guestsearchfailure: state.guestsearch.guestsearchfailure,
        guestsearchloading: state.guestsearch.guestsearchloading,  

        guestsearchfrontpic: state.guestsearch.guestsearchfrontpic,
        guestsearchbackpic: state.guestsearch.guestsearchbackpic, 
        guestsearchtitle: state.guestsearch.guestsearchtitle, 
        guestsearchrate: state.guestsearch.guestsearchrate,
        guestsearchgenre: state.guestsearch.guestsearchgenre,

        guestsearchtvfailure: state.guestsearchtv.guestsearchtvfailure,
        guestsearchtvloading: state.guestsearchtv.guestsearchtvloading,  

        guestsearchtvfrontpic: state.guestsearchtv.guestsearchtvfrontpic,
        guestsearchtvbackpic: state.guestsearchtv.guestsearchtvbackpic, 
        guestsearchtvtitle: state.guestsearchtv.guestsearchtvtitle, 
        guestsearchtvrate: state.guestsearchtv.guestsearchtvrate,
        guestsearchtvgenre: state.guestsearchtv.guestsearchtvgenre,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeMovieSearchIndex: (idx) => dispatch(changeMovieSearchIndex(idx)), 
        changeMovieSearchTvIndex: (i) => dispatch(changeMovieSearchTvIndex(i)), 
        guestSearchPage: () => dispatch(guestSearchPage()), 
        guestAboutMoviePage: () => dispatch(guestAboutMoviePage()),  
        changeMovieSearchResetIndex: () => dispatch(changeMovieSearchResetIndex()), 
        changeMovieSearchTvResetIndex: () => dispatch(changeMovieSearchTvResetIndex()), 
        loginPage: () => dispatch(loginPage()), 
        signupPage: () => dispatch(signupPage()), 
        guestPage: () => dispatch(guestPage()), 
        mostPopularResetIndex: () => dispatch(mostPopularResetIndex()), 
        topRatedResetIndex: () => dispatch(topRatedResetIndex()), 
        nowPlayingResetIndex: () => dispatch(nowPlayingResetIndex()), 
        mostPopularTvResetIndex: () => dispatch(mostPopularTvResetIndex()), 
        airingTodayResetIndex: () => dispatch(airingTodayResetIndex()), 
        fetchMovieChangeSearchData: (i) => dispatch(fetchMovieChangeSearchData(i)), 
        fetchMovieChangeSearchTvData: (i) => dispatch(fetchMovieChangeSearchTvData(i)), 

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestSearchPage)
