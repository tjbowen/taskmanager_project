import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import {connect} from 'react-redux';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: '',
      startDate: undefined,
      endDate: undefined,
      selectedTags: props.existingTags,
      calendarFocused: null,
      filterText: ''
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
    const filterText = e.target.value;
    this.setState(() => ({ filterText }))
  };
  onSortByChange = e => {
    const sortBy = e.target.value;
    this.setState(() => ({sortBy}))
  };
  
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.filterText}
          onChange={this.onTextChange}
          placeholder="Search"
        />
        <select
          value = {this.state.sortBy}
          onChange={this.onSortByChange}
        >
        <option value = "SORT_BY_Due_Date">Due Date</option>
        <option value = "SORT_BY_CREATE_DATE">Create Date</option>
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