import React from "react";
import { connect } from "react-redux";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";

import {
  clearItemFromCart,
  addItem,
  decreaseItem,
} from "../../redux/cart/cartAction";
import "./CheckOutItem.scss";

const CheckOutItem = ({ cartItem, clearItem, addItem, decreaseItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartItem)}>
          <BiLeftArrow />
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          <BiRightArrow />
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        <FiDelete />
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
