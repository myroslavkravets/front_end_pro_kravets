const express = require('express');
const router = express.Router();

let todos = []; // Масив для зберігання TODO

router.get('/', (req, res) => {
    res.json(todos);
});

router.post('/', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).json(todo);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedTodo = req.body;
    todos = todos.map(todo => (todo.id === id ? updatedTodo : todo));
    res.json(updatedTodo);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).send();
});

module.exports = router;
