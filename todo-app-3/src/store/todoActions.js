export const fetchTodosRequest = () => {
    return {
        type: 'FETCH_TODOS_REQUEST', // Дія початку завантаження
    };
};

export const fetchTodosSuccess = (todos) => {
    return {
        type: 'FETCH_TODOS_SUCCESS', // Дія успішного завантаження
        payload: todos, // Отримані задачі
    };
};

export const fetchTodosFailure = (error) => {
    return {
        type: 'FETCH_TODOS_FAILURE', // Дія помилки
        payload: error, // Помилка
    };
};

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchTodosRequest()); // Починаємо завантаження
        fetch('https://jsonplaceholder.typicode.com/todos') // API запит
            .then((response) => response.json()) // Отримуємо дані в форматі JSON
            .then((data) => dispatch(fetchTodosSuccess(data))) // Успішне завантаження
            .catch((error) => dispatch(fetchTodosFailure(error))); // Помилка
    };
};
