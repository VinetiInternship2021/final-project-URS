import * as _ from 'lodash';

export class RoomBookingModel {
    constructor(data) {
        this.fromBackend(data);
    }

    fromBackend(data) {
        this.id = data.id;
        _.each(data.attributes, (value, key) => {
            switch (key) {
                case 'available_seats':
                    this.availableSeats = value;
                    break;
                case 'id':
                    this.id = value;
                    break;
                case 'starts_at':
                    this.startsAt = value;
                    break;
                case 'ends_at':
                    this.endsAt = value;
                    break;
                case 'user_id':
                    this.userId = value;
                    break;
                case 'room_id':
                    this.roomId = value;
                    break;
            }
        });
    }

    toBackend(data) {
        return {
            available_seats: data.availableSeats,
            starts_at: data.startsAt,
            ends_at: data.endsAt,
            room_id: data.roomId
        };
    }
}
