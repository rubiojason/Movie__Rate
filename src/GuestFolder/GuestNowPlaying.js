import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Carousel from "react-elastic-carousel";

import { nowPlayingIndex, guestAboutMoviePage, mostPopularResetIndex, 
         topRatedResetIndex, nowPlayingResetIndex, mostPopularTvResetIndex, 
         airingTodayResetIndex, changeMovieSearchResetIndex,changeMovieSearchTvResetIndex} from '../redux'

gsap.registerPlugin(ScrollTrigger)

function GuestNowPlaying({ nowplayfrontpic, nowplaybackpic, nowplaytitle, 
                           nowplayrate, nowplaygenre, nowPlayingIndex, 
                           pagestate, guestAboutMoviePage, mostPopularResetIndex, 
                           topRatedResetIndex, nowPlayingResetIndex, mostPopularTvResetIndex, 
                           airingTodayResetIndex, changeMovieSearchResetIndex, changeMovieSearchTvResetIndex }) {

    const IMG_URL = 'http://image.tmdb.org/t/p/'
    const IMG_SIZE = 'w200'
    //sizes: w300, w780, w1280, original 

    const frontpic = Array.from(nowplayfrontpic)
    const title = Array.from(nowplaytitle)

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
      nowPlayingIndex(frontpic.indexOf(e) + ' nowplaying')
      guestAboutMoviePage()
    }

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 3 },
      { width: 768, itemsToShow: 4 },
      { width: 1200, itemsToShow: 5 },
      { width: 1500, itemsToShow: 6 },
    ];

    //window width 

    const size = useWindowSize();

        function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });
      
        useEffect(() => {
          // Handler to call on window resize
          function handleResize() {
            // Set window width/height to state
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }

          // Add event listener
          window.addEventListener("resize", handleResize);
          
          // Call handler right away so state gets updated with initial window size
          handleResize();
          
          // Remove event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
      
        return windowSize;
    }

    return (
        <div>
            <div className="most-popular-container">

              <div className="title-see-all">
                  <div className="left-title" id="playing-title" >Now Playing Movies</div>
                  <div className="right-see-all"></div>
              </div>

              <div className="contain">
              {
                size.width < 901 ? 

                <div className="row" style={{overflow: 'hidden', overflowX: 'scroll'}}>
                  {
                    frontpic.map(pic => 
                      <div className="row__inner">
                          <div className="tile" style={{margin: '0px 10px'}} onClick={() => handleMovieImgClick(pic)} >
                            <Link to="/Movie__Rate/guestaboutmovie/">

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

                            </Link>
                        </div>
                      </div>
                    )
                  }
                </div> 

                : 

                <div className="row">
                  <Carousel breakPoints={breakPoints}>
                    {
                      frontpic.map(pic => 
                        <div className="row__inner">
                            <div className="tile" onClick={() => handleMovieImgClick(pic)} >
                              <Link to="/Movie__Rate/guestaboutmovie/">

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

                              </Link>
                          </div>
                        </div>
                      )
                    }
                  </Carousel>
                </div>
              }
              </div>
            </div>
          </div>
            
    )
}


const mapStateToProps = state => {
    return { 
        imgpic: state.guesttitlemovie.imgpic, 
        pagestate: state.page.pagestate,

        nowplayfailure: state.nowplay.nowplayfailure,
        nowplayloading: state.nowplay.nowplayloading,  

        nowplayfrontpic: state.nowplay.nowplayfrontpic,
        nowplaybackpic: state.nowplay.nowplaybackpic, 
        nowplaytitle: state.nowplay.nowplaytitle, 
        nowplayrate: state.nowplay.nowplayrate,
        nowplaygenre: state.nowplay.nowplaygenre,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    nowPlayingIndex: (idx) => dispatch(nowPlayingIndex(idx)), 
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

export default connect(mapStateToProps, mapDispatchToProps)(GuestNowPlaying)
