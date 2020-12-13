import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { topRatedIndex, guestAboutMoviePage, mostPopularResetIndex, 
         topRatedResetIndex, nowPlayingResetIndex, mostPopularTvResetIndex, 
        airingTodayResetIndex, changeMovieSearchResetIndex,changeMovieSearchTvResetIndex} from '../redux'

gsap.registerPlugin(ScrollTrigger)


function GuestTopRated({ topratedfrontpic, topratedbackpic, topratedtitle, 
                         topratedrate, topratedgenre, topRatedIndex, 
                         pagestate, guestAboutMoviePage, mostPopularResetIndex, 
                         topRatedResetIndex, nowPlayingResetIndex, mostPopularTvResetIndex, 
                         airingTodayResetIndex, changeMovieSearchResetIndex, changeMovieSearchTvResetIndex }) {

    const IMG_URL = 'http://image.tmdb.org/t/p/'
    const IMG_SIZE = 'w200'
    //sizes: w300, w780, w1280, original 

    const frontpic = Array.from(topratedfrontpic)
    const title = Array.from(topratedtitle)

    //useRef 
    const ratedTitleAnim = useRef(null)
    const ratedSeeAllAnim = useRef(null)
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
      topRatedIndex(frontpic.indexOf(e) + ' toprated')
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
      gsap.fromTo(ratedTitleAnim.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 0.1, 
        scrollTrigger: 
        {
          id: 'rated-title', 
          trigger: ratedTitleAnim.current, 
          start: 'top 80%', 
          //toggleActions: 'play none reverse none', 
          markers: false, 
        } 
      })

      gsap.fromTo(ratedSeeAllAnim.current, { autoAlpha: 0, x: 50 }, { autoAlpha: 1, x: 0, ease: 'none', duration: 1, delay: 0.1, 
        scrollTrigger: 
        {
          id: 'rated-see-all', 
          trigger: ratedSeeAllAnim.current, 
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
                  <div className="left-title" ref={ratedTitleAnim} id="rated-title" >Top Rated Movies</div>
                  <div className="right-see-all" onClick={changeMovieDisplay} >
                    <span className="see-all" ref={ratedSeeAllAnim} id="rated-see-all" >{seeState}</span>
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

        topratedfailure: state.toprated.topratedfailure,
        topratedloading: state.toprated.topratedloading,  

        topratedfrontpic: state.toprated.topratedfrontpic,
        topratedbackpic: state.toprated.topratedbackpic, 
        topratedtitle: state.toprated.topratedtitle, 
        topratedrate: state.toprated.topratedrate,
        topratedgenre: state.toprated.topratedgenre,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    topRatedIndex: (idx) => dispatch(topRatedIndex(idx)), 
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

export default connect(mapStateToProps, mapDispatchToProps)(GuestTopRated)
