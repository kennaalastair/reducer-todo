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
        default:
            return state;
    }
}