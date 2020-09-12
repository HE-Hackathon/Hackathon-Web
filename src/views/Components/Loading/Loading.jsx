import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';

const Loading = () => {
    return(
        <Grid
        item
            lg={12} 
            xs ={12} 
            sm={12} 
            style={{ 
                display : 'flex', 
                justifyContent : 'center', 
                alignItems : 'center',
                height: '100vh' 
                }}
            >
            <CircularProgress />
        </Grid>
    )
}

export default Loading;