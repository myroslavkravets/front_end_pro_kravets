import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo('');
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Todo List
            </Typography>
            <TextField
                label="New Todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" onClick={addTodo}>Add Todo</Button>
            <List>
                {todos.map((todo, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={todo} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Todo;
