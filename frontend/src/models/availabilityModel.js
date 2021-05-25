import * as _ from 'lodash';

export class AvailabilityModel {
    constructor(data) {
        this.fromBackend(data);
    }

    fromBackend(data) {
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
                case 'start_at':
                    this.startsAt = value;
                    break;
                case 'ends_at':
                    this.endsAt = value;
                    break;
            }
        });
    }
}
