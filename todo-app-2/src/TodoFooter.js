import React from 'react';
import { useSelector } from 'react-redux';

const TodoFooter = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <div>
            <p>Total tasks: {todos.length}</p>
        </div>
    );
};

export default TodoFooter;
