import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload });
        },
    },
});

export const { addTodo } = todosSlice.actions;

const store = configureStore({
    reducer: {
        todos: todosSlice.reducer,
    },
});

export default store;
