export const CREATE_NEW_TODO = 'CREATE_NEW_TODO';
export const TOGGLE_DONE = 'TOGGLE_DONE';

export function createNewTodo(content) {
    return {
        type: CREATE_NEW_TODO,
        payload: content
    };
}

export function toggleDone(index) {
    return {
        type: TOGGLE_DONE,
        payload: index
    };
}