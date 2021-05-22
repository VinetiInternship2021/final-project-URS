import * as _ from 'lodash';

export class RoomModel {
    constructor(data) {
        this.id = null;
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
    }

    toBackend(data) {
        return {
            room_type: data.roomType,
            seats_count: data.seatsCount
        };
    }
}
