import * as _ from 'lodash';
import { AvailabilityModel } from './availabilityModel';
import { RoomBookingModel } from './roomBookingModel';

export class RoomModel {
    constructor(data, included) {
        this.fromBackend(data, included);
    }

    fromBackend(data, included) {
        this.id = data.id;
        this.availabilities = [];
        this.roomBookings = [];

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

        _.each(included, (include) => {
            if (include.type === 'availability') {
                this.availabilities.push(new AvailabilityModel(include));
            }

            if (include.type === 'room_booking') {
                this.roomBookings.push(new RoomBookingModel(include));
            }
        });

        console.log(this);
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
