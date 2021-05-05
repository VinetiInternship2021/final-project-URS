import React, { useState } from 'react';
import {
    Container,
    Grid,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/authentication/authenticationActions';


const SignUp =  function () {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        name: '',
        role: 'student'
    });
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(registerUser(userData));
    };

    return (
        <Container maxWidth='xs'>
            <ValidatorForm onSubmit={handleSubmit}>
                <Grid container spacing={3}
                      direction='column'
                      alignItems='center'
                      justify='center'
                      style={{ minHeight: '100vh' }}>
                    <Grid item xs={12}>
                        <RadioGroup value={userData.role}
                                    onChange={(e) => setUserData({...userData, role: e.target.value})}
                                    row>
                            <FormControlLabel value="student" control={<Radio color="primary"/>} label="Student"/>
                            <FormControlLabel value="professor" control={<Radio color="primary"/>} label="Professor"/>
                        </RadioGroup>
                    </Grid>
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
                                    label='Name'
                                    name='name'
                                    size='small'
                                    variant='outlined'
                                    validators={['required']}
                                    errorMessages={['This field is required']}
                                    value={userData.name}
                                    onChange={(e) => setUserData({...userData, name: e.target.value})}/>
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
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </Container>
    );
};

export default SignUp;
