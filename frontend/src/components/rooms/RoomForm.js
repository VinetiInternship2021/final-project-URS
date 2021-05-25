import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { useStyles } from './styles';
import {
    Button,
    MenuItem
} from '@material-ui/core';

import { createRoom, updateRoom } from '../../redux/rooms/roomsActions';
import PropTypes from 'prop-types';
import Availabilities from './Availabilities';
import { RoomModel } from '../../models/roomModel';

const RoomForm = function ({ handleClose, roomId }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [roomData, setRoomData] = useState({
        roomType: RoomModel.types.lecture,
        seatsCount: ''
    });
    const room = useSelector((state) => {
        return (roomId ? state.room.rooms.find((room) => room.id === roomId) : null);
    });

    useEffect(() => {
        if (room) {
            setRoomData(room);
        }
    }, [dispatch, room]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!roomId) {
            dispatch(createRoom(roomData));
        } else {
            dispatch(updateRoom(roomId, roomData));
        }

        handleClose && handleClose();
    };

    return (
        <React.Fragment>
            
                    <ValidatorForm autoComplete='off' onSubmit={handleSubmit}>
                        <SelectValidator
                            fullWidth
                            name='roomType'
                            label='Room Type:'
                            validators={['required']}
                            errorMessages={['This field is required']}
                            value={roomData.roomType}
                            onChange={(e) => setRoomData({...roomData, roomType: e.target.value})}>
                            <MenuItem value={RoomModel.types.lecture}>Lecture</MenuItem>
                            <MenuItem value={RoomModel.types.conference}>Conference</MenuItem>
                        </SelectValidator>
                        <TextValidator
                            fullWidth
                            name='seatsCount'
                            label='Seats count:'
                            validators={['required']}
                            errorMessages={['This field is required']}
                            value={roomData.seatsCount}
                            onChange={(e) => setRoomData({...roomData, seatsCount: e.target.value})}
                        />
                        <Availabilities room={room}/>
                        <Button className={classes.buttonAdd}
                                variant='contained'
                                color='primary'
                                size='large'
                                type='submit'
                                fullWidth>
                            { roomId ? 'Edit' : 'Add' }
                        </Button>
                    </ValidatorForm>

        </React.Fragment>
    );
};

RoomForm.propTypes = {
    roomId: PropTypes.string,
    handleClose: PropTypes.any
};

export default RoomForm;
