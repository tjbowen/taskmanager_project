import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { deleteTodo } from '../actions/todos';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Tag from '../components/Tag';


const ToDoListItem = (props) => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h3 style={{display:'inline-block'}}>{props.description}</h3> </Link>
      <h3 style={{display:'inline-block'}}>- Due Date: {moment(props.dueDate).format('DD/MM/YY')} 
        {props.tags.map((tag) => {
          if (tag.isChecked === true) {
            return (<Tag id={tag.id} key={tag.id}/>)
          }
        })}<span onClick={() => { props.dispatch(deleteTodo({ id: props.id })) }}><FontAwesomeIcon icon={faWindowClose} /></span></h3>
      
   
    <p>{props.note}</p>
  </div>
)

export default connect()(ToDoListItem)
