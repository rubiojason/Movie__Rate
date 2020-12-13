import { MOST_POPULAR_FRONT_PIC, MOST_POPULAR_BACK_PIC, MOST_POPULAR_TITLE, 
    MOST_POPULAR_RATE, MOST_POPULAR_GENRE, MOST_POPULAR_FAILURE, 
    MOST_POPULAR_REQUEST, MOST_POPULAR_INDEX, MOST_POPULAR_OVERVIEW, 
    MOST_POPULAR_RESET_INDEX } from './GuestPopularTypes'


const initialState = {
    mostpopfailure: '', 
    mostpoploading: false,  

    mostpopfrontpic: '',
    mostpopbackpic: '', 
    mostpoptitle: '', 
    mostpoprate: '',
    mostpopgenre: '',
    mostpopoverview: '', 

    mostpopindex: '', 
}  

 export const mostPopularReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case MOST_POPULAR_FAILURE: 
            return {
                mostpopfailure: action.payload, 
                mostpoploading: false, 
            }
        
        case MOST_POPULAR_REQUEST: 
            return {
                mostpoploading: true, 
                mostpopfailure: '', 
            }

        case MOST_POPULAR_FRONT_PIC: 
            return {
                ...state, 
                mostpopfrontpic: action.payload, 
                mostpopfailure: '', 
                mostpoploading: false, 
            }

        case MOST_POPULAR_BACK_PIC: 
            return {
                ...state, 
                mostpopbackpic: action.payload, 
                mostpopfailure: '', 
                mostpoploading: false, 
            }

        case MOST_POPULAR_TITLE: 
            return {
                ...state, 
                mostpoptitle: action.payload, 
                mostpopfailure: '', 
                mostpoploading: false, 
            }

        case MOST_POPULAR_RATE: 
            return {
                ...state, 
                mostpoprate: action.payload, 
                mostpopfailure: '', 
                mostpoploading: false, 
            }
        
        case MOST_POPULAR_GENRE: 
            return {
                ...state, 
                mostpopgenre: action.payload, 
                mostpopfailure: '', 
                mostpoploading: false, 
            }

        case MOST_POPULAR_OVERVIEW: 
            return {
                ...state, 
                mostpopoverview: action.payload, 
                mostpopfailure: '', 
                mostpoploading: false, 
            }
        
        case MOST_POPULAR_INDEX: 
            return {
                ...state, 
                mostpopindex: action.payload, 
                mostpopfailure: '', 
                mostpoploading: false, 
            }
        
        case MOST_POPULAR_RESET_INDEX: 
            return {
                ...state, 
                mostpopindex: '', 
            }
        
        default: return state 
    }
}

export default mostPopularReducer
