export const CREATE_NEW_TODO = 'CREATE_NEW_TODO';

export function createNewTodo(content) {
    return {
        type: CREATE_NEW_TODO,
        payload: content
    };
}