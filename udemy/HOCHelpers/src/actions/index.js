export const CHANGE_AUTH = 'CHANGE_AUTH';

export default function authenticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}
