const initialState = {
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};
