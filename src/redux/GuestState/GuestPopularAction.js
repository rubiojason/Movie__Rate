import axios from 'axios'
import { MOST_POPULAR_FRONT_PIC, MOST_POPULAR_BACK_PIC, MOST_POPULAR_TITLE, 
         MOST_POPULAR_RATE, MOST_POPULAR_GENRE, MOST_POPULAR_FAILURE, 
         MOST_POPULAR_REQUEST, MOST_POPULAR_INDEX, MOST_POPULAR_OVERVIEW, 
         MOST_POPULAR_RESET_INDEX } from './GuestPopularTypes'


export const mostPopularfrontPic = data => {
    return {
        type: MOST_POPULAR_FRONT_PIC,   
        payload: data
    }
}

export const mostPopularBackPic = data => {
    return {
        type: MOST_POPULAR_BACK_PIC, 
        payload: data
    }
}

export const mostPopularTitle = data => {
    return {
        type: MOST_POPULAR_TITLE, 
        payload: data
    }
}

export const mostPopularRate = data => {
    return {
        type: MOST_POPULAR_RATE, 
        payload: data
    }
}

export const mostPopularGenre = data => {
    return {
        type: MOST_POPULAR_GENRE, 
        payload: data
    }
}

export const mostPopularOverview = data => {
    return {
        type: MOST_POPULAR_OVERVIEW, 
        payload: data 
    }
}

export const mostPopularIndex = data => {
    return {
        type: MOST_POPULAR_INDEX, 
        payload: data
    }
}

export const mostPopularResetIndex = () => {
    return {
        type: MOST_POPULAR_RESET_INDEX, 
    }
}

const mostPopularFailure = () => {
    return {
        type: MOST_POPULAR_FAILURE, 
    }
}

const mostPopularRequest = () => {
    return {
        type: MOST_POPULAR_REQUEST, 
    }
}


//api calls 

export const fetchMostPopularData = () => {
    return (dispatch) => {
        dispatch(mostPopularRequest)
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0949161fd6bf6f1127a37c1d3530c80d&language=en-US&page=1')
        .then(res => {
            const info = res.data 

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

            dispatch(mostPopularfrontPic(frontPic))
            dispatch(mostPopularBackPic(backPic))
            dispatch(mostPopularTitle(title))
            dispatch(mostPopularRate(rate))
            dispatch(mostPopularOverview(overview))

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
            dispatch(mostPopularGenre(newGenArr))
        })

        .catch(err => {
            const errorMsg = err.message
            dispatch(mostPopularFailure(errorMsg))
        })
    }
}
