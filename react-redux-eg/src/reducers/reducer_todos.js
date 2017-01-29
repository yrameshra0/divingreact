import {CREATE_NEW_TODO, TOGGLE_DONE} from '../actions';

const INITIAL_STATE = [];
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CREATE_NEW_TODO:
            return [{content: action.payload, done: false}, ...state];

        case TOGGLE_DONE:{
            const stateClone = Object.assign([], state);
            const toggledTodo = stateClone[action.payload];
            toggledTodo.done = !toggledTodo.done;

            return stateClone;
        }

        default:
            return state;
    }

}