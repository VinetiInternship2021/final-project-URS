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
import Rooms from './components/rooms/Rooms';
import { useSelector } from 'react-redux';
import { UserModel } from './models/userModel';
import Events from './components/events/Events';

const adminLinks = [
    { title: 'users', path: '/dashboard/users' },
    { title: 'rooms', path: '/dashboard/rooms' }
];

const studentLinks = [
    { title: 'booking', path: '/dashboard/booking' }
];

const professorLinks = [
    { title: 'booking', path: '/dashboard/booking' }
];

function App() {
    const user = useSelector(state => state.auth.user);
    const links = getLinks();

    function getLinks() {
        if (!user) {
            return;
        }

        switch (user.role) {
            case UserModel.roles.admin:
                return adminLinks;
            case UserModel.roles.student:
                return studentLinks;
            case UserModel.roles.professor:
                return professorLinks;
        }
    }

    return (
        <Router>
            <Route exact path='/' component={SignIn}/>
            <Route exact path='/signUp' component={SignUp}/>

            <PrivateRoute path='/dashboard/:page' component={() => <NavBar navLinks={links}/>}/>
            <PrivateRoute exact path='/dashboard' component={() => <NavBar navLinks={links}/>}/>
            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            <PrivateRoute exact path='/dashboard/users' component={Users}/>
            <PrivateRoute exact path='/dashboard/rooms' component={Rooms}/>
            <PrivateRoute exact path='/dashboard/booking' component={() => <Events/>}/>
        </Router>
    );
}

export default App;
