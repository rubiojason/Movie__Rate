import { createStore, applyMiddleware } from 'redux'
//import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//import PageReducer from './PageState/PageReducers'
import rootReducer from './RootReducer'

//const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
