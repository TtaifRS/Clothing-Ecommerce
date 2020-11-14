import { CART_TYPE } from "../type";
import { addItemToCart } from "./cartUtilis";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_TYPE.toggleCart:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CART_TYPE.addItem:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
