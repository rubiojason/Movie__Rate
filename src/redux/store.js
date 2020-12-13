import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import PageReducer from './PageState/PageReducers'
import rootReducer from './RootReducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

/*const persistConfig = {
    key: 'root',
    storage: storage,
    //stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};*/

//const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store
