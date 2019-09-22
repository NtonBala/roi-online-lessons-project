// Types
import { types } from './types';

const initialState = {
    starships:  [],
    isFetching: false,
};

export const feedReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FILL_STARSHIPS:
            return { ...state, starships: payload };

        case types.START_FETCHING:
            return { ...state, isFetching: true };

        case types.STOP_FETCHING:
            return { ...state, isFetching: false };

        default:
            return state;
    }
};
