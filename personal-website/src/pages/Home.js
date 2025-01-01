import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Welcome to My Personal Website
            </Typography>
            <Typography variant="h5" gutterBottom>
                Skills and Experience
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Skills:</Typography>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Node.js</li>
                            <li>HTML, CSS</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Experience:</Typography>
                        <ul>
                            <li>Frontend Developer at ABC Corp.</li>
                            <li>Software Engineer at XYZ Ltd.</li>
                        </ul>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
