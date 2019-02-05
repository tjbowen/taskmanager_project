import React from 'react';
import { connect } from 'react-redux';
import Tag from '../components/Tag';
import {NavLink} from 'react-router-dom';

const inputStyle = {
  margin: 0,
  padding: 0,
  width: '3em',
  overflow: 'auto',
  display: 'inline-block'
}

const TagPicker = (props) => (
  <div className="btn-group">
    <button type="button" className="btn btn-primary">Action</button>
    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className="sr-only">Toggle Dropdown</span>
    </button>
    <div className="dropdown-menu">
      {props.existingTags.map((tag) => (
        <div key={tag.description}>
          <input type="checkbox" value={JSON.stringify(tag)} onChange={props.addTag}/> <p style={inputStyle}>{tag.description} </p><Tag color={tag.color} />
        </div>
      ))}
      <button type="button">
        <NavLink to="/tags">Add New Tag</NavLink>
      </button>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    existingTags: state.tags
  };
};

export default connect(mapStateToProps)(TagPicker);