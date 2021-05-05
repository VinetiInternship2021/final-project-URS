import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import './App.css';

import SignIn from './components/authentication/signIn/SignIn';
import SignUp from "./components/authentication/signUp/SignUp";

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
                </Switch>
        </Router>
    );
}

export default App;
