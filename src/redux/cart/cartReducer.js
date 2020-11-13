import { cartType } from "../type";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartType:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default cartReducer;
