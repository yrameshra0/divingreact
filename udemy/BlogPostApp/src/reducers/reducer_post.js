import {FETCH_POSTS, FETCH_POST} from '../actions/index';

const INITIAL_STATE = {all: [], post: null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, all: action.payload};

        case FETCH_POST: {
            const cherryPickedOject = state.all.filter(obj => obj.id === action.payload)[0];
            return {...state, post: cherryPickedOject};
        }

        default:
            return state;
    }
}