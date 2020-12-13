import { AIRING_TODAY_FRONT_PIC, AIRING_TODAY_BACK_PIC, AIRING_TODAY_TITLE, 
    AIRING_TODAY_RATE, AIRING_TODAY_GENRE, AIRING_TODAY_FAILURE, 
    AIRING_TODAY_REQUEST, AIRING_TODAY_INDEX, AIRING_TODAY_OVERVIEW, 
    AIRING_TODAY_RESET_INDEX } from './GuestAiringTodayTypes'


const initialState = {
    airingtodayfailure: '', 
    airingtodayloading: false,  

    airingtodayfrontpic: '',
    airingtodaybackpic: '', 
    airingtodaytitle: '', 
    airingtodayrate: '',
    airingtodaygenre: '',
    airingtodayoverview: '', 

    airingtodayindex: '', 
}  

 export const airingTodayReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case AIRING_TODAY_FAILURE: 
            return {
                airingtodayfailure: action.payload, 
                airingtodayloading: false, 
            }
        
        case AIRING_TODAY_REQUEST: 
            return {
                airingtodayloading: true, 
                airingtodayfailure: '', 
            }

        case AIRING_TODAY_FRONT_PIC: 
            return {
                ...state, 
                airingtodayfrontpic: action.payload, 
                airingtodayfailure: '', 
                airingtodayloading: false, 
            }

        case AIRING_TODAY_BACK_PIC: 
            return {
                ...state, 
                airingtodaybackpic: action.payload, 
                airingtodayfailure: '', 
                airingtodayloading: false, 
            }

        case AIRING_TODAY_TITLE: 
            return {
                ...state, 
                airingtodaytitle: action.payload, 
                airingtodayfailure: '', 
                airingtodayloading: false, 
            }

        case AIRING_TODAY_RATE: 
            return {
                ...state, 
                airingtodayrate: action.payload, 
                airingtodayfailure: '', 
                airingtodayloading: false, 
            }
        
        case AIRING_TODAY_GENRE: 
            return {
                ...state, 
                airingtodaygenre: action.payload, 
                airingtodayfailure: '', 
                airingtodayloading: false, 
            }

        case AIRING_TODAY_OVERVIEW: 
            return {
                ...state, 
                airingtodayoverview: action.payload, 
                airingtodayfailure: '', 
                airingtodayloading: false, 
            }
        
        case AIRING_TODAY_INDEX: 
            return {
                ...state, 
                airingtodayindex: action.payload, 
                airingtodayfailure: '', 
                airingtodayloading: false, 
            }
        
        case AIRING_TODAY_RESET_INDEX: 
            return {
                ...state, 
                airingtodayindex: '', 
            }
        
        default: return state 
    }
}

export default airingTodayReducer
