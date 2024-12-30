import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        console.log('Кнопка натиснута');
        setIsDarkTheme(!isDarkTheme);
    };

    // Лог для діагностики рендерингу
    console.log('Рендеринг кнопки:', isDarkTheme);

    return (
        <div className={isDarkTheme ? 'dark' : 'light'}>
            <header>
                <nav>
                    <Link to="/">Головна</Link>
                    <Link to="/contacts">Контакти</Link>
                    <Link to="/about">Про мене</Link>
                </nav>

                {/* Кнопка перемикання теми */}
                <button onClick={toggleTheme}>
                    {isDarkTheme ? 'Світла тема' : 'Темна тема'}
                </button>
            </header>

            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </ErrorBoundary>
        </div>
    );
}

export default App;
