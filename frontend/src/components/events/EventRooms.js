import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from '../../redux/rooms/roomsActions';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';
import { RoomModel } from '../../models/roomModel';

const EventRooms = function () {
    const dispatch = useDispatch();
    const classes = useStyles();
    let rooms = useSelector((state) => state.room.rooms || []);

    return (
        <div className={classes.rooms}>
            {!rooms ? 'Please choose a room type to continue' : ''}
            <div className={classes.roomTypeButtons}>
                <Button onClick={() => dispatch(getRooms(RoomModel.types.conference))}
                        variant='contained'> Conference </Button>
                <Button onClick={() => dispatch(getRooms(RoomModel.types.class))}
                        variant='contained'> Class </Button>
            </div>

            {
                rooms.map(room => {
                    return <Button key={room.id} variant="contained"> {room.id} </Button>;
                })
            }

        </div>
    );
};

export default EventRooms;
