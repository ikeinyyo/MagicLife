import { combineReducers } from 'redux';
import { counter } from './features/counter/reducers.js';

export default combineReducers({
    counter
});
