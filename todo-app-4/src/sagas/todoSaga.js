import { call, put, takeLatest } from 'redux-saga/effects';
import { addTodo, setTodos, setLoading, setError, clearTodos } from '../redux/todoSlice';

const fetchTodos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: 'Learn Redux', completed: false },
                { id: 2, text: 'Write some code', completed: false },
            ]);
        }, 1000);
    });
};

function* loadTodos() {
    try {
        yield put(setLoading(true));
        const todos = yield call(fetchTodos);
        yield put(setTodos(todos));
    } catch (error) {
        yield put(setError('Failed to load todos'));
    } finally {
        yield put(setLoading(false));
    }
}

function* addTodoSaga(action) {
    try {
        yield put(addTodo(action.payload));
    } catch (error) {
        yield put(setError('Failed to add todo'));
    }
}

function* clearTodosSaga() {
    try {
        yield put(clearTodos());
    } catch (error) {
        yield put(setError('Failed to clear todos'));
    }
}

export default function* todoSaga() {
    yield takeLatest('todos/loadTodos', loadTodos);
    yield takeLatest('todos/addTodo', addTodoSaga);
    yield takeLatest('todos/clearTodos', clearTodosSaga);
}
