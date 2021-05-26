import React, {useEffect} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import {useDispatch, useSelector} from 'react-redux';
import {getRoomBookings} from '../../redux/roomBooking/roomBookingActions';

const RoomBookings = function () {
    const dispatch = useDispatch();
    let roomBookings = useSelector((state) => state.roomBook.roomBookings || []);

    useEffect(() => {
        dispatch(getRoomBookings());
    }, [dispatch]);
    return (
        <React.Fragment>
            <List dense={true}>
                <ListItem key="key">
                    <ListItemText primary="Booking starts at"/>
                    <ListItemText primary="Booking end at"/>
                    <ListItemText primary="Room"/>
                    <ListItemText primary="Available seats"/>
                </ListItem>
                {roomBookings.map(rb =>
                    <ListItem key={rb.id}>
                        <ListItemText primary={rb.startsAt}/>
                        <ListItemText primary={rb.endsAt}/>
                        <ListItemText primary={`${rb.roomId}`}/>
                        <ListItemText primary={rb.availableSeats}/>
                    </ListItem>
                )}
            </List>
        </React.Fragment>
    );
};

export default RoomBookings;
