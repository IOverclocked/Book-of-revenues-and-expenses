import { combineReducers } from 'redux';
import viewReducers from './viewReducer';
import mainReducers from './mainReducer';

/* eslint-disable no-underscore-dangle */
const rootReducer = combineReducers(
  {
    view: viewReducers,
    main: mainReducers,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default rootReducer;
