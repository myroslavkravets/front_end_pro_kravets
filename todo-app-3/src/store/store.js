import { configureStore } from '@reduxjs/toolkit'; // Імпортуємо configureStore з @reduxjs/toolkit
import todoReducer from './todoReducer'; // Імпортуємо наш редюсер

const store = configureStore({
    reducer: {
        todos: todoReducer, // Використовуємо редюсер для todos
    },
});

export default store; // Експортуємо store

