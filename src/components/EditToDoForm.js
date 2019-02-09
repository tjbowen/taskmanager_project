import React from 'react';
import TodoForm from './TodoForm';
import {connect} from 'react-redux';
import {editTodo} from '../actions/todos';

const EditTodoPage = (props) => (
 
<div>
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