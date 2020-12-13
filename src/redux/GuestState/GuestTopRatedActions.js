import axios from 'axios'
import { TOP_RATED_FRONT_PIC, TOP_RATED_BACK_PIC, TOP_RATED_TITLE, 
         TOP_RATED_RATE, TOP_RATED_GENRE, TOP_RATED_FAILURE, 
         TOP_RATED_REQUEST, TOP_RATED_INDEX, TOP_RATED_OVERVIEW, 
         TOP_RATED_RESET_INDEX } from './GuestTopRatedTypes'


export const topRatedfrontPic = data => {
    return {
        type: TOP_RATED_FRONT_PIC,   
        payload: data
    }
}

export const topRatedBackPic = data => {
    return {
        type: TOP_RATED_BACK_PIC, 
        payload: data
    }
}

export const topRatedTitle = data => {
    return {
        type: TOP_RATED_TITLE, 
        payload: data
    }
}

export const topRatedRate = data => {
    return {
        type: TOP_RATED_RATE, 
        payload: data
    }
}

export const topRatedGenre = data => {
    return {
        type: TOP_RATED_GENRE, 
        payload: data
    }
}

export const topRatedOverview = data => {
    return {
        type: TOP_RATED_OVERVIEW, 
        payload: data 
    }
}

export const topRatedIndex = data => {
    return {
        type: TOP_RATED_INDEX, 
        payload: data
    }
}

export const topRatedResetIndex = () => {
    return {
        type: TOP_RATED_RESET_INDEX, 
    }
}

const topRatedFailure = () => {
    return {
        type: TOP_RATED_FAILURE, 
    }
}

const topRatedRequest = () => {
    return {
        type: TOP_RATED_REQUEST, 
    }
}


//api calls 

export const fetchTopRatedData = () => {
    return (dispatch) => {
        dispatch(topRatedRequest)
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=0949161fd6bf6f1127a37c1d3530c80d&language=en-US&page=1')
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
                title.push(info.results[i].title)
                rate.push(info.results[i].vote_average)
                overview.push(info.results[i].overview)
            }

            dispatch(topRatedfrontPic(frontPic))
            dispatch(topRatedBackPic(backPic))
            dispatch(topRatedTitle(title))
            dispatch(topRatedRate(rate))
            dispatch(topRatedOverview(overview))

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
            dispatch(topRatedGenre(newGenArr))
        })

        .catch(err => {
            const errorMsg = err.message
            dispatch(topRatedFailure(errorMsg))
        })
    }
}
