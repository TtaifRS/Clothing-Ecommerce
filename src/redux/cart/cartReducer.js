import { CART_TYPE } from "../type";
import { addItemToCart, decreaseItemFromCart } from "./cartUtilis";

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

    case CART_TYPE.decreaseItem:
      return {
        ...state,
        cartItems: decreaseItemFromCart(state.cartItems, action.payload),
      };

    case CART_TYPE.clearItemFromCart:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
