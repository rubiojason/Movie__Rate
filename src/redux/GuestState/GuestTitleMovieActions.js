import axios from 'axios'
import { GET_MOVIE_IMG_PIC, GET_MOVIE_IMG_TITLE, GET_MOVIE_IMG_RATE, GET_MOVIE_IMG_GENRE, 
         GUEST_TITLE_MOVIE_FAILURE, GUEST_TITLE_MOVIE_REQUEST, GUEST_ANIMATION_STATE } from './GuestTitleMovieTypes'


export const getMovieImgPic = data => {
    return {
        type: GET_MOVIE_IMG_PIC, 
        payload: data
        }
    }

export const getMovieImgTitle = data => {
    return {
        type: GET_MOVIE_IMG_TITLE, 
        payload: data
    }
}

export const getMovieImgRate = data => {
    return {
        type: GET_MOVIE_IMG_RATE, 
        payload: data
    }
}

export const getMovieImgGenre = data => {
    return {
        type: GET_MOVIE_IMG_GENRE, 
        payload: data
    }
}

export const guestAnimationState = () => {
    return {
        type: GUEST_ANIMATION_STATE, 
    }
}

const guestTitleMovieFailure = data => {
    return {
        type: GUEST_TITLE_MOVIE_FAILURE, 
        payload: data
    }
}

const guestTitleMovieRequest = data => {
    return {
        type: GUEST_TITLE_MOVIE_REQUEST, 
        payload: data
    }
}


//api calls 
export const fetchGuestTitleMovie = () => {
    return (dispatch) => {
        dispatch(guestTitleMovieRequest)
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0949161fd6bf6f1127a37c1d3530c80d&language=en-US&page=1')
        .then(res => {
            const info = res.data

            dispatch(getMovieImgPic(info.results[0].backdrop_path)) 
            dispatch(getMovieImgTitle(info.results[0].title))
            dispatch(getMovieImgRate(info.results[0].vote_average))

                var gen = []

                for (var i = 0; i <= info.results[0].genre_ids.length - 1; i++) {
                    if (info.results[0].genre_ids[i] === 28) {
                        gen.push('Action')
                    }

                    if (info.results[0].genre_ids[i] === 12) {
                        gen.push('Adventure')
                    }

                    if (info.results[0].genre_ids[i] === 16) {
                        gen.push('Animation')
                    }

                    if (info.results[0].genre_ids[i] === 35) {
                        gen.push('Comedy')
                    }

                    if (info.results[0].genre_ids[i] === 80) {
                        gen.push('Crime')
                    }
                    
                    if (info.results[0].genre_ids[i] === 99) {
                        gen.push('Documentary')
                    }

                    if (info.results[0].genre_ids[i] === 18) {
                        gen.push('Drama')
                    }

                    if (info.results[0].genre_ids[i] === 14) {
                        gen.push('Fantasy')
                    }

                    if (info.results[0].genre_ids[i] === 27) {
                        gen.push('Horror')
                    }

                    if (info.results[0].genre_ids[i] === 9648) {
                        gen.push('Mystery')
                    }

                    if (info.results[0].genre_ids[i] === 10749) {
                        gen.push('Romance')
                    }

                    if (info.results[0].genre_ids[i] === 53) {
                        gen.push('Thriller')
                    }

                    console.log(gen)
                }

                dispatch(getMovieImgGenre(gen))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(guestTitleMovieFailure(errorMsg))
        })
    }
}
