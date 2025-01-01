import React, { useEffect, useState } from 'react';
import { CircularProgress, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

const Swapi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then(response => {
                setData(response.data.results);
                setLoading(false);  // Встановлюємо завантаження в false після отримання даних
            })
            .catch(error => console.error(error));
    }, []);

    if (loading) {
        return <CircularProgress sx={{ display: 'block', margin: 'auto', marginTop: '20px' }} />;
    }

    return (
        <Container sx={{ padding: '30px', backgroundColor: '#f0f0f0' }}>
            <Typography variant="h4" gutterBottom sx={{ color: '#3f51b5', textAlign: 'center' }}>
                Star Wars Characters
            </Typography>
            <List sx={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: 3 }}>
                {data.map((person, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={person.name} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Swapi;
