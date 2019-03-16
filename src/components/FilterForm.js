import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import {connect} from 'react-redux';
import TagPicker from './TagPicker';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: '',
      startDate: undefined,
      endDate: undefined,
      selectedTags: props.existingTags,
      calendarFocused: null,
      text: '',
      ascending: 1, 
    }
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.setState({
      startDate,
      endDate
    })
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  };
  onTextChange = e => {
    const name = e.target.name
    const filterText = e.target.value;
    this.setState(() => ({ [name]: filterText }))
  };
  onSortByChange = e => {
    const sortBy = e.target.value;
    this.setState(() => ({sortBy}))
  };
  addTag = (e) => {
    let newTag = JSON.parse(e.target.value);
    const isChecked = e.target.checked;
    newTag = { ...newTag, isChecked }
    const newSelectedTags = this.state.selectedTags.filter((tag) => { return tag.description !== newTag.description });
    const newState = [...newSelectedTags, newTag]
    this.setState(() => ({ selectedTags: newState.sort() }))
  };
  
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.filterText}
          onChange={this.onTextChange}
          placeholder="Search"
          name = "filterText"
        />
        <TagPicker addTag={this.addTag} currentTags={this.state.selectedTags}/>
        <p>Sort By</p>
        <select
          value = {this.state.sortBy}
          onChange={this.onSortByChange}
        >
        <option value = "SORT_BY_Due_Date">Due Date</option>
        <option value = "SORT_BY_CREATE_DATE">Create Date</option>
        </select>
        <select
          value = {this.state.ascending === 1 ? "Ascending" : "Descending"}
          onChange={this.onAscendingChange}
        >
        <option value = "1">Ascending </option>
        <option value = "-1">Descending</option>
        </select>
        <DateRangePicker 
        startDate = {this.state.startDate}
        endDate = {this.state.endDate}
        onDatesChange = {this.onDatesChange}
        focusedInput = {this.state.calendarFocused}
        onFocusChange = {this.onFocusChange}
        showClearDates = {true}
        numberOfMonths = {1}
        isOutsideRange = {() => false}
      
      />


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    existingTags: state.tags,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(FilterForm);