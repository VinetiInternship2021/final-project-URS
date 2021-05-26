import * as actions from '../reduxConstants';

const initialState = {
    roomBookings: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.getRoomBookings:
            return {
                ...state,
                roomBookings: action.payload
            };
        default:
            return state;
    }
};
