import React, {useState} from 'react';

import {Button, Dialog, DialogContent} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import RoomForm from './RoomForm';

const EditRoom = function ({ roomId }) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClickEditRoom = () => {
        setOpen(true);
    };

    const handleCloseEditRoom = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleCloseEditRoom} aria-labelledby='form-dialog-title'>
                <DialogContent>
                    <RoomForm handleClose={handleCloseEditRoom}
                              roomId={roomId}/>
                </DialogContent>
            </Dialog>
            <Button color='primary'
                    className={classes.buttons}
                    onClick={() => handleClickEditRoom()}><EditIcon/></Button>
        </React.Fragment>
    );
};

EditRoom.propTypes = {
    roomId: PropTypes.string
};

export default EditRoom;
