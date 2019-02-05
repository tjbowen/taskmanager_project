import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {addTag} from './actions/tags';
import {addTodo} from './actions/todos';
import AppRouter from './routers/AppRouter';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  console.log("Todos", state.todos);
  console.log("Filters", state.filters);
  console.log("tags", state.tags)
});

store.dispatch(addTodo({description: "test"}))
store.dispatch(addTag({description: "tag", color: "blue"}));
store.dispatch(addTag({description: "tag2", color: "red"}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
