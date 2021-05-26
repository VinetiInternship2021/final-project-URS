import * as _ from 'lodash';

export class AvailabilityModel {
    constructor(data) {
        this.fromBackend(data);
    }

    fromBackend(data) {
        this.id = data.id;
        _.each(data.attributes, (value, key) => {
            switch (key) {
                case 'day_of_week':
                    this.dayOfWeek = value;
                    break;
                case 'holiday':
                    this.holiday = value;
                    break;
                case 'id':
                    this.id = value;
                    break;
                case 'starts_at':
                    this.startsAt = value &&
                        `${new Date(value).getUTCHours()}:${new Date(value).getUTCMinutes()<10?'0':''}${new Date(value).getUTCMinutes()}`;
                    break;
                case 'ends_at':
                    this.endsAt = value &&
                        `${new Date(value).getUTCHours()}:${new Date(value).getUTCMinutes()<10?'0':''}${new Date(value).getUTCMinutes()}`;
                    break;
            }
        });
    }

    toBackend(data) {
        return {
            starts_at: data.startsAt,
            ends_at: data.endsAt,
            holiday: data.holiday,
            day_of_week: data.dayOfWeek
        };
    }
}
