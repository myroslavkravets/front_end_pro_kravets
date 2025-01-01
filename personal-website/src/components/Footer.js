import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container>
            <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
                Contact me at: email@example.com
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                © 2025 My Personal Website
            </Typography>
        </Container>
    );
};

export default Footer;
