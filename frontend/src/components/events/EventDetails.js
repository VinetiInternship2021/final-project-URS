import React from 'react';
import {
    Button,
    Container,
    Grid, MenuItem
} from '@material-ui/core';
import {ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator';
import PropTypes from 'prop-types';
import { EventModel } from '../../models/eventModel';

const EventDetails =  function ({ eventDetails, setEventDetails, onSubmit, seatsCount }) {
    return (
        <Container maxWidth='xs'>
            <ValidatorForm autoComplete="off">
                <Grid container spacing={3}
                      direction='column'
                      alignItems='center'
                      justify='center'>
                    <Grid item xs={12}> Event details </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <SelectValidator
                                    fullWidth
                                    name='eventType'
                                    label='Event Type:'
                                    validators={['required']}
                                    errorMessages={['This field is required']}
                                    value={eventDetails.eventType}
                                    onChange={(e) => setEventDetails({...eventDetails, eventType: e.target.value})}>
                                    <MenuItem value={EventModel.types.conference}>Conference</MenuItem>
                                    <MenuItem value={EventModel.types.lecture}>Lecture</MenuItem>
                                </SelectValidator>
                            </Grid>
                            <Grid item xs={12}>
                                <TextValidator
                                    fullWidth
                                    label='Seats Limit'
                                    name='seatsLimit'
                                    size='small'
                                    variant='outlined'
                                    validators={['required', `maxNumber:${seatsCount}`]}
                                    errorMessages={['This field is required', `Seats limit should be less than room seat count: ${seatsCount}`]}
                                    value={eventDetails.seatsLimit}
                                    onChange={(e) => setEventDetails({...eventDetails, seatsLimit: e.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextValidator
                                    fullWidth
                                    label='Event title'
                                    name='title'
                                    size='small'
                                    variant='outlined'
                                    validators={['required']}
                                    errorMessages={['This field is required']}
                                    value={eventDetails.eventTitle}
                                    onChange={(e) => setEventDetails({...eventDetails, eventTitle: e.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextValidator
                                    fullWidth
                                    label='Subject'
                                    name='subject'
                                    size='small'
                                    variant='outlined'
                                    validators={['required']}
                                    errorMessages={['This field is required']}
                                    value={eventDetails.subject}
                                    onChange={(e) => setEventDetails({...eventDetails, subject: e.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextValidator
                                    fullWidth
                                    label='Description'
                                    name='description'
                                    size='small'
                                    variant='outlined'
                                    validators={['required']}
                                    errorMessages={['This field is required']}
                                    value={eventDetails.description}
                                    onChange={(e) => setEventDetails({...eventDetails, description: e.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button color='primary'
                                        fullWidth
                                        type='submit'
                                        variant='contained'
                                        onClick={() => onSubmit()}>
                                    Create
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </Container>
    );
};

EventDetails.propTypes = {
    eventDetails: PropTypes.any,
    setEventDetails: PropTypes.any,
    onSubmit: PropTypes.any,
    seatsCount: PropTypes.any
};

export default EventDetails;
