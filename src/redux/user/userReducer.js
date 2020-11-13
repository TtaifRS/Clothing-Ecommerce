import { userType } from "./userType";

const INTIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case userType:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
