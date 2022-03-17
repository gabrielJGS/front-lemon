import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = (props: any) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            < Link color="inherit" href="https://github.com/gabrielJGS" >
                Gabriel José
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
        </Typography>
    );
}

export { Copyright }