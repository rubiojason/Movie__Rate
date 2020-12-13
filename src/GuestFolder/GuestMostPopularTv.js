import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { mostPopularTvIndex, guestAboutMoviePage, mostPopularResetIndex, 
         topRatedResetIndex, nowPlayingResetIndex, mostPopularTvResetIndex, 
         airingTodayResetIndex, changeMovieSearchResetIndex, changeMovieSearchTvResetIndex } from '../redux'

gsap.registerPlugin(ScrollTrigger)


function GuestMostPopularTv({ mostpoptvfrontpic, mostpoptvbackpic, mostpoptvtitle, 
                           mostpoptvrate, mostpoptvgenre, mostPopularTvIndex, 
                           pagestate, guestAboutMoviePage, mostPopularResetIndex, 
                           topRatedResetIndex, nowPlayingResetIndex, mostPopularTvResetIndex, 
                          airingTodayResetIndex, changeMovieSearchResetIndex, changeMovieSearchTvResetIndex }) {

    const IMG_URL = 'http://image.tmdb.org/t/p/'
    const IMG_SIZE = 'w200'
    //sizes: w300, w780, w1280, original 

    const frontpic = Array.from(mostpoptvfrontpic)
    const title = Array.from(mostpoptvtitle)

    //useRef 
    const popTvTitleAnim = useRef(null)
    const popTvSeeAllAnim = useRef(null)
    //useRef 

    //functions 
    const handleMovieImgClick = e => {
      console.log('its running')
      console.log(frontpic.indexOf(e))
      mostPopularResetIndex()
      topRatedResetIndex()
      nowPlayingResetIndex()
      mostPopularTvResetIndex()
      airingTodayResetIndex()
      changeMovieSearchResetIndex()
      changeMovieSearchTvResetIndex()
      mostPopularTvIndex(frontpic.indexOf(e) + ' nowplaying')
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
    //useEffect

    //useState 
    const [displayState, setDisplayState] = useState('')
    const [gridTempState, setGridTempState] = useState('')
    const [seeState, setSeeState] = useState('see all')
    //useState 

    //useEffect 
    useEffect(() => {
      gsap.fromTo(popTvTitleAnim.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 0.1, 
        scrollTrigger: 
        {
          id: 'pop-tv-title', 
          trigger: popTvTitleAnim.current, 
          start: 'top 80%', 
          //toggleActions: 'play none reverse none', 
          markers: false, 
        } 
      })

      gsap.fromTo(popTvSeeAllAnim.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.1, 
        scrollTrigger: 
        {
          id: 'pop-tv-see-all', 
          trigger: popTvSeeAllAnim.current, 
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
                  <div className="left-title" id="pop-tv-title" ref={popTvTitleAnim}>Most Popular TV Shows</div>
                  <div className="right-see-all" onClick={changeMovieDisplay}>
                    <div className="see-all" id="pop-tv-see-all" ref={popTvSeeAllAnim}>{seeState}</div>
                  </div>
              </div>

              <div className="contain">
                <div className="row" style={{display: displayState, gridTemplateColumns: gridTempState}}>
                  {
                    frontpic.map(pic => 
                      <div className="row__inner">
                        <Link to="/guestaboutmovie">
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

        mostpoptvfailure: state.mostpoptv.mostpoptvfailure,
        mostpoptvloading: state.mostpoptv.mostpoptvloading,  

        mostpoptvfrontpic: state.mostpoptv.mostpoptvfrontpic,
        mostpoptvbackpic: state.mostpoptv.mostpoptvbackpic, 
        mostpoptvtitle: state.mostpoptv.mostpoptvtitle, 
        mostpoptvrate: state.mostpoptv.mostpoptvrate,
        mostpoptvgenre: state.mostpoptv.mostpoptvgenre,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    mostPopularTvIndex: (idx) => dispatch(mostPopularTvIndex(idx)), 
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
