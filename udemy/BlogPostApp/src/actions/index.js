import firebase from 'firebase';
import _ from 'lodash';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

// Configuring Firebase in IIFE
(() => {
    firebase.initializeApp({
        apiKey: 'AIzaSyDzVPEZs_xMEeVvIKI-YvhOoC0OifB1rgI',
        // Only needed if using Firebase Realtime Database (which we will be in this example)
        databaseURL: 'https://reactblobpostapp.firebaseio.com/',
    });
})();

const Posts = firebase.database().ref("posts");

const transformToList = (mapObject) => {
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

export function fetchPosts() {
    return dispatch => {
        Posts.on('value', snapshot => {
            dispatch({
                type: FETCH_POSTS,
                payload: transformToList(snapshot.val())
            });
        });
    };
}


export function createPost(props) {
    return dispatch => Posts.push(props);
}

export function fetchPost(id) {
    return {
        type: FETCH_POST,
        payload: id
    };
}

export function deletePost(id) {
    return dispatch => Posts.child(id).remove();
}
