import { USER_TYPE } from "../type";

const INTIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case USER_TYPE:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
