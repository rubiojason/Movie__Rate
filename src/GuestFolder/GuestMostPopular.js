import React, { useState, useEffect } from 'react'
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



    const changeMovieDisplay = () => {
      if (displayState === '') {
        setDisplayState('grid')
        setScroll("hidden"); 
        setSeeState('see less')

        if (size.width <= 1000) {
          setGridTempState('repeat(auto-fit, minmax(110px, 2fr))')
        }

        else if (size.width <= 1500) {
          setGridTempState('repeat(auto-fit, minmax(160px, 2fr))')
        }

        else if (size.width <= 2000) {
          setGridTempState('repeat(auto-fit, minmax(210px, 2fr))')
        }

        else if (size.width <= 3000) {
          setGridTempState('repeat(auto-fit, minmax(260px, 2fr))')
        }

        else if (size.width <= 3700) {
          setGridTempState('repeat(auto-fit, minmax(360px, 2fr))')
        }
        
        else if (size.width <= 4000 || size.width > 4000) {
          setGridTempState('repeat(auto-fit, minmax(460px, 2fr))')
        }
      }
      else {
        setDisplayState('')
        setGridTempState('')
        setScroll("scroll"); 
        setSeeState('see all')
      }
    }
    //functions 

    //useState 
    const [displayState, setDisplayState] = useState('')
    const [gridTempState, setGridTempState] = useState('')
    const [Scroll, setScroll] = useState(''); 
    const [seeState, setSeeState] = useState('see all'); 
    //useState 

    return (
        <div>
            <div className="most-popular-container">

              <div className="title-see-all">
                  <div className="left-title" id="title" >Most Popular Movies</div>
                  <div className="right-see-all">
                    <span className="see-all" id="see-all" onClick={changeMovieDisplay}>{seeState}</span>
                  </div>
              </div>

              <div className="contain">
                <div className="row" style={{display: displayState, gridTemplateColumns: gridTempState, overflowX: Scroll}} >
                  {
                    frontpic.map(pic => 
                      <div className="row__inner">
                          <div className="tile" onClick={() => handleMovieImgClick(pic)}  >
                            <Link to="/movie_project/guestaboutmovie/"  >
                              <div className="tile__media" >
                                <img key={pic} alt="" src={IMG_URL + IMG_SIZE + pic} />
                              </div>
                              <div className="tile__details">
                                <div className="tile-details-overlay">
                                  <div className="tile__title">
                                  {title[frontpic.indexOf(pic)]}
                                  </div>
                                </div>
                              </div>
                              
                            </Link>
                          </div>
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
