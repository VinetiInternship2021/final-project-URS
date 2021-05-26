import React, {useEffect} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import {useDispatch, useSelector} from 'react-redux';
import {getEvents} from '../../redux/events/eventsActions';

const ProfEvents = function () {
    const dispatch = useDispatch();
    let events = useSelector((state) => state.event.events || []);

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);
    return (
        <React.Fragment>
            <List dense={true}>
                <ListItem key="key">
                    <ListItemText primary="Event Title"/>
                    <ListItemText primary="Event description"/>
                    <ListItemText primary="Event subject"/>
                    <ListItemText primary="Event seats limit"/>
                </ListItem>
                {events.map(event =>
                    <ListItem key={event.id}>
                        <ListItemText primary={event.eventTitle}/>
                        <ListItemText primary={event.description}/>
                        <ListItemText primary={event.subject}/>
                        <ListItemText primary={event.seatsLimit}/>
                    </ListItem>
                )}
            </List>
        </React.Fragment>
    );
};

export default ProfEvents;
