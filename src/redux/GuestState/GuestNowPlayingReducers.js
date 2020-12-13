import { NOW_PLAYING_FRONT_PIC, NOW_PLAYING_BACK_PIC, NOW_PLAYING_TITLE, 
    NOW_PLAYING_RATE, NOW_PLAYING_GENRE, NOW_PLAYING_FAILURE, 
    NOW_PLAYING_REQUEST, NOW_PLAYING_INDEX, NOW_PLAYING_OVERVIEW, 
    NOW_PLAYING_RESET_INDEX } from './GuestNowPlayingTypes'


const initialState = {
    nowplayfailure: '', 
    nowplayloading: false,  

    nowplayfrontpic: '',
    nowplaybackpic: '', 
    nowplaytitle: '', 
    nowplayrate: '',
    nowplaygenre: '',
    nowplayoverview: '', 

    nowplayindex: '', 
}  

 export const nowPlayingReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case NOW_PLAYING_FAILURE: 
            return {
                nowplayfailure: action.payload, 
                nowplayloading: false, 
            }
        
        case NOW_PLAYING_REQUEST: 
            return {
                nowplayloading: true, 
                nowplayfailure: '', 
            }

        case NOW_PLAYING_FRONT_PIC: 
            return {
                ...state, 
                nowplayfrontpic: action.payload, 
                nowplayfailure: '', 
                nowplayloading: false, 
            }

        case NOW_PLAYING_BACK_PIC: 
            return {
                ...state, 
                nowplaybackpic: action.payload, 
                nowplayfailure: '', 
                nowplayloading: false, 
            }

        case NOW_PLAYING_TITLE: 
            return {
                ...state, 
                nowplaytitle: action.payload, 
                nowplayfailure: '', 
                nowplayloading: false, 
            }

        case NOW_PLAYING_RATE: 
            return {
                ...state, 
                nowplayrate: action.payload, 
                nowplayfailure: '', 
                nowplayloading: false, 
            }
        
        case NOW_PLAYING_GENRE: 
            return {
                ...state, 
                nowplaygenre: action.payload, 
                nowplayfailure: '', 
                nowplayloading: false, 
            }

        case NOW_PLAYING_OVERVIEW: 
            return {
                ...state, 
                nowplayoverview: action.payload, 
                nowplayfailure: '', 
                nowplayloading: false, 
            }
        
        case NOW_PLAYING_INDEX: 
            return {
                ...state, 
                nowplayindex: action.payload, 
                nowplayfailure: '', 
                nowplayloading: false, 
            }
        
        case NOW_PLAYING_RESET_INDEX: 
            return {
                ...state, 
                nowplayindex: '', 
            }
        
        default: return state 
    }
}

export default nowPlayingReducer
