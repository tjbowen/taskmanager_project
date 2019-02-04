import React from 'react';
import ToDoForm from '../components/ToDoform';
import { connect } from 'react-redux';
import {addTodo} from '../actions/todos';
import ToDoListItem from '../components/ToDoListItem';


const TodoList = (props) => (
  <div>
    <h1>This is from the To Do list Dashboard</h1>
    <ToDoForm 
    buttonText = "Add Todo"
    onSubmit ={(todo)=> {props.dispatch(addTodo(todo))}}
    />
    {props.todos.map((todo) => (
      <div>
      <ToDoListItem key={todo.id} {...todo}/>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);