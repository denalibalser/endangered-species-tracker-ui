import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import authReducer from './reducers/authReducer'
import speciesReducer from './reducers/speciesReducer' 
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    auth: authReducer, 
    species: speciesReducer 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;