import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import TagPicker from './TagPicker';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.todo ? props.todo.description : '',
      note: props.todo ? props.todo.note : '',
      dueDate: props.todo ? moment(props.todo.dueDate) : undefined,
      errorState: '',
      selectedTags: props.todo ? props.todo.tags : props.existingTags,
      calendarFocused: false,
    }
  };

  

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(() => ({[name] : value}))
  }
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onDateChange = (dueDate) => {
    this.setState(() => ({ dueDate }));
  };
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }));
  };
  addTag = (e) => {
    let newTag = JSON.parse(e.target.value);
    const isChecked = e.target.checked;
    newTag = { ...newTag, isChecked }
    const newSelectedTags = this.state.selectedTags.filter((tag) => { return tag.description !== newTag.description });
    const newState = [...newSelectedTags, newTag]
    this.setState(() => ({ selectedTags: newState.sort() }))
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.dueDate) {
      this.setState(() => ({ errorState: "Please provide a description and due date." }))
    } else {
      this.setState({ errorState: '' });
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        dueDate: this.state.dueDate.valueOf(),
        tags: this.state.selectedTags
      })
      this.setState(() => ({
        description: '',
        note: '',
        dueDate: undefined,
        selectedTags: []
      }))
    };
  };

  componentDidMount(){
    this.callBackendExpress()
    .then(res => console.log(res.express))
    .catch(err => console.log(err))
  };

  callBackendExpress = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;

  };

  render() {
    return (
      <div>
        {this.state.errorState && <p>{this.state.errorState}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="To-Do Item"
            value={this.state.description}
            onChange={this.handleChange}
            name="description"
          />
          <TagPicker addTag={this.addTag} currentTags={this.state.selectedTags}/>
          <SingleDatePicker
            date={this.state.dueDate}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
          />
          <textarea
            type="text"
            style={{ display: 'block' }}
            placeholder="Add an optional note"
            value={this.state.note}
            onChange={this.handleChange}
            name="note"
          >
          </textarea>
          <button>{this.props.buttonText}</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    existingTags: state.tags
  };
};

export default connect(mapStateToProps)(TodoForm);