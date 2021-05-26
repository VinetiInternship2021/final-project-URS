import * as _ from 'lodash';

export class EventModel {
    constructor(data, included) {
        this.fromBackend(data, included);
    }

    fromBackend(data) {
        this.id = data.id;

        _.each(data.attributes, (value, key) => {
            switch (key) {
                case 'event_type':
                    this.eventType = value;
                    break;
                case 'seats_limit':
                    this.seatsLimit = value;
                    break;
                case 'event_title':
                    this.eventTitle = value;
                    break;
                case 'description':
                    this.description = value;
                    break;
                case 'subject':
                    this.subject = value;
                    break;
            }
        });
    }

    toBackend(data) {
        return {
            event_type: data.eventType,
            seats_limit: data.seatsLimit,
            event_title: data.eventTitle,
            description: data.description,
            subject: data.subject
        };
    }
}

EventModel.types = {
    lecture: 'lecture',
    conference: 'conference'
};
