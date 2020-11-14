import React from "react";
import { ReactComponent as ShoppingIcon } from "../../images/shopping-bag.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cartAction";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
