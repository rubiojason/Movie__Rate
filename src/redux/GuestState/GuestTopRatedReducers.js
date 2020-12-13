import { TOP_RATED_FRONT_PIC, TOP_RATED_BACK_PIC, TOP_RATED_TITLE, 
    TOP_RATED_RATE, TOP_RATED_GENRE, TOP_RATED_FAILURE, 
    TOP_RATED_REQUEST, TOP_RATED_INDEX, TOP_RATED_OVERVIEW, 
    TOP_RATED_RESET_INDEX } from './GuestTopRatedTypes'


const initialState = {
    topratedfailure: '', 
    topratedloading: false, 

    topratedfrontpic: '',
    topratedbackpic: '', 
    topratedtitle: '', 
    topratedrate: '',
    topratedgenre: '',
    topratedoverview: '', 

    topratedindex: '', 
}  

 export const topRatedReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case TOP_RATED_FAILURE: 
            return {
                topratedfailure: action.payload, 
                topratedloading: false, 
            }
        
        case TOP_RATED_REQUEST: 
            return {
                topratedloading: true, 
                topratedfailure: '', 
            }

        case TOP_RATED_FRONT_PIC: 
            return {
                ...state, 
                topratedfrontpic: action.payload, 
                topratedfailure: '', 
                topratedloading: false, 
            }

        case TOP_RATED_BACK_PIC: 
            return {
                ...state, 
                topratedbackpic: action.payload, 
                topratedfailure: '', 
                topratedloading: false, 
            }

        case TOP_RATED_TITLE: 
            return {
                ...state, 
                topratedtitle: action.payload, 
                topratedfailure: '', 
                topratedloading: false, 
            }

        case TOP_RATED_RATE: 
            return {
                ...state, 
                topratedrate: action.payload, 
                topratedfailure: '', 
                topratedloading: false, 
            }
        
        case TOP_RATED_GENRE: 
            return {
                ...state, 
                topratedgenre: action.payload, 
                topratedfailure: '', 
                topratedloading: false, 
            }

        case TOP_RATED_OVERVIEW: 
            return {
                ...state, 
                topratedoverview: action.payload, 
                topratedfailure: '', 
                topratedloading: false, 
            }
        
        case TOP_RATED_INDEX: 
            return {
                ...state, 
                topratedindex: action.payload, 
                topratedfailure: '', 
                topratedloading: false, 
            }
        
        case TOP_RATED_RESET_INDEX: 
            return {
                ...state, 
                topratedindex: '', 
            }
        
        default: return state 
    }
}

export default topRatedReducer
