import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import moment from 'moment';
import testapi from '../apis/testapi';

export const addTodo = (
  {
    description = "",
    note = '',
    dueDate = 0,
    tags = [],
    createDate = moment()
  } ={}
) => ({
  type: 'ADD_TODO',
  todo: {
    id: uuid(),
    description,
    note,
    dueDate,
    tags,
    createDate
  }
});

export const editTodo = (id, updates) => ({
  type: 'EDIT_TODO',
  id,
  updates
});

export const deleteTodo = ({id} = {}) => ({
  type: 'DELETE_TODO',
  id
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id: id
})

export const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

// first attempt at fetch action creator
export const fetchTodos = () => {
  return async (dispatch) => {
    const response = await testapi.get('/express_backend');
    dispatch({ type: 'FETCH_TODOS', payload: response })
  
}}
