import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faWindowClose} from  '@fortawesome/free-solid-svg-icons';
import {deleteTodo} from '../actions/todos';
import {connect} from 'react-redux';
import moment from 'moment';
import Tag from '../components/Tag';


const ToDoListItem = (props) => (
  <div>
    <h3>{props.description} - Due Date: {moment(props.dueDate).format('DD/MM/YY')} <span onClick ={() => {props.dispatch(deleteTodo({id: props.id}))}}>    
    {props.tags.map((tag) => {
      if(tag.isChecked === true){
        return(<Tag color={tag.color}/>)
      }
    })}<FontAwesomeIcon icon={faWindowClose} /></span>
</h3>
    <p>{props.note}</p>
  </div>
)

export default connect()(ToDoListItem)
