import { userType } from "../type";

export const setCurrentUser = (user) => ({
  type: userType,
  payload: user,
});
