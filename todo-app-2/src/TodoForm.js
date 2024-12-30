import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/store';

const TodoForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a new task"
                style={{ padding: '10px', fontSize: '16px', width: '300px' }}
            />
            <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>
                Add
            </button>
        </form>
    );
};

export default TodoForm;
