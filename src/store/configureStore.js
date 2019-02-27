import {createStore, combineReducers, applyMiddleware} from 'redux';
import filtersReducer from '../reducers/filters';
import todoReducer from '../reducers/todos';
import tagReducer from '../reducers/tags';
import fetchReducer from '../reducers/fetchtodos';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      filters: filtersReducer, 
      todos: todoReducer,
      tags: tagReducer,
      fetch: fetchReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};