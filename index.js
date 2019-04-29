import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App/App';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
<<<<<<< HEAD
)
=======
);

>>>>>>> parent of 3a98016... Deleted index.js
