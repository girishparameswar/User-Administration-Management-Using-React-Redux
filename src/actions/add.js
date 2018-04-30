export const ADD_USER = 'ADD_USER';

export function add_user(user_obj) {
    return {
        type:ADD_USER,
        user_obj
    }
}
export default add_user;