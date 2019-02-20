import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

export const addTodo = (
  {
    description = "",
    note = '',
    dueDate = 0,
    tags = []
  } ={}
) => ({
  type: 'ADD_TODO',
  todo: {
    id: uuid(),
    description,
    note,
    dueDate,
    tags
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