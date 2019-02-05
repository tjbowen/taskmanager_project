
export const setTextFilter = (text = "") => ({
  type: 'SET_FILTER_TEXT',
  text
});

export const sortByDate = () => ({ type: 'SORT_BY_DATE' });

export const sortByAscending = () => ({ type: 'SORT_BY_ASCENDING' });

export const sortByDescending = () => ({ type: 'SORT_BY_DESCENDING' });

export const sortByCreateDate = () => ({type: 'SORT_BY_CREATE_DATE'});

//SET_START_DATE
export const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

//sET_END_DATE
export const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});

export const sortByDueDate = (dueDate = undefined) => ({
  type: 'SORT_BY_DUE_DATE',
  dueDate
});


