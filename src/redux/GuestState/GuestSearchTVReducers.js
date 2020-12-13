import { CHANGE_MOVIE_SEARCH_TV_FRONT_PIC, CHANGE_MOVIE_SEARCH_TV_BACK_PIC, CHANGE_MOVIE_SEARCH_TV_TITLE, 
    CHANGE_MOVIE_SEARCH_TV_RATE, CHANGE_MOVIE_SEARCH_TV_GENRE, CHANGE_MOVIE_SEARCH_TV_OVERVIEW, 
    CHANGE_MOVIE_SEARCH_TV_REQUEST, CHANGE_MOVIE_SEARCH_TV_FAILURE, 
    CHANGE_MOVIE_SEARCH_TV_INDEX, CHANGE_MOVIE_SEARCH_TV_RESET_INDEX } from './GuestSearchTVTypes'


const initialState = {
    guestsearchtvfailure: '', 
    guestsearchtvloading: false,  

    guestsearchtvfrontpic: '',
    guestsearchtvbackpic: '', 
    guestsearchtvtitle: '', 
    guestsearchtvrate: '',
    guestsearchtvgenre: '',
    guestsearchtvoverview: '', 

    guestsearchtvindex: '', 
}  

 export const guestSearchTvReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case CHANGE_MOVIE_SEARCH_TV_FAILURE: 
            return {
                guestsearchtvfailure: action.payload, 
                guestsearchtvloading: false, 
            }
        
        case CHANGE_MOVIE_SEARCH_TV_REQUEST: 
            return {
                guestsearchtvloading: true, 
                guestsearchtvfailure: '', 
            }

        case CHANGE_MOVIE_SEARCH_TV_FRONT_PIC: 
            return {
                ...state, 
                guestsearchtvfrontpic: action.payload, 
                guestsearchtvfailure: '', 
                guestsearchtvloading: false, 
            }

        case CHANGE_MOVIE_SEARCH_TV_BACK_PIC: 
            return {
                ...state, 
                guestsearchtvbackpic: action.payload, 
                guestsearchtvfailure: '', 
                guestsearchtvloading: false, 
            }

        case CHANGE_MOVIE_SEARCH_TV_TITLE: 
            return {
                ...state, 
                guestsearchtvtitle: action.payload, 
                guestsearchtvfailure: '', 
                guestsearchtvloading: false, 
            }

        case CHANGE_MOVIE_SEARCH_TV_RATE: 
            return {
                ...state, 
                guestsearchtvrate: action.payload, 
                guestsearchtvfailure: '', 
                guestsearchtvloading: false, 
            }
        
        case CHANGE_MOVIE_SEARCH_TV_GENRE: 
            return {
                ...state, 
                guestsearchtvgenre: action.payload, 
                guestsearchtvfailure: '', 
                guestsearchtvloading: false, 
            }

        case CHANGE_MOVIE_SEARCH_TV_OVERVIEW: 
            return {
                ...state, 
                guestsearchtvoverview: action.payload, 
                guestsearchtvfailure: '', 
                guestsearchtvloading: false, 
            }
        
        case CHANGE_MOVIE_SEARCH_TV_INDEX: 
            return {
                ...state, 
                guestsearchtvindex: action.payload, 
                guestsearchtvfailure: '', 
                guestsearchtvloading: false, 
            }
        
        case CHANGE_MOVIE_SEARCH_TV_RESET_INDEX: 
            return {
                ...state, 
                guestsearchtvindex: '', 
            }
        
        default: return state 
    }
}

export default guestSearchTvReducer
