//TODO reducers

const defaultReducerState =[];

export default (state = defaultReducerState, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
      case 'EDIT_TODO':
        return state.map((todo) => {
          if(todo.id === action.id){
            return {
            ...todo,
            ...action.updates
          }}else{
            return todo;
            
          }});
    case 'DELETE_TODO':
          return state.filter(({id}) => id !== action.id)
    case 'TOGGLE_TODO':
          return state.map(
            todo => todo.id === action.id ? 
                    {...todo, completed: !todo.completed}:
                    todo
          )      
    default:
      return state;

  }
};