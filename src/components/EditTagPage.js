import React from 'react';
import TagForm from './TagForm';
import { connect } from 'react-redux';
import { editTag } from '../actions/tags';

const EditTagPage = (props) => (
  <div>
    <TagForm
      tag={props.tag}
      buttonText="Save Changes"
      onSubmit={(tag) => {
        props.dispatch(editTag(props.tag.id, tag))
        props.history.push('/todos')
      }}
    />
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    tag: state.tags.find((tag) => (tag.id === props.match.params.id))
  };
};

export default connect(mapStateToProps)(EditTagPage);