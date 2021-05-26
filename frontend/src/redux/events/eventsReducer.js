import * as actions from '../reduxConstants';

const initialState = {
    events: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.getEvents:
            return {
                ...state,
                events: action.payload
            };
        default:
            return state;
    }
};
