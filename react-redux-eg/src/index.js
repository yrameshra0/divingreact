import React from 'react'
import App from './components/app';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>, document.querySelector('.container'));

