import { LOGIN_PAGE, SIGNUP_PAGE, GUEST_PAGE, GUEST_ABOUT_MOVIE_PAGE, 
         GUEST_ACCOUNT_PAGE, GUEST_SEARCH_PAGE } from './PageTypes'

export const loginPage = () => {
    return {
        type: LOGIN_PAGE, 
    }
}

export const signupPage = () => {
    return {
        type: SIGNUP_PAGE, 
    }
}

export const guestPage = () => {
    return {
        type: GUEST_PAGE, 
    }
}

export const guestAboutMoviePage = () => {
    return {
        type: GUEST_ABOUT_MOVIE_PAGE, 
    }
}

export const guestAccountPage = () => {
    return {
        type: GUEST_ACCOUNT_PAGE, 
    }
}

export const guestSearchPage = () => {
    return {
        type: GUEST_SEARCH_PAGE, 
    }
}
