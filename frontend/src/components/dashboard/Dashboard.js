import React  from 'react';
import {
    Container,
    Typography
} from '@material-ui/core';
import Logout from './Logout';
import Grid from "@material-ui/core/Grid";

const Dashboard = function () {
    return (
        <Container>
            <Grid justify="space-between"
                container
                spacing={5}>
                <Grid item>
                    <Typography variant="h4"> Dashboard </Typography>
                </Grid>

                <Grid item>
                    <Logout></Logout>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Dashboard;
