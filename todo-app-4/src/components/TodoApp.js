import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, loadTodos, toggleComplete, removeTodo, clearTodos, editTodo } from '../redux/todoSlice';

const TodoApp = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const loading = useSelector(state => state.todos.loading);

    const [newTodoText, setNewTodoText] = useState('');
    const [editText, setEditText] = useState('');
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        dispatch(loadTodos()); // Завантажуємо TODO при першому рендері
    }, [dispatch]);

    const handleAdd = () => {
        if (newTodoText.trim()) {
            const newTodo = { id: Date.now(), text: newTodoText, completed: false };
            dispatch(addTodo(newTodo));
            setNewTodoText('');
        }
    };

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id)); // Відмічаємо як виконану
    };

    const handleRemove = (id) => {
        dispatch(removeTodo(id)); // Видаляємо завдання
    };

    const handleEdit = () => {
        if (editText.trim()) {
            dispatch(editTodo({ id: editingId, text: editText }));
            setEditText('');
            setEditingId(null);
        }
    };

    const handleClear = () => {
        dispatch(clearTodos()); // Очищаємо всі задачі
    };

    return (
        <div>
            <h1>Todo List</h1>

            {loading && <p>Loading...</p>}

            <input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="Add new todo"
            />
            <button onClick={handleAdd}>Add Todo</button>

            {editingId && (
                <div>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        placeholder="Edit todo"
                    />
                    <button onClick={handleEdit}>Save</button>
                </div>
            )}

            <button onClick={handleClear}>Clear All</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => handleToggleComplete(todo.id)}
            >
              {todo.text}
            </span>
                        <button onClick={() => handleRemove(todo.id)}>Remove</button>
                        <button onClick={() => { setEditingId(todo.id); setEditText(todo.text); }}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
