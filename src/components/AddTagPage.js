import React from 'react';
import { connect } from 'react-redux';
import {addTag} from '../actions/tags';
import TagForm from '../components/TagForm';

const AddTag =  (props) => (
  <div>
    <h1>Add a New Category</h1>
    <TagForm 
    onSubmit={(tag) => {
      props.dispatch(addTag(tag));
      props.history.push('/todos');
    }} 
    buttonText="Add Tag"
    />
  </div>
)

export default connect()(AddTag);