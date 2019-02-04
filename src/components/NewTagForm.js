import React from 'react';
import {connect} from 'react-redux';
import {addTag} from '../actions/tags';

class NewTagForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      description: props.tag ? props.tag.description : '',
      color: props.tag ? props.tag.color : 'white',
      errorState: '',
    }
  };

  onDescriptionChange =(e) =>{
    const description = e.target.value
    this.setState(() => ({description}))
  };
  onColorChange =(e) =>{
    const color = e.target.value
    this.setState(() => ({color}))
  };


  onSubmit= (e) =>{
    e.preventDefault();
    if( !this.state.description || !this.state.color){
      this.setState(() => ({errorState: "Please set a description and color for your new tag."}));
    }else{
      this.setState(() => ({errorState: ''}));
      this.props.dispatch(addTag({description: this.state.description, color: this.state.color}))
      this.props.history.push('/todos');
    }
  }

  render(){
    return(
    <div >
      {this.state.errorState && <p>{this.state.errorState}</p>}
      <form onSubmit={this.onSubmit}>
        <input type="text"
          placeholder= "Tag Description"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input 
          type = "color"
          value= {this.state.color}
          onChange= {this.onColorChange}
        />
        <button>Add Tag</button>
      </form>
    </div>)
  }
}



export default connect()(NewTagForm);