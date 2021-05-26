import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms, getRoomById } from '../../redux/rooms/roomsActions';
import Button from '@material-ui/core/Button';
import * as _ from 'lodash';

import { useStyles } from './styles';
import { RoomModel } from '../../models/roomModel';
import EventCalendar from './EventCalendar';
import Grid from '@material-ui/core/Grid';
import AvailableTimes from './AvailableTimes';
import EventDetails from './EventDetails';
import { EventModel } from '../../models/eventModel';
import { createRoomBooking } from '../../redux/roomBooking/roomBookingActions';
import { createEvent } from '../../redux/events/eventsActions';
import PropTypes from 'prop-types';
import { UserModel } from '../../models/userModel';

const EventRooms = function ({ userRole }) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [roomType, setRoomType] = useState(null);
    const [roomId, setRoomId] = useState(null);
    const [roomData, setRoomData] = useState(null);
    const [eventDate, setEventDate] = useState(null);
    const [eventTime, setEventTime] = useState(null);
    const [holiday, setHoliday] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [eventDetails, setEventDetails] = useState({
        eventType: EventModel.types.conference,
        seatsLimit: '',
        eventTitle: '',
        subject: '',
        description: ''
    });

    let initialBlocks = [];
    for (let i = 1; i <= 24; i++){
        initialBlocks.push(i < 10 ? `0${i}:00` : `${i}:00`);
    }

    const [blocks, setBlocks] = useState(initialBlocks);
    let rooms = useSelector((state) => state.room.rooms || []);
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    const reset = () => {
        setRoomId(null);
        setBlocks(initialBlocks);
        setEventDate(null);
        setEventTime(null);
        setShowSuccess(false);
    };

    const getRoomsByType = (type) => {
        dispatch(getRooms(type));
        setRoomType(type);
        reset();
    };

    const selectRoom = (id) => {
        if (roomId === id) {
            reset();
        } else {
            setRoomId(id);
            setEventDate(null);
            setEventTime(null);
            setBlocks(initialBlocks);
            dispatch(getRoomById(id)).then(room => {
                setRoomData(room);
                onDateChange(new Date());
            });
        }
    };

    const formatDate = (date) => {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    };

    const onCreate = () => {
        dispatch(createRoomBooking({
            startsAt: `${formatDate(eventDate)}T${eventTime}:00.000Z`,
            endsAt: `${formatDate(eventDate)}T${blocks[_.indexOf(blocks, eventTime) + 1]}:00.000Z`,
            availableSeats: roomData.seatsCount,
            roomId: roomData.id
        })).then(roomBooking => {
            if (userRole === UserModel.roles.professor) {
                roomBooking && dispatch(createEvent(roomBooking.id, eventDetails));
            }
            reset();
            setRoomType(null);
            setShowSuccess(true);
        });
    };

    const onDateChange = (date) => {
        const availabilities = roomData && roomData.availabilities;
        const roomBookings = roomData && roomData.roomBookings;
        if (!availabilities || _.isEmpty(availabilities) || !date) {
            setBlocks([]);
            setEventDate(date);
            return;
        }

        const day = date.getDay();
        const availability = _.find(availabilities, av => _.startsWith(av.dayOfWeek, days[day]));

        if (!availability) {
            return;
        }

        setHoliday(availability.holiday);
        if (availability.holiday) {
            setEventDate(date);
            return;
        }

        let starts = availability.startsAt &&
            parseInt(availability.startsAt.substring(0, 2).startsWith('0') ?
                availability.startsAt.substring(1, 2) : availability.startsAt.substring(0, 2));

        let ends = availability.endsAt &&
            parseInt(availability.endsAt.substring(0, 2).startsWith('0') ?
                availability.endsAt.substring(1, 2) : availability.endsAt.substring(0, 2));

        let filteredBlocks = _.filter(initialBlocks, block => {
            let blockTime = parseInt(block.substring(0, 2).startsWith('0') ? block.substring(1, 2) : block.substring(0, 2));
            return starts <= blockTime && ends >= blockTime;
        });

        if (roomBookings && !_.isEmpty(roomBookings)) {
            const bookingsOnDate = _.filter(roomBookings, rb => _.startsWith(rb.startsAt, `${formatDate(date)}`));
            if (!_.isEmpty(bookingsOnDate)) {
                _.each(bookingsOnDate, bd => {
                    filteredBlocks = _.filter(filteredBlocks, block => {
                        return (new Date(bd.startsAt)).toUTCString().substring(17,22) !== block;
                    });
                });
            }
        }

        setEventDate(date);
        setEventTime(null);
        setBlocks(filteredBlocks);
    };

    return (
        <div className={classes.rooms}>
            { showSuccess ? <p className={classes.roomTypeTitle}>Creation was successful!</p> : ''}
            <p className={classes.roomTypeTitle}>Choose a room type:</p>
            <div className={classes.roomTypeButtons}>
                { userRole === UserModel.roles.professor ? <Button onClick={() => getRoomsByType(RoomModel.types.conference)}
                        variant='contained'
                        className={classes.roomTypeButton}
                        color={roomType === RoomModel.types.conference ? 'primary' : 'default'}> Conference </Button> : ''}
                <Button onClick={() => getRoomsByType(RoomModel.types.class)}
                        variant='contained'
                        className={classes.roomTypeButton}
                        color={roomType === RoomModel.types.class ? 'primary' : 'default'}> Class </Button>
            </div>

            { roomType && <p className={classes.roomTypeTitle}>Choose a room:</p> }
            {
                roomType && rooms.map(room => {
                    return <Button key={room.id}
                                   variant='contained'
                                   color={roomId === room.id ? 'primary' : 'default'}
                                   className={classes.roomTypeButton}
                                   onClick={() => selectRoom(room.id)}> {room.roomType}{room.id} </Button>;
                })
            }

            <Grid container  direction='row'>
                <Grid item xs={6}>
                    <div className={classes.eventCalendar}>
                        {
                            roomId ? <EventCalendar eventDate={eventDate} onDateChange={onDateChange}/> : ''
                        }
                    </div>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={5}>
                    <div className={classes.eventCalendar}>
                        {
                            eventDate && !holiday ? <AvailableTimes blocks={blocks} selectedTime={eventTime} setSelectedTime={setEventTime}/> : ''
                        }
                        {
                            holiday ? 'There are no available times, because it is a holiday' : ''
                        }
                    </div>
                </Grid>
            </Grid>
            <div className={classes.eventCalendar}>
                { eventTime && userRole === UserModel.roles.professor
                    ? <EventDetails eventDetails={eventDetails}
                                            setEventDetails={setEventDetails}
                                            onSubmit={onCreate}
                                            seatsCount={roomData.seatsCount}/> : ''}
            </div>

            <div className={classes.eventCalendar}>
                { eventTime && userRole === UserModel.roles.student
                    ? <Grid item xs={12}>
                        <Button color='primary'
                                fullWidth
                                type='submit'
                                variant='contained'
                                onClick={() => onCreate()}>
                            Create
                        </Button>
                    </Grid> : ''}
            </div>
        </div>
    );
};

EventRooms.propTypes = {
    userRole: PropTypes.any
};


export default EventRooms;
