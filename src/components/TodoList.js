import React from 'react';
import ToDoForm from './TodoForm';
import { connect } from 'react-redux';
import {addTodo} from '../actions/todos';
import ToDoListItem from '../components/ToDoListItem';
import PropTypes from 'prop-types';
import{ Todo } from '../actions/todos';



const TodoList = (props) => (
  <div>
    <h1>This is from the To Do list Dashboard</h1>
    <ToDoForm 
    buttonText = "Add Todo"
    onSubmit ={(todo)=> {props.dispatch(addTodo(todo))}}
    />
    {props.todos.map((todo) => (
      <div key = {todo.id}>
      <ToDoListItem {...todo}/>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};
const todolist = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

todolist.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(TodoList);