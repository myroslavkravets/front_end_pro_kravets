import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    // Завантажити TODO з сервера
    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/todos');
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = async () => {
        if (!newTodo.trim()) return;
        try {
            const todo = { id: Date.now().toString(), text: newTodo };
            await axios.post('http://localhost:5000/api/todos', todo);
            setTodos([...todos, todo]);
            setNewTodo('');
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    return (
        <div>
            <h1>TODO List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
