const fetchedTodosDefaultState = {
        description: "",
        // dueDate: 155025360000,
        id: 5,
        notes: "",
        tags: []
}

export default (state = fetchedTodosDefaultState, action) => {
    switch (action.type){
        case "FETCH_TODOS":
            return action.payload;
        default:
            return state;
    }
} 