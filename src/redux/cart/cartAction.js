import { CART_TYPE } from "../type";

export const toggleCart = () => ({
  type: CART_TYPE.toggleCart,
});

export const addItem = (item) => ({
  type: CART_TYPE.addItem,
  payload: item,
});
