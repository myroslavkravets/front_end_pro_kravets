import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './store/todoActions'; // Імпортуємо дії

const App = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos); // Отримуємо стан з Redux

  useEffect(() => {
    dispatch(fetchTodos()); // Завантажуємо задачі при монтуванні компонента
  }, [dispatch]);

  if (loading) return <p>Loading...</p>; // Під час завантаження
  if (error) return <p>Error: {error}</p>; // Якщо сталася помилка

  return (
      <div style={{ margin: '20px' }}>
        <h1>Todo List</h1>
        <ul>
          {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li> // Виводимо список задач
          ))}
        </ul>
      </div>
  );
};

export default App;
