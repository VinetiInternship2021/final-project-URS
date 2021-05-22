import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStyles } from './styles';
import PropTypes from 'prop-types';

import { deleteRoom } from '../../redux/rooms/roomsActions';

const DeleteRoom = function ({ roomId }) {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const classes = useStyles();

    const handleClickDeleteRoom = () => {
        setOpen(true);
    };

    const handleCloseDeleteRoom = () => {
        setOpen(false);
    };

    const onDelete = () => {
        dispatch(deleteRoom(roomId));
        handleCloseDeleteRoom();
    };

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleCloseDeleteRoom} aria-labelledby="form-dialog-title">
                <DialogContent>
                    Are you sure you want to delete the room?
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseDeleteRoom} color="primary">
                        No
                    </Button>
                    <Button onClick={() => onDelete()} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
            <Button color='primary'
                    className={classes.buttons}
                    onClick={() => handleClickDeleteRoom()}><DeleteIcon/></Button>
        </React.Fragment>
    );
};

DeleteRoom.propTypes = {
    roomId: PropTypes.string
};

export default DeleteRoom;
