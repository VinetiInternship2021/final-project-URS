import * as actions from '../reduxConstants';

const initialState = {
    users: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.getUsers:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
};
