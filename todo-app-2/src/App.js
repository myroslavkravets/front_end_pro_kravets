import React from 'react';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

const App = () => (
    <div style={{ margin: '20px', fontFamily: 'Arial' }}>
      <h1>TODO List</h1>
      <TodoForm />
      <TodoFooter />
    </div>
);

export default App;
