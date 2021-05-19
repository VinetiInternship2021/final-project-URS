import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutUser } from '../../redux/authentication/authenticationActions';

function PrivateRoute({ component: Component, ...rest }) {
    const dispatch = useDispatch();

    return (
        <Route {...rest} render={props => {
            const token = localStorage.getItem('jwtToken');
            if (!token) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
            }
            const decoded = jwt_decode(token);
            const currentTime = Date.now() / 1000; // to get in milliseconds
            if (decoded.exp < currentTime) {
                // Logout user
                dispatch(logoutUser());
                // Redirect to login
                return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
            }

            // logged in so return component
            return <Component {...props} />;
        }} />
    );
}

PrivateRoute.propTypes = {
    component: PropTypes.any,
    location: PropTypes.string
};

export { PrivateRoute };
