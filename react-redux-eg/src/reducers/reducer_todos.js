import {CREATE_NEW_TODO} from '../actions';

const INITIAL_STATE = [];
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CREATE_NEW_TODO:
            return [{content: action.payload, done: false}, ...state];

        default:
            return state;
    }

}