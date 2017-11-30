
import { combineReducers } from 'redux';
import userReducer from './userReducer.js';

// @combineReducersthis is what mapStoreToProps takes
// @mapStoreToProps: makes available the userState from our redux state 
// @The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore. 
export default combineReducers({userReducer: userReducer})