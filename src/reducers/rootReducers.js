import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import viewReducers from './viewReducers';
import mainReducers from './mainReducers';


const rootReducers = combineReducers({
    view: viewReducers, 
    main: mainReducers,
    form: formReducer
});

export default rootReducers;