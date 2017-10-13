import { combineReducers } from 'redux';
import { counter } from './features/shared/reducers/counter.js';

export default combineReducers({
    counter
});
