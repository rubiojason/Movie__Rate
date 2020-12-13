import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { mostPopularIndex, guestAboutMoviePage, mostPopularResetIndex, 
         topRatedResetIndex, nowPlayingResetIndex, mostPopularTvResetIndex, 
        airingTodayResetIndex, changeMovieSearchResetIndex, changeMovieSearchTvResetIndex} from '../redux'

gsap.registerPlugin(ScrollTrigger)


function GuestMostPopular({ mostpopfrontpic, mostpopbackpic, mostpoptitle,
                            mostpoprate, mostpopgenre, mostPopularIndex, 
                            pagestate, guestAboutMoviePage, mostPopularResetIndex, 
                            topRatedResetIndex, nowPlayingResetIndex, mostPopularTvResetIndex, 
                            airingTodayResetIndex, changeMovieSearchResetIndex, changeMovieSearchTvResetIndex }) {

    const IMG_URL = 'http://image.tmdb.org/t/p/'
    const IMG_SIZE = 'w200'
    //sizes: w300, w780, w1280, original 

    const frontpic = Array.from(mostpopfrontpic)
    const title = Array.from(mostpoptitle)

    //useRef 
    const titleAnim = useRef(null)
    const seeAllAnim = useRef(null)
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
      mostPopularIndex(frontpic.indexOf(e) + ' popular')
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
      gsap.fromTo(titleAnim.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 0.1, 
        scrollTrigger: 
        {
          id: 'title', 
          trigger: titleAnim.current, 
          start: 'top 80%', 
          //toggleActions: 'play none reverse none', 
          markers: false, 
        } 
      })

      gsap.fromTo(seeAllAnim.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.1, 
        scrollTrigger: 
        {
          id: 'see-all', 
          trigger: seeAllAnim.current, 
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
                  <div className="left-title" id="title" ref={titleAnim}>Most Popular Movies</div>
                  <div className="right-see-all" onClick={changeMovieDisplay}>
                    <span className="see-all" id="see-all" ref={seeAllAnim}>{seeState}</span>
                  </div>
              </div>

              <div className="contain">
                <div className="row" style={{display: displayState, gridTemplateColumns: gridTempState}} >
                  {
                    frontpic.map(pic => 
                      <div className="row__inner">
                        <Link to="/guestaboutmovie"  >
                          <div className="tile" onClick={() => handleMovieImgClick(pic)}  >
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

        mostpopfailure: state.mostpop.mostpopfailure,
        mostpoploading: state.mostpop.mostpoploading,  

        mostpopfrontpic: state.mostpop.mostpopfrontpic,
        mostpopbackpic: state.mostpop.mostpopbackpic, 
        mostpoptitle: state.mostpop.mostpoptitle, 
        mostpoprate: state.mostpop.mostpoprate,
        mostpopgenre: state.mostpop.mostpopgenre,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    mostPopularIndex: (idx) => dispatch(mostPopularIndex(idx)), 
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

export default connect(mapStateToProps, mapDispatchToProps)(GuestMostPopular)
