import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import './App.css';

import SignIn from './components/authentication/signIn/SignIn';
import SignUp from './components/authentication/signUp/SignUp';
import Dashboard from './components/dashboard/Dashboard';

function App() {
    return (
        <Router>
                <Switch>
                    <Route exact path="/">
                        <SignIn> </SignIn>
                    </Route>
                    <Route exact path="/signUp">
                        <SignUp> </SignUp>
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard> </Dashboard>
                    </Route>
                </Switch>
        </Router>
    );
}

export default App;
