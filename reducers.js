import { combineReducers } from 'redux';
import { counters } from './features/shared/reducers/counter.js';

export default combineReducers({
    counters
});
