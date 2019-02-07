import uuid from 'uuid';

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