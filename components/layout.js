import React from 'react';

//next
import Link from 'next/link';

//material-ui
import { AppBar, Box, Grid, Typography, Typograpy } from "@mui/material"

const layout = ({ children }) => {
    return (
        <>
            <Grid component="nav" container sx={{ px: 3, py: 3 }}>
                <Typography variant='h3'>
                    <Link href='/'>
                        <a>Hooked</a>
                    </Link>
                </Typography>
            </Grid>

            {children}

            <Grid container component="footer" className="footer" sx={{p: 3, color: 'white', backgroundColor: "black", height: '20vh', width: '100%' }}>
                <Typography variant='h3'>
                    <Link href='/'>
                        <a>Hooked</a>
                    </Link>
                </Typography>
            </Grid>
        </>
    );
};

export default layout;
