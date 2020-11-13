import { userType } from "./userType";

export const setCurrentUser = (user) => ({
  type: userType,
  payload: user,
});
