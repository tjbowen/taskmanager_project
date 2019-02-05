const defaultReducerState =[];

export default (state = defaultReducerState, action) => {
  switch(action.type){
    case 'ADD_TAG':
      return [
        ...state,
        action.tag
      ];
      case 'DELETE_TAG':
        return[
          state.filter(({description}) => description !== action.description)
        ]
      default:
        return state;
  }
}