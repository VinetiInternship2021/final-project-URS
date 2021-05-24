import * as actions from '../reduxConstants';

const initialState = {
    users: [],
    requesters: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.getUsers:
            return {
                ...state,
                users: action.payload
            };
        case actions.getRequesters:
            return {
                ...state,
                requesters: action.payload
            };
        case actions.updateUser:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
            };
        case actions.verifyUser:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload : user),
                requesters: state.requesters.filter(req => req.id !== action.payload.id)
            };
        case actions.deleteUser:
            return {
                ...state,
                requesters: state.requesters.filter(req => req.id !== action.payload)
            };
        default:
            return state;
    }
};
