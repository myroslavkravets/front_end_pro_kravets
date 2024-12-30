const initialState = {
    todos: [],
    loading: false,
    error: '',
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TODOS_REQUEST':
            return {
                ...state,
                loading: true, // Починаємо завантаження
            };
        case 'FETCH_TODOS_SUCCESS':
            return {
                ...state,
                loading: false,
                todos: action.payload, // Оновлюємо список задач
            };
        case 'FETCH_TODOS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload, // Оновлюємо помилку
            };
        default:
            return state;
    }
};

export default todoReducer;
