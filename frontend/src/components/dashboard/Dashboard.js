import React  from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid } from '@material-ui/core';

import { useStyles } from './styles';

const Dashboard = function () {
    const userData = useSelector(state => {
        return state.auth.user;
    });
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container direction='column' className={classes.profileBlock}>
                <Typography variant='h2'> Profile </Typography>
                <Typography> Email: {userData.email} </Typography>
                <Typography> Name: {userData.name} </Typography>
                <Typography> Role: {userData.role} </Typography>
            </Grid>
        </React.Fragment>
    );
};

export default Dashboard;
