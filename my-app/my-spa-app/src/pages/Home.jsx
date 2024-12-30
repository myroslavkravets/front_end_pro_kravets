import React, { useState } from 'react';

function Home() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const addTodo = () => {
        if (task) {
            setTodos([...todos, task]);
            setTask('');
        }
    };

    return (
        <div>
            <h1>Список TODO</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Нова задача"
            />
            <button onClick={addTodo}>Додати</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;