const defaultReducerState =[];

export default (state = defaultReducerState, action) => {
  switch(action.type){
    case 'ADD_TAG':
      return [
        ...state,
        action.tag
      ];
      case 'EDIT_TAG':
        return state.map((tag) => {
          if(tag.id === action.id){
            return {
            ...tag,
            ...action.updates
          }}else{
            return tag; 
          }});
      case 'DELETE_TAG':
        return[
          state.filter(({description}) => description !== action.description)
        ]
      default:
        return state;
  }
}