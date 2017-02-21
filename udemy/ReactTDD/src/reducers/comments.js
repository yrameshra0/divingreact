import {SAVE_COMMENT} from '../actions/types';

export default function (state = [], action) {
    if(action.type===SAVE_COMMENT)
            return [action.payload, ...state];

    return state;
}