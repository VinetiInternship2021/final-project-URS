import React from 'react';
import { Typography } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Typography component="h6"
                                    variant="h6"
                                    align="center">
                            University room schedule app
                        </Typography> </Route>

                    <Route exact path="/login">
                        <Typography component="h6"
                                    variant="h6"
                                    align="center">
                            University room schedule login
                        </Typography>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
