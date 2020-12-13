import { GET_MOVIE_IMG_PIC, GET_MOVIE_IMG_TITLE, GET_MOVIE_IMG_RATE, GET_MOVIE_IMG_GENRE, 
    GUEST_TITLE_MOVIE_FAILURE, GUEST_TITLE_MOVIE_REQUEST, GUEST_ANIMATION_STATE } from './GuestTitleMovieTypes'

const initialState = {
    failure: '', 
    loading: false,  

    imgpic: '', 
    imgtitle: '', 
    imgrate: '',
    imggenre: '',
    animationstate: 0, 
}

const guestTitleMovieImgReducer = (state = initialState, action) => {
    switch(action.type) {

        case GUEST_TITLE_MOVIE_FAILURE: 
            return {
                loading: false, 
                failure: action.payload
            }
        
        case GUEST_TITLE_MOVIE_REQUEST: 
            return {
                loading: true, 
                failure: ''
            }

        case GET_MOVIE_IMG_PIC: 
            return {
                ...state, 
                imgpic: action.payload, 
                loading: false, 
                failure: '',
            }

        case GET_MOVIE_IMG_TITLE: 
            return {
                ...state, 
                imgtitle: action.payload, 
                loading: false, 
                failure: '', 
            }

        case GET_MOVIE_IMG_RATE: 
            return {
                ...state, 
                imgrate: action.payload, 
                loading: false, 
                failure: '', 
            }

        case GET_MOVIE_IMG_GENRE: 
            return {
                ...state, 
                imggenre: action.payload, 
                loading: false, 
                failure: '', 
            }

        case GUEST_ANIMATION_STATE: 
            return {
                ...state, 
                animationstate: state.animationstate + 1
            }
        
        default: return state  
    }
}

export default guestTitleMovieImgReducer 
