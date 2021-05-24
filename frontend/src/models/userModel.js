import * as _ from 'lodash';

export class UserModel {
    constructor(data) {
        this.id = null;
        this.fromBackend(data);
    }

    fromBackend(data) {
        _.each(data.attributes, (value, key) => {
            switch (key) {
                case 'email':
                    this.email = value;
                    break;
                case 'id':
                    this.id = value;
                    break;
                case 'role':
                    this.role = value;
                    break;
                case 'name':
                    this.name = value;
                    break;
                case 'active':
                    this.active = value;
                    break;
                case 'verified':
                    this.verified = value;
                    break;
            }
        });
    }
}

UserModel.roles = {
    student: 'student',
    professor: 'professor',
    admin: 'admin'
};
