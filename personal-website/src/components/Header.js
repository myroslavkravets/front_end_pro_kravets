import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Personal Website
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/todo">Todo</Button>
                    <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
