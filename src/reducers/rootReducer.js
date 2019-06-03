import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import viewReducers from './viewReducer';
import mainReducers from './mainReducer';


const rootReducer = combineReducers({
    view: viewReducers,
    main: mainReducers,
    form: formReducer,
});

export default rootReducer;