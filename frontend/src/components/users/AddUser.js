import React, { useState } from 'react';
import {Add} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';

const AddUser = function () {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <IconButton onClick={() => handleClick()}>
                <Add edge='end'
                     color='inherit'
                     aria-label='add'/>
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogContent className={classes.dialogContainer}>
                    <Typography component='h1' variant='h4' align='center'>
                        Add user
                    </Typography>
                    <ValidatorForm autoComplete='off' onSubmit={handleSubmit}>
                        <TextValidator
                            fullWidth
                            name='name'
                            label='Name:'
                            validators={['required']}
                            errorMessages={['This field is required']}
                            value={userData.name}
                            onChange={(e) => setUserData({...userData, name: e.target.value})}
                        />
                        <TextValidator
                            fullWidth
                            name='email'
                            label='Email:'
                            validators={['required']}
                            errorMessages={['This field is required']}
                            value={userData.email}
                            onChange={(e) => setUserData({...userData, email: e.target.value})}
                        />
                        <TextValidator
                            fullWidth
                            name='password'
                            label='Password:'
                            validators={['required']}
                            errorMessages={['This field is required']}
                            value={userData.password}
                            onChange={(e) => setUserData({...userData, password: e.target.value})}
                        />
                        <Button className={classes.buttonAdd}
                                variant='contained'
                                color='primary'
                                size='large'
                                type='submit'
                                fullWidth>
                            {'Add'}
                        </Button>
                    </ValidatorForm>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
};

export default AddUser;
