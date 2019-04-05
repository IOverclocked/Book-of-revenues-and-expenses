import { combineReducers } from 'redux';
import view from './viewReducers';
import main from './mainReducers';

const rootReducers = combineReducers({
    view, 
    main
});

export default rootReducers;