import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = configureStore(applyMiddleware(thunk));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

store.dispatch({type: 'SET_TEXT_FILTER', text:"w"});

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
