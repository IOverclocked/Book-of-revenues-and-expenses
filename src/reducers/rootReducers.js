import { combineReducers } from 'redux';
import viewReducers from './viewReducers';
import mainReducers from './mainReducers';

const rootReducers = combineReducers({
    viewReducers, 
    mainReducers
});

export default rootReducers;