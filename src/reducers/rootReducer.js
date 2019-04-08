import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import viewReducers from './viewReducer';
import mainReducers from './mainReducer';
import resultReducers from './resultReducer';


const rootReducer = combineReducers({
    view: viewReducers, 
    main: mainReducers,
    result: resultReducers,
    form: formReducer,
});

export default rootReducer;