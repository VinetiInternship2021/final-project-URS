import React, { useState } from 'react';
import {
    Container,
    Grid,
    Button,
    Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/authentication/authenticationActions';

const SignIn =  function () {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(loginUser(userData));
    };

    return (
            <Container maxWidth='xs'>
                <ValidatorForm autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container spacing={3}
                          direction='column'
                          alignItems='center'
                          justify='center'
                          style={{ minHeight: '100vh' }}>
                        <Grid item xs={12}> Sign In to URS </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextValidator
                                        fullWidth
                                        label='Email'
                                        name='email'
                                        size='small'
                                        variant='outlined'
                                        validators={['required']}
                                        errorMessages={['This field is required']}
                                        value={userData.email}
                                        onChange={(e) => setUserData({...userData, email: e.target.value})}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextValidator
                                        fullWidth
                                        label='Password'
                                        name='password'
                                        size='small'
                                        type='password'
                                        variant='outlined'
                                        validators={['required']}
                                        errorMessages={['This field is required']}
                                        value={userData.password}
                                        onChange={(e) => setUserData({...userData, password: e.target.value})}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color='primary' fullWidth type='submit' variant='contained'>
                                Sign in
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Don't have an account?
                                <Button component={Link} to="/signUp" color="primary">
                                    Sign Up
                                </Button>
                            </Typography>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </Container>
    );
};

export default SignIn;
