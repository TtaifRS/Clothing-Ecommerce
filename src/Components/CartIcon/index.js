import React from "react";
import { ReactComponent as ShoppingIcon } from "../../images/shopping-bag.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cartAction";

const CartIcon = ({ toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
