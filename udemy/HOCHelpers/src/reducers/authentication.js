import {CHANGE_AUTH} from '../actions';

export default function authenticateReducer(state = false, action) {
    if (action.type === CHANGE_AUTH)
        return action.payload;

    return state;
}