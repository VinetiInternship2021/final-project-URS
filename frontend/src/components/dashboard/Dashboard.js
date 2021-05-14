import React  from 'react';
import NavBar from '../navbar/Navbar';
import { useSelector } from 'react-redux';
import { Typography, Grid } from "@material-ui/core";

import { useStyles } from './styles';

const adminLinks = [
    { title: 'users', path: '/users' },
    { title: 'rooms', path: '/rooms' },
    { title: 'events', path: '/events' }
];

const Dashboard = function () {
    const userData = useSelector(state => {
        return state.auth.user;
    });
    const classes = useStyles();

    return (
        <React.Fragment>
            <NavBar navLinks={adminLinks}/>

            <Grid container direction='column' className={classes.profileBlock}>
                <Typography variant="h2"> Profile </Typography>
                <Typography> Email: {userData.email} </Typography>
                <Typography> Name: {userData.name} </Typography>
                <Typography> Role: Admin </Typography>
            </Grid>
        </React.Fragment>
    );
};

export default Dashboard;
