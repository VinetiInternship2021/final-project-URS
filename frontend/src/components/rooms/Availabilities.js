import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { Checkbox, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
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
                    availabilities = [...availabilities, {dayOfWeek: day, holiday: false}];
                }
            });
        } else {
            _.each(days, day => {
                availabilities = [...availabilities, {dayOfWeek: day, holiday: false}];
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
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker
                                InputProps={{
                                    disableUnderline: true
                                }}
                                margin="normal"
                                id={`starts-at${availability.dayOfWeek}`}
                                label="Starts at"
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                                className={classes.timePicker}
                                value={availability.startsAt}
                                onChange={(date) => handleStartAtChange(date, availability.dayOfWeek)}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker
                                InputProps={{
                                    disableUnderline: true
                                }}
                                margin="normal"
                                id={`ends-at${availability.dayOfWeek}`}
                                label="Ends at"
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                                className={classes.timePicker}
                                value={availability.endsAt}
                                onChange={(date) => handleEndAtChange(date, availability.dayOfWeek)}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={1} className={classes.isHoliday}>
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
