import { combineReducers } from 'redux';
import { counters } from './features/shared/reducers/counter.js';
import { settings } from './features/settings/reducers';

export default combineReducers({
    counters,
    settings
});
