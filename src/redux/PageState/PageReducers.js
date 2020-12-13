import { LOGIN_PAGE, SIGNUP_PAGE, GUEST_PAGE, GUEST_ABOUT_MOVIE_PAGE, 
         GUEST_ACCOUNT_PAGE, GUEST_SEARCH_PAGE } from './PageTypes'

const initialState = {
    pagestate: 'signup-page',
}

const PageReducer = (state = initialState, action) => {
    switch(action.type) {

        case LOGIN_PAGE:    
            return {
                ...state, 
                pagestate: 'login-page' 
            }

        case SIGNUP_PAGE: 
            return {
                ...state, 
                pagestate: 'signup-page'
            }

        case GUEST_PAGE: 
            return {
                ...state, 
                pagestate: 'guest-page'
            }
        
        case GUEST_ABOUT_MOVIE_PAGE: 
            return {
                ...state, 
                pagestate: 'guest-about-movie-page'
            }

        case GUEST_ACCOUNT_PAGE: 
            return {
                ...state, 
                pagestate: 'guest-account-page'
            }
        
        case GUEST_SEARCH_PAGE: 
            return {
                ...state, 
                pagestate: 'guest-search-page'
            }
        default: return state 
    }
}

export default PageReducer
