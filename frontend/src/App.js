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
import { PrivateRoute } from './components/privateRoute/PrivateRoute';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SignIn}/>
                <Route exact path="/signUp" component={SignUp}/>
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            </Switch>
        </Router>
    );
}

export default App;
