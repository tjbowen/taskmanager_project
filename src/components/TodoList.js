import React from 'react';
import ToDoForm from './TodoForm';
import { connect } from 'react-redux';
import {addTodo} from '../actions/todos';
import ToDoListItem from '../components/ToDoListItem';
import{ Todo } from '../actions/todos';
import filterTodos from '../selectors/todos'
import FilterForm from './FilterForm';
import Toggle from './Toggle';


const TodoList = (props) => (
  <div>
    <h1>This is from the To Do list Dashboard</h1>
    <Toggle>
    {
      ({on, toggle}) => (
        <div>
          {on && <ToDoForm 
            buttonText = "Save"
            onSubmit ={(todo)=> {props.dispatch(addTodo(todo))}}
            />}
            <button onClick={toggle}>Add Tasks</button>
        </div>
      )
    }
    
    </Toggle>

    <Toggle>
    {
      ({on, toggle}) => (
        <div>
        {on && <FilterForm />}
        <button onClick={toggle}>Filters</button>
        </div>
      )
    }
    </Toggle>
    
    {props.todos.map((todo) => (
      <div key = {todo.id}>
      <ToDoListItem {...todo}/>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todos, state.filters)
  };
};

export default connect(mapStateToProps)(TodoList);