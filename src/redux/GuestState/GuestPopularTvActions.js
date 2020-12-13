import axios from 'axios'
import { MOST_POPULAR_TV_FRONT_PIC, MOST_POPULAR_TV_BACK_PIC, MOST_POPULAR_TV_TITLE, 
         MOST_POPULAR_TV_RATE, MOST_POPULAR_TV_GENRE, MOST_POPULAR_TV_FAILURE, 
         MOST_POPULAR_TV_REQUEST, MOST_POPULAR_TV_INDEX, MOST_POPULAR_TV_OVERVIEW, 
         MOST_POPULAR_TV_RESET_INDEX } from './GuestPopularTvTypes'


export const mostPopularTvfrontPic = data => {
    return {
        type: MOST_POPULAR_TV_FRONT_PIC,   
        payload: data
    }
}

export const mostPopularTvBackPic = data => {
    return {
        type: MOST_POPULAR_TV_BACK_PIC, 
        payload: data
    }
}

export const mostPopularTvTitle = data => {
    return {
        type: MOST_POPULAR_TV_TITLE, 
        payload: data
    }
}

export const mostPopularTvRate = data => {
    return {
        type: MOST_POPULAR_TV_RATE, 
        payload: data
    }
}

export const mostPopularTvGenre = data => {
    return {
        type: MOST_POPULAR_TV_GENRE, 
        payload: data
    }
}

export const mostPopularTvOverview = data => {
    return {
        type: MOST_POPULAR_TV_OVERVIEW, 
        payload: data 
    }
}

export const mostPopularTvIndex = data => {
    return {
        type: MOST_POPULAR_TV_INDEX, 
        payload: data
    }
}

export const mostPopularTvResetIndex = () => {
    return {
        type: MOST_POPULAR_TV_RESET_INDEX, 
    }
}

const mostPopularTvFailure = () => {
    return {
        type: MOST_POPULAR_TV_FAILURE, 
    }
}

const mostPopularTvRequest = () => {
    return {
        type: MOST_POPULAR_TV_REQUEST, 
    }
}


//api calls 

export const fetchMostPopularTvData = () => {
    return (dispatch) => {
        dispatch(mostPopularTvRequest)
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=0949161fd6bf6f1127a37c1d3530c80d&language=en-US&page=1')
        .then(res => {
            const info = res.data 

            console.log('helllolololololo')
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
                title.push(info.results[i].name)
                rate.push(info.results[i].vote_average)
                overview.push(info.results[i].overview)
            }

            dispatch(mostPopularTvfrontPic(frontPic))
            dispatch(mostPopularTvBackPic(backPic))
            dispatch(mostPopularTvTitle(title))
            dispatch(mostPopularTvRate(rate))
            dispatch(mostPopularTvOverview(overview))

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
            dispatch(mostPopularTvGenre(newGenArr))
        })

        .catch(err => {
            const errorMsg = err.message
            dispatch(mostPopularTvFailure(errorMsg))
        })
    }
}
