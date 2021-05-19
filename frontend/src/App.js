import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import './App.css';

import SignIn from './components/authentication/signIn/SignIn';
import SignUp from './components/authentication/signUp/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import NavBar from './components/navbar/Navbar';
import Users from './components/users/Users';

const adminLinks = [
    { title: 'users', path: '/dashboard/users' },
    { title: 'rooms', path: '/dashboard/rooms' },
    { title: 'events', path: '/dashboard/events' }
];

function App() {
    return (
        <Router>
            <Route exact path='/' component={SignIn}/>
            <Route exact path='/signUp' component={SignUp}/>

            <PrivateRoute path='/dashboard/:page' component={() => <NavBar navLinks={adminLinks}/>}/>
            <PrivateRoute exact path='/dashboard' component={() => <NavBar navLinks={adminLinks}/>}/>
            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            <PrivateRoute exact path='/dashboard/users' component={Users}/>
        </Router>
    );
}

export default App;
