import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from '../../redux/rooms/roomsActions';

import RoomTable from './RoomTable';
import AddRoom from './AddRoom';

const Rooms = function () {
    const dispatch = useDispatch();
    let rooms = useSelector((state) => state.room.rooms || []);

    useEffect(() => {
        dispatch(getRooms());
    }, [dispatch]);

    return (
        <React.Fragment>
            <AddRoom/>
            <RoomTable rooms={rooms}/>
        </React.Fragment>
    );
};

export default Rooms;
