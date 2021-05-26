import React from 'react';
import EventRooms from './EventRooms';
import { useSelector } from 'react-redux';

const Events = function () {
    const user = useSelector(state => state.auth.user);

    return (
        <React.Fragment>
            <EventRooms userRole={user && user.role}/>
        </React.Fragment>
    );
};

export default Events;
