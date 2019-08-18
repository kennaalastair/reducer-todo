export const initialState = {
    todoArray: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: Date.now()
        }
    ],
    // todoInput: ""
};

export function reducer(state, action) {
    console.log('action', action);
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state,
                todoArray: [...state.todoArray, newTodo] // state.todoArray.concat(newTodo)
            };
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todoArray: state.todoArray.filter(todo => !todo.completed)
            };
        default:
            return state;
    }
}