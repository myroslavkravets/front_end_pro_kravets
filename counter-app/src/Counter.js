import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const value = useSelector((state) => state.value);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Value: {value}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })} style={{ marginLeft: '10px' }}>
                -
            </button>
        </div>
    );
};

export default Counter;
