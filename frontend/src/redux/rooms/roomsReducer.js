import * as actions from '../reduxConstants';

const initialState = {
    rooms: [],
    currentRoom: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.getRooms:
            return {
                ...state,
                rooms: action.payload
            };
        case actions.createRoom:
            return {
                ...state,
                rooms: [...state.rooms, action.payload]
            };
        case actions.updateRoom:
            return {
                ...state,
                rooms: state.rooms.map((room) => room.id === action.payload.id ? action.payload : room)
            };
        case actions.deleteRoom:
            return {
                ...state,
                rooms: state.rooms.filter((room) => room.id !== action.payload)
            };
        case actions.getRoomById:
            return {
                ...state,
                currentRoom: action.payload
            };
        default:
            return state;
    }
};
