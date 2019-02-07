import React from 'react';
import TodoForm from './TodoForm';
import {connect} from 'react-redux';
import {editTodo, deleteTodo} from '../actions/todos';

const EditTodoPage = (props) => (
 
<div>
{console.log(props.todo)}
<TodoForm 
 todo = {props.todo}
 buttonText= "Save Changes"
 onSubmit ={(todo) => {
   props.dispatch(editTodo(props.todo.id, todo))
   props.history.push('/todos')
   }}
/>
</div>
)

const mapStateToProps = (state, props) => {
  return {
    todo: state.todos.find((todo) => (todo.id === props.match.params.id))
  };
};

export default connect(mapStateToProps)(EditTodoPage);