import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';

function AvailableTimes({ blocks, selectedTime, setSelectedTime }) {
    const classes = useStyles();
    const selectTime = (time) => {
        setSelectedTime(time);
    };

    return (
        <div>
            {
                blocks.map(time => {
                    return <Button key={time}
                                   className={classes.times}
                                   variant="contained"
                                   color={selectedTime === time ? 'primary' : 'default'}
                                   onClick={() => selectTime(time)}> {time} </Button>;
                })
            }
        </div>
    );
}

AvailableTimes.propTypes = {
    blocks: PropTypes.any,
    selectedTime: PropTypes.any,
    setSelectedTime: PropTypes.any
};

export default AvailableTimes;
