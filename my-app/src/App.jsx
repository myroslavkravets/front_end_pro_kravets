import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

const App = () => {
    return (
        <Router>
            <div>
                <header>
                    <nav>
                        <Link to="/">Головна</Link>
                        <Link to="/contacts">Контакти</Link>
                        <Link to="/about">Про мене</Link>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
