import * as _ from 'lodash';
import { AvailabilityModel } from './availabilityModel';

export class RoomModel {
    constructor(data) {
        this.fromBackend(data);
    }

    fromBackend(data) {
        this.id = data.id;
        _.each(data.attributes, (value, key) => {
            switch (key) {
                case 'room_type':
                    this.roomType = value;
                    break;
                case 'seats_count':
                    this.seatsCount = value;
                    break;
            }
        });

        _.each(data.relationships, (v, key) => {
            switch (key) {
                case 'availabilities':
                    this.availabilities = _.map(v.data || [], availability => new AvailabilityModel(availability));
                    break;
            }
        });
    }

    toBackend(data) {
        return {
            room_type: data.roomType,
            seats_count: data.seatsCount
        };
    }
}

RoomModel.types = {
    lecture: 'lecture',
    conference: 'conference'
};
