import { USER_TYPE } from "../type";

export const setCurrentUser = (user) => ({
  type: USER_TYPE,
  payload: user,
});
