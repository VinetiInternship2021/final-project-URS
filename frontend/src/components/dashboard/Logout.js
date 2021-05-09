import React  from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

import { logoutUser } from '../../redux/authentication/authenticationActions';

const Logout =  function () {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    };
    // color='primary' fullWidth type='submit' variant='contained'
    return (
        <Button onClick={() => logout()}>
            <ExitIcon /> Logout
       </Button>
    );
};

export default Logout;
