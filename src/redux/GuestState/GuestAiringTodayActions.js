import axios from 'axios'
import { AIRING_TODAY_FRONT_PIC, AIRING_TODAY_BACK_PIC, AIRING_TODAY_TITLE, 
         AIRING_TODAY_RATE, AIRING_TODAY_GENRE, AIRING_TODAY_FAILURE, 
         AIRING_TODAY_REQUEST, AIRING_TODAY_INDEX, AIRING_TODAY_OVERVIEW, 
         AIRING_TODAY_RESET_INDEX } from './GuestAiringTodayTypes'


export const airingTodayfrontPic = data => {
    return {
        type: AIRING_TODAY_FRONT_PIC,   
        payload: data
    }
}

export const airingTodayBackPic = data => {
    return {
        type: AIRING_TODAY_BACK_PIC, 
        payload: data
    }
}

export const airingTodayTitle = data => {
    return {
        type: AIRING_TODAY_TITLE, 
        payload: data
    }
}

export const airingTodayRate = data => {
    return {
        type: AIRING_TODAY_RATE, 
        payload: data
    }
}

export const airingTodayGenre = data => {
    return {
        type: AIRING_TODAY_GENRE, 
        payload: data
    }
}

export const airingTodayOverview = data => {
    return {
        type: AIRING_TODAY_OVERVIEW, 
        payload: data 
    }
}

export const airingTodayIndex = data => {
    return {
        type: AIRING_TODAY_INDEX, 
        payload: data
    }
}

export const airingTodayResetIndex = () => {
    return {
        type: AIRING_TODAY_RESET_INDEX, 
    }
}

const airingTodayFailure = () => {
    return {
        type: AIRING_TODAY_FAILURE, 
    }
}

const airingTodayRequest = () => {
    return {
        type: AIRING_TODAY_REQUEST, 
    }
}


//api calls 

export const fetchAiringTodayData = () => {
    return (dispatch) => {
        dispatch(airingTodayRequest)
        axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=0949161fd6bf6f1127a37c1d3530c80d&language=en-US&page=1')
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

            dispatch(airingTodayfrontPic(frontPic))
            dispatch(airingTodayBackPic(backPic))
            dispatch(airingTodayTitle(title))
            dispatch(airingTodayRate(rate))
            dispatch(airingTodayOverview(overview))

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
            dispatch(airingTodayGenre(newGenArr))
        })

        .catch(err => {
            const errorMsg = err.message
            dispatch(airingTodayFailure(errorMsg))
        })
    }
}
