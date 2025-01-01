import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        },
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
        loadTodos: (state) => {
            state.todos = [
                { id: 1, text: 'Learn React', completed: false },
                { id: 2, text: 'Learn Redux', completed: false },
            ];
        },
        clearTodos: (state) => {
            state.todos = [];
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    addTodo,
    removeTodo,
    toggleComplete,
    setTodos,
    loadTodos,
    editTodo,
    clearTodos,
    setLoading,
    setError,
} = todoSlice.actions;

export default todoSlice.reducer;
