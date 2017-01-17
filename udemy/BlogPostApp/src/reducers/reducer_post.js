import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST} from '../actions/index';

const INITIAL_STATE = {all: [], post: null};

const fetchedPostsTransformer = (mapObject) => {
    const keysArr = _.keysIn(mapObject);
    return keysArr.map((key) => {
        const current = mapObject[key];

        return {
            id: key,
            title: current.title,
            categories: current.categories,
            content: current.content
        };
    });
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, all: fetchedPostsTransformer(action.payload)};

        case FETCH_POST: {
            const cherryPickingObject = state.all.filter(obj => obj.id === action.payload)[0];
            return {...state, post: cherryPickingObject};
        }

        default:
            return state;
    }
}