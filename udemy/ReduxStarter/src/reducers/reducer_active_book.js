// Remember state object here is only reducer state  this reducer is responsible for
// and the application state
export default function ActiveBookReducer(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}
