import React, {useState} from 'react';

import { Dialog, DialogContent, IconButton, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import RoomForm from './RoomForm';
import { Add } from '@material-ui/icons';

const AddRoom = function () {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
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
                        Add room
                    </Typography>
                    <RoomForm handleClose={handleClose}/>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
};

AddRoom.propTypes = {
    roomId: PropTypes.string
};

export default AddRoom;
