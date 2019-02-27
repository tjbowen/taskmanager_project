

const filtersReducerDefaultState = {
  text: '',
  note: '',
  dueDate: undefined,
  createDate: undefined,
  ascending: true,
  startDate: undefined,
  endDate: undefined,
  tags: []
}

export default (state = filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return{
        ...state,
        text: action.text
      }
    case 'SORT_BY_CREATE_DATE':
      return{
        ...state,
        sortBy: 'createDate'
      }
    case 'SORT_BY_DUE_DATE':
      return{
        ...state,
        sortBy: 'dueDate'
      }
    case 'SORT_BY_ASCENDING':
      return {
        ...state,
        ascending: 1
      }
    case 'SORT_BY_DESCENDING':
      return{
        ...state,
        ascending: -1
      }
    case 'SET_START_DATE':
    return {
      ...state,
      startDate: action.startDate
    }
    case 'SET_END_DATE':
    return {
      ...state,
      endDate: action.endDate
    }

    default:
    return{
      ...state
    }
  }
};