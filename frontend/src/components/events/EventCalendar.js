import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from 'prop-types';

function EventCalendar({ eventDate, onDateChange }) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
                autoOk
                orientation='landscape'
                variant='static'
                openTo='date'
                value={eventDate}
                minDate={new Date()}
                maxDate={new Date(new Date().getTime()+(6*24*60*60*1000))}
                onChange={(date) => onDateChange(date)}
            />
        </MuiPickersUtilsProvider>
    );
}

EventCalendar.propTypes = {
    eventDate: PropTypes.any,
    onDateChange: PropTypes.any
};

export default EventCalendar;
