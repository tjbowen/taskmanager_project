import React from 'react';
import { connect } from 'react-redux';
import Tag from '../components/Tag';
import {NavLink, Link} from 'react-router-dom';

const inputStyle = {
  margin: 0,
  padding: 0,
  width: 'auto',
  display: 'inline-block'
}

const isChecked = (currentTags, alteredTag) => {
  for(let i = 0; i < currentTags.length; i++){
    if (currentTags[i].description === alteredTag.description){
      return currentTags[i].isChecked
    }
  }
}

const dropMenuStyle = {
  width: 'auto',
}




const TagPicker = (props) => (
  <div className="dropdown" style={{display: 'inline-block'}}>
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Categories
  </button>
  <div className="dropdown-menu" style={{padding: '20px'}} >
      {props.existingTags.map((tag) =>{
      return (
        <div key={tag.description} style={dropMenuStyle}>
        <div style={{width: 'auto'}}>
          <input type="checkbox" checked={isChecked(props.currentTags, tag)} value={JSON.stringify(tag)} onChange={props.addTag}/> <p style={inputStyle}>
          <Link to={`/edit/tag/${tag.id}`}>{tag.description} </Link></p>
          <Tag id={tag.id} />
          </div>
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
    existingTags: state.tags,
  };
};

export default connect(mapStateToProps)(TagPicker);