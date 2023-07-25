export const VIEW_USER = "VIEW_USER";

export function view_user(user_id) {
  return {
    type: VIEW_USER,
    user_id,
  };
}

export default view_user;
