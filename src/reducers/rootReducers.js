import { combineReducers } from 'react-redux';
import viewReducers from './viewnReducers';
import mainReducers from './mainReducers';

const rootReducers = combineReducers({
    viewReducers, 
    mainReducers
});

export default rootReducers;