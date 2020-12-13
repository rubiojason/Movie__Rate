import axios from 'axios'
import { CHANGE_MOVIE_SEARCH_FRONT_PIC, CHANGE_MOVIE_SEARCH_BACK_PIC, CHANGE_MOVIE_SEARCH_TITLE, 
         CHANGE_MOVIE_SEARCH_RATE, CHANGE_MOVIE_SEARCH_GENRE, CHANGE_MOVIE_SEARCH_OVERVIEW, 
         CHANGE_MOVIE_SEARCH_REQUEST, CHANGE_MOVIE_SEARCH_FAILURE, 
         CHANGE_MOVIE_SEARCH_INDEX, CHANGE_MOVIE_SEARCH_RESET_INDEX } from './GuestSearchTypes'

export const changeMovieSearchFrontPic = data => {
    return {
        type: CHANGE_MOVIE_SEARCH_FRONT_PIC, 
        payload: data
    }
}

export const changeMovieSearchBackPic = data => {
    return {
        type: CHANGE_MOVIE_SEARCH_BACK_PIC, 
        payload: data
    }
}

export const changeMovieSearchTitle = data => {
    return {
        type: CHANGE_MOVIE_SEARCH_TITLE, 
        payload: data
    }
}

export const changeMovieSearchRate = data => {
    return {
        type: CHANGE_MOVIE_SEARCH_RATE, 
        payload: data
    }
}

export const changeMovieSearchGenre = data => {
    return {
        type: CHANGE_MOVIE_SEARCH_GENRE, 
        payload: data
    }
}

export const changeMovieSearchOverview = data => {
    return {
        type: CHANGE_MOVIE_SEARCH_OVERVIEW, 
        payload: data
    }
}

export const changeMovieSearchIndex = data => {
    return {
        type: CHANGE_MOVIE_SEARCH_INDEX, 
        payload: data
    }
}

export const changeMovieSearchResetIndex = data => {
    return {
        type: CHANGE_MOVIE_SEARCH_RESET_INDEX, 
        payload: data
    }
}

const changeMovieSearchRequest = data => {
    return {
        type: CHANGE_MOVIE_SEARCH_REQUEST, 
        payload: data
    }
}

const changeMovieSearchFailure = data => {
    return {
        type: CHANGE_MOVIE_SEARCH_FAILURE, 
        payload: data 
    }
}

//api calls 

export const fetchMovieChangeSearchData = (movie_name) => {
    return (dispatch) => {
        dispatch(changeMovieSearchRequest)
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=0949161fd6bf6f1127a37c1d3530c80d&language=en-US&query=' + movie_name + '&page=1&include_adult=false')
        .then(res => {
            const info = res.data
            
            console.log(info)

            var frontPic = []
            var backPic = []
            var title = []
            var rate = []
            var gen = [[], [], [], [], [], [], [], [], [], [], 
            [], [], [], [], [], [], [], [], [], []]
            var overview = []

            for (var i = 0; i <= info.results.length - 1; i++) {
                frontPic.push(info.results[i].poster_path)
                backPic.push(info.results[i].backdrop_path)
                title.push(info.results[i].title)
                rate.push(info.results[i].vote_average)
                overview.push(info.results[i].overview)      
            }
            dispatch(changeMovieSearchFrontPic(frontPic))
            dispatch(changeMovieSearchBackPic(backPic))
            dispatch(changeMovieSearchTitle(title))
            dispatch(changeMovieSearchRate(rate))
            dispatch(changeMovieSearchOverview(overview))

            for (var i = 0; i <= info.results.length - 1; i++) {
                for (var j = 0; j <= info.results[i].genre_ids.length - 1; j++) {

                    if (info.results[i].genre_ids[j] === 28) {
                        gen[i].splice(gen[i].length, 0, 'Action')
                    }

                    if (info.results[i].genre_ids[j] === 12) {
                        gen[i].splice(gen[i].length, 0, 'Adventure')
                    }

                    if (info.results[i].genre_ids[j] === 16) {
                        gen[i].splice(gen[i].length, 0, 'Animation')
                    }

                    if (info.results[i].genre_ids[j] === 35) {
                        gen[i].splice(gen[i].length, 0, 'Comedy')
                    }

                    if (info.results[i].genre_ids[j] === 80) {
                        gen[i].splice(gen[i].length, 0, 'Crime')
                    }
                    
                    if (info.results[i].genre_ids[j] === 99) {
                        gen[i].splice(gen[i].length, 0, 'Documentary')
                    }

                    if (info.results[i].genre_ids[j] === 18) {
                        gen[i].splice(gen[i].length, 0, 'Drama')
                    }

                    if (info.results[i].genre_ids[j] === 14) {
                        gen[i].splice(gen[i].length, 0, 'Fantasy')
                    }

                    if (info.results[i].genre_ids[j] === 27) {
                        gen[i].splice(gen[i].length, 0, 'Horror')
                    }

                    if (info.results[i].genre_ids[j] === 9648) {
                        gen[i].splice(gen[i].length, 0, 'Mystery')
                    }

                    if (info.results[i].genre_ids[j] === 10749) {
                        gen[i].splice(gen[i].length, 0, 'Romance')
                    }

                    if (info.results[i].genre_ids[j] === 53) {
                        gen[0].splice(gen[i].length, 0, 'Thriller')
                    }
                }
            }

            var newGenArr = []

            for (let i = 0; i <= gen.length - 1; i++) {
                newGenArr.push([...new Set(gen[i])])
            }
            dispatch(changeMovieSearchGenre(newGenArr))
        })

        .catch(err => {
            const errorMsg = err.message
            dispatch(changeMovieSearchFailure(errorMsg))
        })
    }
}