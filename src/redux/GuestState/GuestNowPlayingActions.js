import axios from 'axios'
import { NOW_PLAYING_FRONT_PIC, NOW_PLAYING_BACK_PIC, NOW_PLAYING_TITLE, 
         NOW_PLAYING_RATE, NOW_PLAYING_GENRE, NOW_PLAYING_FAILURE, 
         NOW_PLAYING_REQUEST, NOW_PLAYING_INDEX, NOW_PLAYING_OVERVIEW, 
         NOW_PLAYING_RESET_INDEX } from './GuestNowPlayingTypes'


export const nowPlayingfrontPic = data => {
    return {
        type: NOW_PLAYING_FRONT_PIC,   
        payload: data
    }
}

export const nowPlayingBackPic = data => {
    return {
        type: NOW_PLAYING_BACK_PIC, 
        payload: data
    }
}

export const nowPlayingTitle = data => {
    return {
        type: NOW_PLAYING_TITLE, 
        payload: data
    }
}

export const nowPlayingRate = data => {
    return {
        type: NOW_PLAYING_RATE, 
        payload: data
    }
}

export const nowPlayingGenre = data => {
    return {
        type: NOW_PLAYING_GENRE, 
        payload: data
    }
}

export const nowPlayingOverview = data => {
    return {
        type: NOW_PLAYING_OVERVIEW, 
        payload: data 
    }
}

export const nowPlayingIndex = data => {
    return {
        type: NOW_PLAYING_INDEX, 
        payload: data
    }
}

export const nowPlayingResetIndex = () => {
    return {
        type: NOW_PLAYING_RESET_INDEX, 
    }
}

const nowPlayingFailure = () => {
    return {
        type: NOW_PLAYING_FAILURE, 
    }
}

const nowPlayingRequest = () => {
    return {
        type: NOW_PLAYING_REQUEST, 
    }
}


//api calls 

export const fetchNowPlayingData = () => {
    return (dispatch) => {
        dispatch(nowPlayingRequest)
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0949161fd6bf6f1127a37c1d3530c80d&language=en-US&page=1')
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

            dispatch(nowPlayingfrontPic(frontPic))
            dispatch(nowPlayingBackPic(backPic))
            dispatch(nowPlayingTitle(title))
            dispatch(nowPlayingRate(rate))
            dispatch(nowPlayingOverview(overview))

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
            dispatch(nowPlayingGenre(newGenArr))
        })

        .catch(err => {
            const errorMsg = err.message
            dispatch(nowPlayingFailure(errorMsg))
        })
    }
}
