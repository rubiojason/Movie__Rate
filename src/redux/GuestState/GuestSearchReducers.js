import { CHANGE_MOVIE_SEARCH_FRONT_PIC, CHANGE_MOVIE_SEARCH_BACK_PIC, CHANGE_MOVIE_SEARCH_TITLE, 
    CHANGE_MOVIE_SEARCH_RATE, CHANGE_MOVIE_SEARCH_GENRE, CHANGE_MOVIE_SEARCH_OVERVIEW, 
    CHANGE_MOVIE_SEARCH_REQUEST, CHANGE_MOVIE_SEARCH_FAILURE, 
    CHANGE_MOVIE_SEARCH_INDEX, CHANGE_MOVIE_SEARCH_RESET_INDEX } from './GuestSearchTypes'


const initialState = {
    guestsearchfailure: '', 
    guestsearchloading: false,  

    guestsearchfrontpic: '',
    guestsearchbackpic: '', 
    guestsearchtitle: '', 
    guestsearchrate: '',
    guestsearchgenre: '',
    guestsearchoverview: '', 

    guestsearchindex: '', 
}  

 export const guestSearchReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case CHANGE_MOVIE_SEARCH_FAILURE: 
            return {
                guestsearchfailure: action.payload, 
                guestsearchloading: false, 
            }
        
        case CHANGE_MOVIE_SEARCH_REQUEST: 
            return {
                guestsearchloading: true, 
                guestsearchfailure: '', 
            }

        case CHANGE_MOVIE_SEARCH_FRONT_PIC: 
            return {
                ...state, 
                guestsearchfrontpic: action.payload, 
                guestsearchfailure: '', 
                guestsearchloading: false, 
            }

        case CHANGE_MOVIE_SEARCH_BACK_PIC: 
            return {
                ...state, 
                guestsearchbackpic: action.payload, 
                guestsearchfailure: '', 
                guestsearchloading: false, 
            }

        case CHANGE_MOVIE_SEARCH_TITLE: 
            return {
                ...state, 
                guestsearchtitle: action.payload, 
                guestsearchfailure: '', 
                guestsearchloading: false, 
            }

        case CHANGE_MOVIE_SEARCH_RATE: 
            return {
                ...state, 
                guestsearchrate: action.payload, 
                guestsearchfailure: '', 
                guestsearchloading: false, 
            }
        
        case CHANGE_MOVIE_SEARCH_GENRE: 
            return {
                ...state, 
                guestsearchgenre: action.payload, 
                guestsearchfailure: '', 
                guestsearchloading: false, 
            }

        case CHANGE_MOVIE_SEARCH_OVERVIEW: 
            return {
                ...state, 
                guestsearchoverview: action.payload, 
                guestsearchfailure: '', 
                guestsearchloading: false, 
            }
        
        case CHANGE_MOVIE_SEARCH_INDEX: 
            return {
                ...state, 
                guestsearchindex: action.payload, 
                guestsearchfailure: '', 
                guestsearchloading: false, 
            }
        
        case CHANGE_MOVIE_SEARCH_RESET_INDEX: 
            return {
                ...state, 
                guestsearchindex: '', 
            }
        
        default: return state 
    }
}

export default guestSearchReducer
