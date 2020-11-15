import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelector";

import StripeButton from "../../Components/StripeButton";
import CheckOutItem from "../../Components/CheckOutItem";
import "./CheckOutPage.scss";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <hr />
        4242 4242 4242 4242(Visa) 5555 5555 5554 444(Mastercard) 3782 822463
        10005(American Express)
        <br />
        CVC:(Any 3 digits)
        <br />
        DATE:(Any future date)
      </div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
