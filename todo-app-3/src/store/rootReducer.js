import { combineReducers } from 'redux';
import todoReducer from './todoReducer'; // Імпортуємо наш редюсер

const rootReducer = combineReducers({
    todos: todoReducer, // Об'єднуємо редюсери
});

export default rootReducer;
