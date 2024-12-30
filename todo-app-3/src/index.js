import React from 'react';
import ReactDOM from 'react-dom/client'; // Змінено на 'react-dom/client'
import { Provider } from 'react-redux'; // Імпортуємо Provider
import store from './store/store'; // Імпортуємо store
import App from './App'; // Імпортуємо App компонент

// Створення кореня для React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
