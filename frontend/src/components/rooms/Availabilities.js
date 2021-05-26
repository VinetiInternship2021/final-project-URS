import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { Checkbox, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import * as _ from 'lodash';

const Availabilities = function ({ room, availability, setAvailability }) {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    useEffect(() => {
        let availabilities = [];
        if (room) {
            availabilities = room.availabilities;
            _.each(days, day => {
                if (!_.some(availabilities, a => a.dayOfWeek === day)) {
                    availabilities = [...availabilities, {
                        dayOfWeek: day,
                        holiday: false,
                        startsAt: '10:00',
                        endsAt: '20:00'
                    }];
                }
            });
        } else {
            _.each(days, day => {
                availabilities = [...availabilities, {
                    dayOfWeek: day,
                    holiday: false,
                    startsAt: '10:00',
                    endsAt: '20:00'
                }];
            });
        }

        setAvailability(availabilities);
    }, [room]);

    const handleStartAtChange = (date, day) => {
        const av = _.find(availability, av => av.dayOfWeek === day);
        av.startsAt = date;
        setAvailability(_.map(availability, av1 => av1.dayOfWeek === day ? av : av1));
    };

    const handleEndAtChange = (date, day) => {
        const av = _.find(availability, av => av.dayOfWeek === day);
        av.endsAt = date;
        setAvailability(_.map(availability, av1 => av1.dayOfWeek === day ? av : av1));
    };

    const onHolidayChange = (checked, day) => {
        const av = _.find(availability, av => av.dayOfWeek === day);
        av.holiday = checked;
        setAvailability(_.map(availability, av1 => av1.dayOfWeek === day ? av : av1));
    };

    const classes = useStyles();
    return (
        <React.Fragment>
            { availability.map(availability =>
                <Grid key={availability.dayOfWeek} container>
                    <Grid item xs={3}>
                        <Typography className={classes.dayOfWeek}>{availability.dayOfWeek}: </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id={`starts-at${availability.dayOfWeek}`}
                            label="Starts At"
                            type="time"
                            value={availability.startsAt}
                            onChange={(e) => handleStartAtChange(e.target.value, availability.dayOfWeek)}
                            className={classes.timePicker}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id={`ends-at${availability.dayOfWeek}`}
                            label="Ends At"
                            type="time"
                            value={availability.endsAt}
                            onChange={(e) => handleEndAtChange(e.target.value, availability.dayOfWeek)}
                            className={classes.timePicker}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <p className={classes.holidayLabel}>holiday:</p> <Checkbox
                            checked={availability.holiday}
                            onChange={e => onHolidayChange(e.target.checked, availability.dayOfWeek)}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                    </Grid>
                </Grid>
            )}

        </React.Fragment>
    );
};

Availabilities.propTypes = {
    room: PropTypes.object,
    availability: PropTypes.array,
    setAvailability: PropTypes.any
};

export default Availabilities;
