import {createStore, combineReducers} from 'redux';
import filtersReducer from '../reducers/filters';
import todoReducer from '../reducers/todos';
import tagReducer from '../reducers/tags';

export default () => {
  const store = createStore(
    combineReducers({
      filters: filtersReducer, 
      todos: todoReducer,
      tags: tagReducer
    })
    );
    return store;
};