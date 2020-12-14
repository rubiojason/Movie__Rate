import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { airingTodayIndex, guestAboutMoviePage, mostPopularResetIndex, airingTodayResetIndex, 
         topRatedResetIndex, nowPlayingResetIndex, mostPopularTvResetIndex, 
         changeMovieSearchResetIndex, changeMovieSearchTvResetIndex } from '../redux'

gsap.registerPlugin(ScrollTrigger)

function GuestMostPopularTv({ airingtodayfrontpic, airingtodaybackpic, airingtodaytitle, 
                           airingtodayrate, airingtodaygenre, airingTodayIndex, 
                           pagestate, guestAboutMoviePage, mostPopularResetIndex, 
                           topRatedResetIndex, nowPlayingResetIndex, mostPopularTvResetIndex, 
                           airingTodayResetIndex, changeMovieSearchResetIndex, changeMovieSearchTvResetIndex }) {

    const IMG_URL = 'http://image.tmdb.org/t/p/'
    const IMG_SIZE = 'w200'
    //sizes: w300, w780, w1280, original 

    const frontpic = Array.from(airingtodayfrontpic)
    const title = Array.from(airingtodaytitle)

    //useRef 
    const airingTitleAnim = useRef(null)
    const airingSeeAllAnim = useRef(null)
    //useRef 

    //functions 
    const handleMovieImgClick = e => {
        mostPopularResetIndex()
        topRatedResetIndex()
        nowPlayingResetIndex()
        mostPopularTvResetIndex()
        airingTodayResetIndex()
        changeMovieSearchResetIndex()
        changeMovieSearchTvResetIndex()
        airingTodayIndex(frontpic.indexOf(e) + ' airingtoday')
        guestAboutMoviePage()
    }

    const changeMovieDisplay = () => {
      if (displayState === '') {
        setDisplayState('grid')
        setGridTempState('repeat(auto-fit, minmax(250px, 1fr))')
        setSeeState('see less')
      }
      else {
        setDisplayState('')
        setGridTempState('')
        setSeeState('see all')
      }
    }
    //functions 

    //useState 
    const [displayState, setDisplayState] = useState('')
    const [gridTempState, setGridTempState] = useState('')
    const [seeState, setSeeState] = useState('see all')
    //useState 

    //useEffect 
    useEffect(() => {
      gsap.fromTo(airingTitleAnim.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 0.1, 
        scrollTrigger: 
        {
          id: 'airing-title', 
          trigger: airingTitleAnim.current, 
          start: 'top 80%', 
          //toggleActions: 'play none reverse none', 
          markers: false, 
        } 
      })

      gsap.fromTo(airingSeeAllAnim.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.1, 
        scrollTrigger: 
        {
          id: 'airing-see-all', 
          trigger: airingSeeAllAnim.current, 
          start: 'top 80%', 
          markers: false, 
        } 
      })
    })
    //useEffect
    

    return (
        <div>
            <div className="most-popular-container">

              <div className="title-see-all">
                  <div className="left-title" id="airing-title" ref={airingTitleAnim}>TV Shows Airing Today</div>
                  <div className="right-see-all" onClick={changeMovieDisplay}>
                    <div className="see-all" id="airing-see-all" ref={airingSeeAllAnim}>{seeState}</div>
                  </div>
              </div>

              <div className="contain">
                <div className="row" style={{display: displayState, gridTemplateColumns: gridTempState}}>
                  {
                    frontpic.map(pic => 
                      <div className="row__inner">
                        <Link to="/movie_project/guestaboutmovie/">
                          <div className="tile" onClick={() => handleMovieImgClick(pic)} >
                            <div className="tile__media" >
                              <img alt="" src={IMG_URL + IMG_SIZE + pic} />
                            </div>
                            <div className="tile__details">
                              <div className="tile-details-overlay">
                                <div className="tile__title">
                                {
                                  title[frontpic.indexOf(pic)]
                                }
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
            </div>
          </div>
            
    )
}


const mapStateToProps = state => {
    return { 
        imgpic: state.guesttitlemovie.imgpic, 
        pagestate: state.page.pagestate,

        airingtodayfailure: state.airingtoday.airingtodayfailure,
        airingtodayloading: state.airingtoday.airingtodayloading,  

        airingtodayfrontpic: state.airingtoday.airingtodayfrontpic,
        airingtodaybackpic: state.airingtoday.airingtodaybackpic, 
        airingtodaytitle: state.airingtoday.airingtodaytitle, 
        airingtodayrate: state.airingtoday.airingtodayrate,
        airingtodaygenre: state.airingtoday.airingtodaygenre,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    airingTodayIndex: (idx) => dispatch(airingTodayIndex(idx)), 
    guestAboutMoviePage: () => dispatch(guestAboutMoviePage()), 
    mostPopularResetIndex: () => dispatch(mostPopularResetIndex()), 
    topRatedResetIndex: () => dispatch(topRatedResetIndex()), 
    nowPlayingResetIndex: () => dispatch(nowPlayingResetIndex()), 
    mostPopularTvResetIndex: () => dispatch(mostPopularTvResetIndex()),
    airingTodayResetIndex: () => dispatch(airingTodayResetIndex()), 
    changeMovieSearchResetIndex: () => dispatch(changeMovieSearchResetIndex()), 
    changeMovieSearchTvResetIndex: () => dispatch(changeMovieSearchTvResetIndex()), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestMostPopularTv)
