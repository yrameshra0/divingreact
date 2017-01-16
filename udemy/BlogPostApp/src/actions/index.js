import firebase from 'firebase';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'SAVE_NEW_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=20170104050510000";

const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyDzVPEZs_xMEeVvIKI-YvhOoC0OifB1rgI',
    // Only needed if using Firebase Realtime Database (which we will be in this example)
    databaseURL: 'https://reactblobpostapp.firebaseio.com/',
};

firebase.initializeApp(FIREBASE_CONFIG);

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
    return dispatch => Posts.push(props );
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id) {
    return dispatch => Posts.child(id).remove();
}
