import { combineReducers } from 'redux'
import PageReducer from './PageState/PageReducers'
import guestTitleMovieImgReducer from './GuestState/GuestTitleMovieReducers'
import mostPopularReducer from './GuestState/GuestPopularReducers'
import topRatedReducer from './GuestState/GuestTopRatedReducers'
import nowPlayingReducer from './GuestState/GuestNowPlayingReducers'
import mostPopularTvReducer from './GuestState/GuestPopularTvReducers'
import airingTodayReducer from './GuestState/GuestAiringTodayReducers'
import guestSearchReducer from './GuestState/GuestSearchReducers'
import guestSearchTvReducer from './GuestState/GuestSearchTVReducers'

const rootReducer = combineReducers({
    page: PageReducer, 
    guesttitlemovie: guestTitleMovieImgReducer, 
    mostpop: mostPopularReducer, 
    toprated: topRatedReducer, 
    nowplay: nowPlayingReducer, 
    mostpoptv: mostPopularTvReducer, 
    airingtoday: airingTodayReducer, 
    guestsearch: guestSearchReducer, 
    guestsearchtv: guestSearchTvReducer, 
})

export default rootReducer
