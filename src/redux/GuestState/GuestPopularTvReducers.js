import { MOST_POPULAR_TV_FRONT_PIC, MOST_POPULAR_TV_BACK_PIC, MOST_POPULAR_TV_TITLE, 
    MOST_POPULAR_TV_RATE, MOST_POPULAR_TV_GENRE, MOST_POPULAR_TV_FAILURE, 
    MOST_POPULAR_TV_REQUEST, MOST_POPULAR_TV_INDEX, MOST_POPULAR_TV_OVERVIEW, 
    MOST_POPULAR_TV_RESET_INDEX } from './GuestPopularTvTypes'


const initialState = {
    mostpoptvfailure: '', 
    mostpoptvloading: false,  

    mostpoptvfrontpic: '',
    mostpoptvbackpic: '', 
    mostpoptvtitle: '', 
    mostpoptvrate: '',
    mostpoptvgenre: '',
    mostpoptvoverview: '', 

    mostpoptvindex: '', 
}  

 export const mostPopularTvReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case MOST_POPULAR_TV_FAILURE: 
            return {
                mostpoptvfailure: action.payload, 
                mostpoptvloading: false, 
            }
        
        case MOST_POPULAR_TV_REQUEST: 
            return {
                mostpoptvloading: true, 
                mostpoptvfailure: '', 
            }

        case MOST_POPULAR_TV_FRONT_PIC: 
            return {
                ...state, 
                mostpoptvfrontpic: action.payload, 
                mostpoptvfailure: '', 
                mostpoptvloading: false, 
            }

        case MOST_POPULAR_TV_BACK_PIC: 
            return {
                ...state, 
                mostpoptvbackpic: action.payload, 
                mostpoptvfailure: '', 
                mostpoptvloading: false, 
            }

        case MOST_POPULAR_TV_TITLE: 
            return {
                ...state, 
                mostpoptvtitle: action.payload, 
                mostpoptvfailure: '', 
                mostpoptvloading: false, 
            }

        case MOST_POPULAR_TV_RATE: 
            return {
                ...state, 
                mostpoptvrate: action.payload, 
                mostpoptvfailure: '', 
                mostpoptvloading: false, 
            }
        
        case MOST_POPULAR_TV_GENRE: 
            return {
                ...state, 
                mostpoptvgenre: action.payload, 
                mostpoptvfailure: '', 
                mostpoptvloading: false, 
            }

        case MOST_POPULAR_TV_OVERVIEW: 
            return {
                ...state, 
                mostpoptvoverview: action.payload, 
                mostpoptvfailure: '', 
                mostpoptvloading: false, 
            }
        
        case MOST_POPULAR_TV_INDEX: 
            return {
                ...state, 
                mostpoptvindex: action.payload, 
                mostpoptvfailure: '', 
                mostpoptvloading: false, 
            }
        
        case MOST_POPULAR_TV_RESET_INDEX: 
            return {
                ...state, 
                mostpoptvindex: '', 
            }
        
        default: return state 
    }
}

export default mostPopularTvReducer
