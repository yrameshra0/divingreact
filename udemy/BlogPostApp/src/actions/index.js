import firebase from 'firebase';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

// Configuring Firebase in IIFE
(() => {
    firebase.initializeApp({
        apiKey: 'AIzaSyDzVPEZs_xMEeVvIKI-YvhOoC0OifB1rgI',
        databaseURL: 'https://reactblobpostapp.firebaseio.com/',
    });
})();

const Posts = firebase.database().ref("posts");

export function fetchPosts() {
    return dispatch => {
        Posts.on('value', snapshot => {
            dispatch({
                type: FETCH_POSTS,
                payload: snapshot.val()
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
