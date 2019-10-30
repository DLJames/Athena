import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const AppRoot = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(AppRoot, document.getElementById('root'));