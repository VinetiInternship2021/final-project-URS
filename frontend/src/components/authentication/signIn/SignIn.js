import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/authentication/authenticationActions';
import { Link } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";

const SignIn =  function () {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();

    const validateForm = () => {
        return userData.email.length > 0 && userData.password.length > 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            alert('Missing credentials');
        }

        dispatch(loginUser(userData));
    };

    return (
            <Container maxWidth='xs'>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}
                          direction='column'
                          alignItems='center'
                          justify='center'
                          style={{ minHeight: '100vh' }}>
                        <Grid item xs={12}> Sign In to URS </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label='Email'
                                        name='email'
                                        size='small'
                                        variant='outlined'
                                        onChange={(e) => setUserData({...userData, email: e.target.value})}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label='Password'
                                        name='password'
                                        size='small'
                                        type='password'
                                        variant='outlined'
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
                </form>
            </Container>
    );
};

export default SignIn;
