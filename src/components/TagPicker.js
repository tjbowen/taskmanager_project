import React from 'react';
import { connect } from 'react-redux';
import Tag from '../components/Tag';
import {NavLink} from 'react-router-dom';

const inputStyle = {
  margin: 0,
  padding: 0,
  width: '3em',
  display: 'inline-block'
}

const isChecked = (currentTags, alteredTag) => {
  for(let i = 0; i < currentTags.length; i++){
    if (currentTags[i].description === alteredTag.description){
      return currentTags[i].isChecked
    }
  }
}

const TagPicker = (props) => (
  <div className="dropdown" style={{display: 'inline-block'}}>
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Categories
  </button>
  <div className="dropdown-menu">
      {props.existingTags.map((tag) =>{
      return (
        <div key={tag.description}>
          <input type="checkbox" checked={isChecked(props.currentTags, tag)} value={JSON.stringify(tag)} onChange={props.addTag}/> <p style={inputStyle}>{tag.description} </p><Tag color={tag.color} />
        </div>
      )})}
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