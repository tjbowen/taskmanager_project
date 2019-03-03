
const initialState = {
        description: "",
        dueDate: null,
        id: null,
        notes: "",
        tags: []
};

export default (state = initialState, action) => {
    switch (action.type){
        case "FETCH_TODOS":
            return action.payload;
        default:
            return state;
    }
} 