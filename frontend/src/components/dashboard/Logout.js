import React  from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

import { logoutUser } from '../../redux/authentication/authenticationActions';
import { useStyles } from './styles';

const Logout =  function () {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
        dispatch(logoutUser());
        history.push('./');
    };

    return (
        <Button onClick={() => logout()}>
            <ExitIcon className={classes.logout}/>
            <p className={classes.logout}> Logout </p>
       </Button>
    );
};

export default Logout;
